import apiRouter from "../api/api";
import AddBooking from "../components/Modal/AddBooking";
import Title from "../components/Text/Title";
import CardSpot from "../components/Card/CardSpot";
import { PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";

function Dashboard() {
  const [modalAdd, setModalAdd] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleModal = () => {
    setModalAdd(!modalAdd);
  };

  const getData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiRouter.get("/spot/spotlist");
      setData(response.data);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to load parking data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const occupiedSpots = data.filter((spot) => spot.car);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">
          <div className="flex space-x-2">
            <span className="sr-only">Carregando...</span>
            <div className="h-3 w-3 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-4 w-4 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-5 h-5 bg-blue-600 rounded-full animate-bounce"></div>
          </div>
        </div>
      )}
      <div className="flex flex-col h-screen p-4 space-y-4">
        <div className="flex items-center justify-between">
          <Title>DASHBOARD</Title>
          <button
            onClick={toggleModal}
            className="flex items-center justify-start gap-2 p-2 text-lg font-medium text-white bg-green-600 rounded-lg hover:bg-green-500 w-fit"
          >
            <PlusCircle size={20} />
            Adicionar
          </button>
        </div>

        {error && (
          <div className="p-4 text-red-700 bg-red-100 border border-red-400 rounded">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            {occupiedSpots.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-rows-fr">
                {occupiedSpots.map((spot) => (
                  <CardSpot key={spot.id} spot={spot} getData={getData} />
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                <p>Nenhum carro estacionado no momento.</p>
              </div>
            )}
          </>
        )}
      </div>
      {modalAdd && <AddBooking modal={toggleModal} refreshData={getData} />}
    </>
  );
}

export default Dashboard;
