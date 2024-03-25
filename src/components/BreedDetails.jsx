import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { capitalizeFirstLetter } from '../utils/StringUtils';

function BreedDetails() {
  const { breedName } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBreedImages = async () => {
      setLoading(true);
      setImages([]); // Reinicia las imágenes antes de cargar nuevas
      try {
        let fetchedImages = 0;
        while (fetchedImages < 3) {
          const response = await axios.get(`https://dog.ceo/api/breed/${breedName}/images/random`);
          if (response.data && response.data.message) {
            const imageUrl = response.data.message;
            // Verifica si la imagen corresponde a la raza y subraza solicitadas.
            if (imageUrl.includes(breedName)) {
              setImages(images => [...images, imageUrl]);
              fetchedImages++;
            }
          }
        }
      } catch (error) {
        console.error("Error fetching breed images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBreedImages();
  }, [breedName]);

  // Función para extraer y formatear la raza y subraza de la URL
  const formatBreedFromUrl = (url) => {
    const [breed, subBreed] = url.split("/")[4].split("-");
    return `${capitalizeFirstLetter(breed)} ${subBreed ? capitalizeFirstLetter(subBreed) : ''}`.trim();
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Imágenes de {capitalizeFirstLetter(breedName)}</h2>
      {loading ? (
        <p>Cargando imágenes...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
              <img src={image} alt="Dog" className="w-full object-cover" style={{ height: "250px" }} />
              <div className="p-3 text-center font-semibold">
                {formatBreedFromUrl(image)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BreedDetails;
