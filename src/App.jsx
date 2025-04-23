import { useState, useEffect } from 'react';
import Tourcard from './components/Tourcard';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://www.course-api.com/react-tours-project');
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        setTours(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter(tour => tour.id !== id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Tours</h1>
      <div className="tours">
        {tours.map((tour) => (
          <Tourcard 
            key={tour.id} 
            tour={tour} 
            onRemove={removeTour}
          />
        ))}
      </div>
    </div>
  );
}

export default App;