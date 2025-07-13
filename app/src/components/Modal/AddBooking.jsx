/* eslint-disable react/prop-types */
import apiRouter from "../../api/api";
import { useEffect, useState } from "react";
import InputModal from "../Text/InputModal";
import ButtonModal from "../Button/ButtonModal";

function AddBooking({ modal, data: refreshData }) {
  const [allClients, setAllClients] = useState([]);
  const [allSpots, setAllSpots] = useState([]);
  const [loadingClients, setLoadingClients] = useState(true);
  const [loadingSpots, setLoadingSpots] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState(null);
  const [errorClients, setErrorClients] = useState(null);
  const [errorSpots, setErrorSpots] = useState(null);

  const [cadastro, setCadastro] = useState({
    clientId: "",
    spotId: "",
    marca: "",
    modelo: "",
    cor: "",
    placa: "",
  });

  const handleChange = (field, value) => {
    setCadastro((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setCadastro({
      clientId: "",
      spotId: "",
      marca: "",
      modelo: "",
      cor: "",
      placa: "",
    });
    setErrorSubmit(null);
  };

  const postData = async () => {
    setErrorSubmit(null);
    setLoadingSubmit(true);

    if (
      !cadastro.clientId ||
      !cadastro.spotId ||
      !cadastro.marca ||
      !cadastro.modelo ||
      !cadastro.cor ||
      !cadastro.placa
    ) {
      setErrorSubmit("Por favor, preencha todos os campos.");
      setLoadingSubmit(false);
      return;
    }

    try {
      const carResponse = await apiRouter.post("/car/", {
        marca: cadastro.marca,
        modelo: cadastro.modelo,
        cor: cadastro.cor,
        placa: cadastro.placa,
        client: { id: cadastro.clientId },
      });
      const newCarId = carResponse.data.id;

      await apiRouter.patch(`/spot/${cadastro.spotId}`, {
        car_id: newCarId,
      });

      modal();
      resetForm();
      refreshData();
    } catch (e) {
      console.error("Erro ao criar carro ou atribuir vaga:", e);
      const errorMessage =
        e.response?.data ||
        "Erro ao cadastrar carro ou atribuir vaga. Verifique os dados e tente novamente.";
      setErrorSubmit(errorMessage);
    } finally {
      setLoadingSubmit(false);
    }
  };

  const getClients = async () => {
    setLoadingClients(true);
    setErrorClients(null);
    try {
      const response = await apiRouter.get("/client/listclients");
      setAllClients(response.data);
    } catch (e) {
      console.error("Erro ao buscar clientes:", e);
      setErrorClients("Erro ao carregar clientes. Tente novamente.");
    } finally {
      setLoadingClients(false);
    }
  };

  const getSpots = async () => {
    setLoadingSpots(true);
    setErrorSpots(null);
    try {
      const response = await apiRouter.get("/spot/spotlist");
      // Filtrar apenas as vagas que não têm um carro (estão livres)
      const availableSpots = response.data.filter((spot) => !spot.car);
      setAllSpots(availableSpots);
    } catch (e) {
      console.error("Erro ao buscar vagas:", e);
      setErrorSpots("Erro ao carregar vagas. Tente novamente.");
    } finally {
      setLoadingSpots(false);
    }
  };

  useEffect(() => {
    getClients();
    getSpots();
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/40">
      <div className="flex flex-col justify-center w-1/3 max-w-xl p-6 space-y-2 bg-white rounded-lg max-lg:w-1/2 max-sm:w-5/6">
        <h2 className="mb-2 text-2xl font-semibold text-gray-800">
          Incluir Reserva
        </h2>

        {(loadingClients || loadingSpots || loadingSubmit) && (
          <div className="flex items-center justify-center py-2">
            <div className="h-4 w-4 bg-blue-500 rounded-full animate-bounce mr-2"></div>
            <span className="text-gray-600">Carregando...</span>
          </div>
        )}
        {errorClients && (
          <div className="p-2 text-sm text-red-700 bg-red-100 border border-red-400 rounded">
            {errorClients}
          </div>
        )}
        {errorSpots && (
          <div className="p-2 text-sm text-red-700 bg-red-100 border border-red-400 rounded">
            {errorSpots}
          </div>
        )}
        {errorSubmit && (
          <div className="p-2 text-sm text-red-700 bg-red-100 border border-red-400 rounded">
            {errorSubmit}
          </div>
        )}

        <select
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={cadastro.clientId}
          onChange={(e) => handleChange("clientId", e.target.value)}
          disabled={loadingClients}
        >
          <option value="">Selecione um Cliente</option>
          {allClients.map((client) => (
            <option key={client.id} value={client.id}>
              {client.name}
            </option>
          ))}
        </select>

        <InputModal
          placeholder="Marca"
          value={cadastro.marca.toUpperCase()}
          onChange={(e) => handleChange("marca", e.target.value)}
        />
        <InputModal
          placeholder="Modelo"
          value={cadastro.modelo.toUpperCase()}
          onChange={(e) => handleChange("modelo", e.target.value)}
        />
        <InputModal
          placeholder="Cor"
          value={cadastro.cor.toUpperCase()}
          onChange={(e) => handleChange("cor", e.target.value)}
        />
        <InputModal
          placeholder="Placa"
          value={cadastro.placa.toUpperCase()}
          onChange={(e) => handleChange("placa", e.target.value)}
        />
        <select
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={cadastro.spotId}
          onChange={(e) => handleChange("spotId", e.target.value)}
          disabled={loadingSpots || allSpots.length === 0}
        >
          <option value="">Selecione uma Vaga</option>
          {allSpots.length > 0 ? (
            allSpots.map((spot) => (
              <option key={spot.id} value={spot.id}>
                {spot.line} - {spot.number}
              </option>
            ))
          ) : (
            <option disabled>Nenhuma vaga disponível</option>
          )}
        </select>
        <div className="flex justify-around pt-4">
          <ButtonModal
            bgColor={"bg-green-500 hover:bg-green-700"}
            onClick={postData}
            disabled={
              loadingSubmit ||
              loadingClients ||
              loadingSpots ||
              allSpots.length === 0
            }
          >
            {loadingSubmit ? "Adicionando..." : "Adicionar"}
          </ButtonModal>
          <ButtonModal
            bgColor={"bg-red-500 hover:bg-red-700"}
            onClick={() => modal()}
            disabled={loadingSubmit}
          >
            Fechar
          </ButtonModal>
        </div>
      </div>
    </div>
  );
}

export default AddBooking;
