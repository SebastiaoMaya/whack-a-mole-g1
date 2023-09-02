import { Player } from "../app/interfaces";

export const sortLeaderboard = (leaderboard: Array<Player>) =>
  leaderboard.sort((a, b) => b.score - a.score);
