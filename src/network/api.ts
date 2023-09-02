import network from ".";
import { Player } from "../app/interfaces";

export const getLeaderboardApi = () =>
  network.get<Array<Player>>("/leaderboard");
