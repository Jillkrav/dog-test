import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from "../utils/StringUtils"

// BreedList: Muestra un listado de razas de perros y permite la interacción del usuario.
function BreedList() {
  // Estado para las razas, filtro de texto y orden de clasificación.
  const [breeds, setBreeds] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  // Efecto para cargar las razas al montar el componente.
  useEffect(() => {
    fetchBreeds();
  }, []);

  // Obtiene la lista de razas desde la API y actualiza el estado.
  const fetchBreeds = async () => {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all');
    if (response.data && response.data.message) {
      const formattedBreeds = Object.keys(response.data.message).map(breed => ({
        name: breed,
        subBreeds: response.data.message[breed]
      }));
      console.log(formattedBreeds)
      setBreeds(formattedBreeds);
    }
  };

  // Filtra y ordena las razas basado en el texto del filtro y el orden seleccionado.
  const filteredBreeds = breeds
    .filter(breed => breed.name.includes(filter))
    .sort((a, b) => sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
  const totalCount = `Razas ${breeds.length} | Subrazas ${breeds.map((e)=>e.subBreeds).reduce((count, array) => {
    return count + array.length; 
  }, 0)}`


  // Renderiza la interfaz de usuario: campo de filtro, botón de orden y lista de razas.
  return (
    <div className="mt-2">
      {/* Interfaz de filtro y ordenamiento */}
      <div className="mb-4 text-center">
        <input
          type="text"
          placeholder={totalCount}
          className="border p-2"
          onChange={(e) => setFilter(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2"
          onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
        >
          Orden {sortOrder === 'asc' ? 'Ascendente' : 'Descendente'}
        </button>
      </div>
      {/* Lista de razas con enlaces a detalles y conteo de subrazas */}
      <ul className="list-disc text-center overflow-auto h-[70vh]">
  {filteredBreeds.map((breed) => (
    <li key={breed.name}>
      <Link to={`/raza/${breed.name}`} className="text-blue-500 hover:text-blue-800">
        {capitalizeFirstLetter(breed.name)} {breed.subBreeds.length > 0 ? `(${breed.subBreeds.join(', ')})` : ''}
      </Link>
    </li>
  ))}
</ul>
    </div>
  );
}

export default BreedList;
