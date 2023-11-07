import { useQuery } from '@tanstack/react-query';

const API_KEY = '7UchYvfuyKe7VHUnVjP8660EvIj9xRiDOoGukq4a'; 

export const useAsteroidData = async () => {
  return useQuery({
    queryKey:['asteroids'] ,
    queryFn: async() => {
    const response = await fetch(
      `https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=${API_KEY}`
    );
  
    if (!response.ok) {
      throw new Error(`Network response was not ok`);
    }
    return response.json();
  }})
};


 