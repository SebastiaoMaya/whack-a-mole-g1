import { createSlice } from "@reduxjs/toolkit";
import { GAME_DURATION_IN_SECONDS } from "../app/constants";
import { Player } from "../app/interfaces";
import { sortLeaderboard } from "./utils";

export interface GameSliceState {
  playerName: string;
  score: number;
  isPlaying: boolean;
  timer: number;
  leaderboard: Array<Player>;
  gameFinished: boolean;
}

const initialState: GameSliceState = {
  playerName: "anonymous",
  score: 0,
  isPlaying: false,
  timer: GAME_DURATION_IN_SECONDS,
  leaderboard: [],
  gameFinished: false,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    incrementScore: (state) => {
      state.score += 2;
    },
    decrementScore: (state) => {
      state.score -= 1;
    },
    changePlayerName: (state, action) => {
      state.playerName = action.payload;
    },
    startGame: (state) => {
      state.isPlaying = true;
    },
    endGame: (state) => {
      state.isPlaying = false;
      state.gameFinished = true;
    },
    decrementTimer: (state) => {
      state.timer -= 1;
    },
    initLeaderboard: (
      state,
      action: { type: string; payload: Array<Player> }
    ) => {
      state.leaderboard = sortLeaderboard(action.payload);
    },
    addPlayerToLeaderboard: (
      state,
      action: { type: string; payload: Player }
    ) => {
      state.leaderboard = sortLeaderboard([
        ...state.leaderboard,
        action.payload,
      ]);
    },
    resetGameState: (state) => ({
      ...initialState,
      leaderboard: state.leaderboard,
    }),
  },
});

export const {
  incrementScore,
  decrementScore,
  changePlayerName,
  startGame,
  endGame,
  decrementTimer,
  initLeaderboard,
  addPlayerToLeaderboard,
  resetGameState,
} = gameSlice.actions;

export default gameSlice.reducer;
