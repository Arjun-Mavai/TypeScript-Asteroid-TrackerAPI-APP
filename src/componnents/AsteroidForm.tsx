import React, { useState } from 'react';
import { fetchRandomAsteroid } from '../api/nasaApi';
import { useNavigate } from 'react-router-dom';  

interface AsteroidFormProps {
  fetchAsteroid: (id: string) => void;
}

const AsteroidForm: React.FC<AsteroidFormProps> = ({ fetchAsteroid }) => {
    const navigate = useNavigate()
  const [asteroidId, setAsteroidId] = useState('');
  

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetchAsteroid(asteroidId);
    // navigate("/asteroid")
  };

  const handleRandomAsteroidId = async(e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault()
   const id = await fetchRandomAsteroid();
   console.log({id})
    setAsteroidId(id)
  }

  return (
    <fieldset>
        <legend>Asteroid-Details</legend>
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={asteroidId}
        onChange={(e) => setAsteroidId(e.target.value)}
        placeholder="Enter Asteroid ID"
      />
     <div className='btn-box'>
     <button type="submit">Fetch Asteroid</button>
      <button type="submit" onClick={handleRandomAsteroidId}>Random-Asteroid</button>
     </div>

    </form>
    </fieldset>
  );
};

export default AsteroidForm;
export {}
