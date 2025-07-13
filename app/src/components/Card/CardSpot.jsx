/* eslint-disable react/prop-types */
import { PenBox, Trash2Icon } from "lucide-react";
import apiRouter from "../../api/api";

function CardSpot({ spot, getData }) {
  const deleteBooking = async () => {
    if (!spot.car) {
      alert("Esta vaga está vazia. Não há carro para deletar.");
      return;
    }

    if (
      !window.confirm(
        `Tem certeza que deseja deletar o carro ${spot.car.marca} ${spot.car.modelo} da vaga ${spot.line}-${spot.number}?`
      )
    ) {
      return;
    }

    try {
      console.log(
        `Desassociando carro ID ${spot.car.id} da vaga ID ${spot.id}...`
      );
      await apiRouter.patch(`/spot/${spot.id}`, {
        car_id: null,
      });
      console.log("Vaga liberada com sucesso.");

      console.log(`Deletando carro ID ${spot.car.id}...`);
      await apiRouter.delete(`/car/${spot.car.id}`);
      console.log("Carro deletado com sucesso.");

      getData();
    } catch (e) {
      console.error("Erro ao deletar reserva:", e);
      alert("Erro ao deletar reserva. Verifique o console para mais detalhes.");
    }
  };
  return (
    <div className="relative flex flex-col pt-10 pl-10 space-y-4 w-fit pr-12 h-fit pb-8 rounded-2xl bg-[#040D12]">
      <div className="mb-8">
        <h1 className="absolute flex items-center justify-center left-4 top-4 text-white text-xl font-medium border-2 rounded-full p-1 aspect-square">
          {spot.line} - {spot.number}{" "}
        </h1>
        {spot.car && (
          <>
            <button className="absolute right-14 top-6">
              <PenBox className="text-white" />
            </button>
            <button className="absolute right-4 top-6" onClick={deleteBooking}>
              <Trash2Icon className="text-white" />
            </button>
          </>
        )}
      </div>
      {spot.car ? (
        <>
          <InfoSpot>
            Client: {spot.car.client ? spot.car.client.name : "N/A"}
          </InfoSpot>
          <InfoSpot>
            Car: {spot.car.marca} {spot.car.modelo}
          </InfoSpot>
          <InfoSpot>Entrada: --/--</InfoSpot>
          <InfoSpot>Color: {spot.car.cor}</InfoSpot>
          <InfoSpot>Plate: {spot.car.placa}</InfoSpot>
        </>
      ) : (
        <>
          <InfoSpot>Vaga Livre</InfoSpot>
          <InfoSpot>Estacionamento disponível</InfoSpot>
          <InfoSpot>--/--</InfoSpot>
          <InfoSpot>--/--</InfoSpot>
          <InfoSpot>--/--</InfoSpot>
        </>
      )}
    </div>
  );
}

function InfoSpot({ children }) {
  return <h1 className="text-white font-medium text-xl">{children}</h1>;
}

export default CardSpot;
