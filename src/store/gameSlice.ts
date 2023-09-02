import { createSlice } from "@reduxjs/toolkit";

export interface GameSliceState {
  playerName: string;
  score: number;
}
const initialState: GameSliceState = {
  playerName: "anonymous",
  score: 0,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    increment: (state) => {
      state.score += 2;
    },
    decrement: (state) => {
      state.score -= 1;
    },
    changePlayerName: (state, action) => {
      state.playerName = action.payload;
    },
  },
});

export const { increment, decrement } = gameSlice.actions;

export default gameSlice.reducer;
