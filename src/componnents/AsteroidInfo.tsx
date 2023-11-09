 
 
 
interface Props {
  asteroid: {
    name:string;
    nasa_jpl_url:string;
    is_potentially_hazardous_asteroid:boolean;
  };  
}

const AsteroidInfo:React.FC<Props> = ({ asteroid }) => {
  
  if (!asteroid) return null;

  return (
    <div className='asteroidInfo'>
      <h3>{asteroid.name}</h3>
      <p>{asteroid.nasa_jpl_url}</p>
      <p>
        Potentially Hazardous: {asteroid.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
      </p>
    </div>
  );
};

export default AsteroidInfo;
