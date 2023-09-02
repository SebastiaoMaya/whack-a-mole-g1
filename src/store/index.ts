import { configureStore } from "@reduxjs/toolkit";
import gameReducer, { GameSliceState } from "./gameSlice";

export interface RootState {
  game: GameSliceState;
}

export default configureStore({
  reducer: {
    game: gameReducer,
  },
});
