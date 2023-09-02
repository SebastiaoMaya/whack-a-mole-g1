import { RootState } from ".";

export const getScore = (state: RootState) => state.game.score;
export const getPlayerName = (state: RootState) => state.game.playerName;
export const getIsPlaying = (state: RootState) => state.game.isPlaying;
export const getTimer = (state: RootState) => state.game.timer;
export const getIsFinished = (state: RootState) => state.game.gameFinished;
export const getLeaderboard = (state: RootState) => state.game.leaderboard;
