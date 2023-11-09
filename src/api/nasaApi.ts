import axios from 'axios';

const API_KEY =  "7UchYvfuyKe7VHUnVjP8660EvIj9xRiDOoGukq4a"  
 
export const fetchAsteroid = async (asteroidId: string): Promise<any> => {
    console.log({asteroidId})
    const { data } = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${API_KEY}`);
    console.log({data})
    return data;
  };
  




// export const fetchAsteroid = async(asteroidId:string)=>{

//      const response = await axios.get(`https://api.nasa.gov/new/rest/v1/neo/${asteroidId}?api_key=${API_KEY}`)
//      console.log({response})
//       return response.data;

// }

// // export const fetchAsteroid = async (asteroidId: string) => {
// //     console.log({asteroidId})
// //      if(!asteroidId){
// //         throw new Error("Did not get the ID");
// //     }
// //   const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${API_KEY}`);
// //   return response.data;
// // };


export const fetchRandomAsteroid = async ()=>{
    const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`);
    const asteroid = await response.data.near_earth_objects;
    console.log({asteroid});
    const randomIndex = Math.floor(Math.random()*asteroid.length)
    return asteroid[randomIndex].id;
}

// // function for fetching random asteroid ID

// // export const fetchRandomAsteroid = async () => {
// //   const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`);
// //    const asteroids = response?.data.near_earth_objects;
// //   console.log({asteroids})
// //    const randomId = Math.floor(Math.random()*asteroids.length);
// //    console.log({randomId})
// //    return asteroids[randomId].id

// // }

// // export {};



 
