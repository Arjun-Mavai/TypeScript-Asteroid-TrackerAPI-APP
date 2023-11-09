import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { fetchAsteroid } from '../../api/nasaApi';
import { setAsteroidData } from './asteroidsSlice';
import { AsteroidData } from './types';

export const useAsteroidQuery = (asteroidId: string) => {
  const dispatch = useDispatch();

  return useQuery({
    queryKey: ['asteroid', asteroidId],
    queryFn: () => fetchAsteroid(asteroidId),
    onSuccess: (data:AsteroidData) => {
      dispatch(setAsteroidData(data));
    },
    // Add other options if needed
  });
};
