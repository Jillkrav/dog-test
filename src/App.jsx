import { Route, Routes, NavLink } from "react-router-dom";
import BreedList from "./components/BreedList";
import BreedDetails from "./components/BreedDetails";
import RandomDogImage from "./components/RandomDogImage";

// App: Componente raíz de la aplicación, define la estructura y rutas principales.
function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      {/* Cabecera con navegación */}
      <header className="bg-blue-500 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Listado de razas y subrazas encontrados en la BD</h1>
        <nav className="mt-4">
          {/* Navegación: Utiliza NavLink para permitir la navegación entre componentes */}
          <ul className="flex justify-center gap-4">
            <li><NavLink to="/" className={({ isActive }) => (isActive ? "text-yellow-300" : "text-white")}>Buscador</NavLink></li>
            <li><NavLink to="/imagen-aleatoria" className={({ isActive }) => (isActive ? "text-yellow-300" : "text-white")}>Imagen Aleatoria</NavLink></li>
          </ul>
        </nav>
      </header>
      {/* Contenido principal de la aplicación */}
      <main className="flex-grow p-4">
        {/* Definición de rutas para cada componente */}
        <Routes>
          <Route path="/" element={<BreedList />} />
          <Route path="/raza/:breedName" element={<BreedDetails />} />
          <Route path="/imagen-aleatoria" element={<RandomDogImage />} />
        </Routes>
      </main>
      {/* Pie de página con créditos y enlace a la API */}
      <footer className="bg-blue-500 text-white text-center p-4 mt-4">
        <p>Creado por Felipe para la empresa Escaleno</p>
        <p>Imágenes y datos proporcionados por:</p>
        <a href="https://dog.ceo/dog-api/" className="underline" target="_blank" rel="noopener noreferrer">
          Dog API
        </a>
      </footer>
    </div>
  );
}

export default App;
