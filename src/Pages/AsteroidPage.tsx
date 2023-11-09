// src/pages/AsteroidPage.tsx

import React from 'react';
import { useSelector } from 'react-redux';
 import AsteroidInfo from '../componnents/AsteroidInfo';
import { selectAsteroids } from '../app/store';
 
const AsteroidPage: React.FC = () => {
  // Using the selector from the slice for safety
  const asteroids = useSelector(selectAsteroids);
  console.log({asteroids})

  // Ensure we have an asteroid to display or render a fallback
  const asteroid = asteroids[0];
  if (!asteroid) {
    return <div>No asteroid data available.</div>;
  }

  return (
    <div>
      <AsteroidInfo asteroid={asteroid} />
    </div>
  );
};

export default AsteroidPage;
 