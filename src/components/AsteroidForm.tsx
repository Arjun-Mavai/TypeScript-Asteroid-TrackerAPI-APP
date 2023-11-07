import   {   useState } from 'react';
import {useNavigate } from "react-router-dom"
 
export default function AsteroidForm() {
  // Use your actual NASA API key; it's better to store it in an environment variable
//   const apiKey = '7UchYvfuyKe7VHUnVjP8660EvIj9xRiDOoGukq4a';

  // Local state to store the asteroid ID input by the user
  const [asteroidId, setAsteroidId] = useState('');
  const isEmpty = asteroidId.trim() !== '';
  const navigate = useNavigate()

   const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>
   {
    e.preventDefault();
     navigate("/info");
   }

  return (
    <>
      <div>
        <h3>NASA API to Fetch Asteroid Details</h3>
        <fieldset>
          <legend>Enter Asteroid ID</legend>
          <form  onSubmit={handleSubmit}>
            <label htmlFor="asteroidID">Asteroid ID:</label>
            <input
              type="text"
              placeholder="Enter or Generate Asteroid ID"
              value={asteroidId}
              onChange={(e) => setAsteroidId(e.target.value)}
              id="asteroidID"
            />
            <br />
            <button type="submit" disabled={!isEmpty}>
              Submit
            </button>
            <button type="button"  >
              Random ID
            </button>
          </form>
        </fieldset>
      </div>
    </>
  );
}
