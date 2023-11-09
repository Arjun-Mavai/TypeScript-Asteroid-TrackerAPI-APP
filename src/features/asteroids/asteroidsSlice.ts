// Assuming Asteroid is correctly defined in your types file
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AsteroidData } from './types';

interface AsteroidsState {
  entities: AsteroidData[];
}

const initialState: AsteroidsState = {
  entities: [],
};

const asteroidsSlice = createSlice({
  name: 'asteroids',
  initialState,
  reducers: {
    setAsteroidData(state, action: PayloadAction<AsteroidData>) {
        console.log('Action received:', action); // Log the action object
      console.log('Current state before update:', state.entities); 
      // If you want to replace the entire array, use the line below instead
      // state.entities = [action.payload];

      // This pushes the new asteroid onto the array of existing asteroids
      state.entities.push(action.payload);
      console.log('Updated state after push:', state.entities);
    },
  },
});

export const { setAsteroidData } = asteroidsSlice.actions;
export default asteroidsSlice.reducer;
