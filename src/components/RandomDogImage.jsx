import { useState, useEffect } from "react";
import axios from "axios";
import { capitalizeFirstLetter } from "../utils/StringUtils";

const RandomDogImage = () => {
  // Estados para manejar la URL de la imagen, información de la raza, carga y visibilidad de la info de la raza.
  const [imageUrl, setImageUrl] = useState("");
  const [breedInfo, setBreedInfo] = useState({ breed: "", subBreed: "" });
  const [loading, setLoading] = useState(false);
  const [showBreedInfo, setShowBreedInfo] = useState(false);

  // Función para obtener una imagen aleatoria de un perro y su información de raza.
  const fetchRandomDogImage = async () => {
    setLoading(true);
    setShowBreedInfo(false);
    try {
      const response = await axios.get("https://dog.ceo/api/breeds/image/random");
      if (response.data && response.data.message) {
        setImageUrl(response.data.message);
        extractBreedInfo(response.data.message);
      }
    } catch (error) {
      console.error("Error fetching random dog image:", error);
    } finally {
      setLoading(false);
    }
  };

  // Extrae la información de la raza y subraza a partir de la URL de la imagen.
  const extractBreedInfo = (imageUrl) => {
    const regex = /https:\/\/images\.dog\.ceo\/breeds\/([\w-]+)(\/[\w-]+)?\//;
    const matches = imageUrl.match(regex);
    if (matches) {
      const breed = matches[1].replace("-", " ");
      const subBreed = matches[2] ? matches[2].replace("/", "").replace("-", " ") : "";
      setBreedInfo({
        breed: capitalizeFirstLetter(breed),
        subBreed: capitalizeFirstLetter(subBreed),
      });
    }
  };

  // Inicializa la obtención de la imagen aleatoria al montar el componente.
  useEffect(() => {
    fetchRandomDogImage();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Imagen Aleatoria de un Perro</h2>
      {/* Manejo del estado de carga y visualización de la imagen y su información */}
      {loading ? (
        <p>Cargando...</p>
      ) : (
        imageUrl && (
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={imageUrl} alt="Random Dog" className="w-full" onLoad={() => setShowBreedInfo(true)} />
            {showBreedInfo && (
              <div className="px-6 py-4">
                <p className="text-lg font-semibold">
                  {breedInfo.breed} {breedInfo.subBreed && `- ${breedInfo.subBreed}`}
                </p>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                  onClick={fetchRandomDogImage}
                >
                  Cargar otra imagen
                </button>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default RandomDogImage;
