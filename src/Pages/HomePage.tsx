// HomePage.tsx
import React, { useState } from 'react';
import { useAsteroidQuery } from '../features/asteroids/useAsteroidQuery';
import AsteroidForm from '../componnents/AsteroidForm';
 
const HomePage: React.FC = () => {
  const [asteroidId, setAsteroidId] = useState('');
  const asteroidQuery = useAsteroidQuery(asteroidId);

  return (
    <div  >
      <h3>Welcome to the Asteroid Info App</h3>
    
     {!asteroidQuery.data? (  <AsteroidForm fetchAsteroid={setAsteroidId} />):(  <div style={{display:"flex",flexDirection:'column'}}>
        { asteroidQuery.data.name}
        <a href={ asteroidQuery.nasa_jpl_url} alt="">Nasa-JPL-URL</a>
        Is Potentially Hazardous: {asteroidQuery.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
        
        </div>)}
    </div>
  );
};

export default HomePage;

 
  