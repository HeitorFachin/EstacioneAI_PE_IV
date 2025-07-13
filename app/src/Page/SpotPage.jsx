import { useEffect, useState } from "react";
import Title from "../components/Text/Title";
import apiRouter from "../api/api";

function SpotPage() {
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getSpots = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiRouter.get("/spot/spotlist");
      setSpots(response.data);
    } catch (err) {
      console.error("Error fetching spots:", err);
      setError("Failed to load parking spots. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSpots();
  }, []);

  return (
    <div className="flex flex-col h-screen grow space-y-4 p-4">
      <Title>PARKING SPOT</Title>

      {loading && (
        <div className="flex items-center justify-center h-full">
          <div className="flex space-x-2">
            <span className="sr-only">Carregando spots...</span>
            <div className="h-3 w-3 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-4 w-4 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-5 h-5 bg-blue-600 rounded-full animate-bounce"></div>
          </div>
        </div>
      )}

      {error && (
        <div className="p-4 text-red-700 bg-red-100 border border-red-400 rounded">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <>
          {spots.length > 0 ? (
            <div className="grid grid-cols-8 grid-rows-3 gap-2 h-full">
              {spots.map((spot) => (
                <div
                  key={spot.id}
                  className={`${
                    spot.car
                      ? "bg-red-700 cursor-pointer"
                      : "bg-green-700 cursor-pointer"
                  } flex items-center justify-center text-white font-bold text-2xl rounded-lg h-full`}
                  title={
                    spot.car
                      ? `Ocupado por: ${spot.car.marca} ${spot.car.modelo} (${spot.car.placa})`
                      : "Vaga Livre"
                  }
                >
                  {spot.line} - {spot.number}{" "}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <p>Nenhuma vaga de estacionamento encontrada.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default SpotPage;
