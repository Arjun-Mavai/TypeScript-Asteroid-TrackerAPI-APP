 

import { useAsteroidData } from '../api/nasaApi';

const AsteroidList = () => {
  const { data, error, isLoading } = useAsteroidData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <ul>
      {data?.map(asteroid => (
        <li key={asteroid.id}>{asteroid.name}</li>
      ))}
    </ul>
  );
};
export default AsteroidList;