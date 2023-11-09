import { RootState } from "../../app/store" // Replace with your actual store path

export const selectAsteroids = (state: RootState) => state.asteroid.entities;
