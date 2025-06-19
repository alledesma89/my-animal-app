import { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import generateFakeData from '../data/fakeData';
import '../styles.css';
import Spinner from '../components/Spinner';

function Results() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const query = searchParams.get('query') || '';
  const [loading, setLoading] = useState(true);
  const [animals, setAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState(query);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const topRef = useRef(null);

  useEffect(() => {
    setSearchTerm(query);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    generateFakeData(query.toLowerCase())
      .then((data) => setAnimals(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [query]);

  function scrollToTopSlow() {
    const scrollDuration = 600;
    const start = window.pageYOffset;
    const startTime = performance.now();

    function animateScroll(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / scrollDuration, 1);
      const easeInOut = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;

      window.scrollTo(0, start * (1 - easeInOut));

      if (elapsed < scrollDuration) {
        requestAnimationFrame(animateScroll);
      }
    }
    requestAnimationFrame(animateScroll);
  }

  useEffect(() => {
    if (selectedAnimal && topRef.current) {
      scrollToTopSlow();
    }
  }, [selectedAnimal]);

  const filteredAnimals = animals.filter(({ title, type }) => {
    if (!query.trim()) return false;
    const lowerQuery = query.toLowerCase();
    return title.toLowerCase().includes(lowerQuery) || type.toLowerCase().includes(lowerQuery);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedAnimal(null);
    navigate(`/results?query=${encodeURIComponent(searchTerm.trim())}`);
  };

  return (
    <div className="container" ref={topRef}>
      <header style={{ marginBottom: '1rem' }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search animals..."
            aria-label="Search animals"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </header>

      {loading && <Spinner />}

      {!loading && !query.trim() && <p>Por favor introduce un término de búsqueda.</p>}

      {!loading && query.trim() && filteredAnimals.length === 0 && (
        <p>No se encontraron resultados para "{query}".</p>
      )}

      {!loading && filteredAnimals.length > 0 && (
        <div className="result-layout">
          <div
            className={`results ${selectedAnimal ? 'shrink' : ''}`}
            role="region"
            aria-label="results"
          >
            {filteredAnimals.map((animal) => (
              <div
                key={animal.id}
                className="card"
                aria-label={`Animal card: ${animal.title}`}
                onClick={() => setSelectedAnimal(animal)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedAnimal(animal);
                  }
                }}
              >
                <img src={animal.image} alt={animal.title} />
                <h3>{animal.title}</h3>
                <p>Tipo: {animal.type}</p>
              </div>
            ))}
          </div>

          {selectedAnimal && (
            <div className="details">
              <img src={selectedAnimal.image} alt={selectedAnimal.title} />
              <h2>{selectedAnimal.title}</h2>
              <p>{selectedAnimal.description}</p>
              <button onClick={() => setSelectedAnimal(null)}>Cerrar</button>
            </div>
          )}
        </div>
      )}

      <footer>
        <p>© Footer visual</p>
      </footer>
    </div>
  );
}

export default Results;
