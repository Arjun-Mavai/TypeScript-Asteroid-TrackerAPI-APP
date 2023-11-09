import { configureStore } from '@reduxjs/toolkit';
import asteroidReducer from '../features/asteroids/asteroidsSlice'
 
export const store = configureStore({
  reducer: {
    asteroid: asteroidReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const selectAsteroids = (state: RootState) => state.asteroid.entities;

export type AppDispatch = typeof store.dispatch;
