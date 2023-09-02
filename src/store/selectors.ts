import { RootState } from ".";

export const getScore = (state: RootState) => state.game.score;
export const getPlayerName = (state: RootState) => state.game.playerName;
