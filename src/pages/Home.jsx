import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import generateFakeData from '../data/fakeData';
import AnimalCard from '../components/AnimalCard';
import '../styles.css'; 

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [animals, setAnimals] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/results?query=${encodeURIComponent(searchTerm.trim())}`);

    // Simula búsqueda local (temporal hasta que Results lo maneje)
    generateFakeData().then(setAnimals);
    setSelectedAnimal(null);
  };

  return (
    <div className="container">
      <header><h1>Animal Search</h1></header>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search animals..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search animals"
        />
        <button type="submit">Search</button>
      </form>

      {/* Sección de resultados y detalle */}
      {animals.length > 0 && (
        <div className="result-layout">
          <div className={`results ${selectedAnimal ? 'shrink' : ''}`}>
            {animals.map((animal) => (
              <div
                key={animal.id}
                className="card"
                onClick={() => setSelectedAnimal(animal)}
              >
                <img src={animal.image} alt={animal.title} />
                <h3>{animal.title}</h3>
              </div>
            ))}
          </div>

          {selectedAnimal && (
            <AnimalCard animal={selectedAnimal} />
          )}
        </div>
      )}

      <footer><p>© Footer visual</p></footer>
    </div>
  );
}

export default Home;
