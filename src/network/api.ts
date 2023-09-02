import network from ".";
import { Player } from "../app/interfaces";

export const getLeaderboardApi = () =>
  network.get<Array<Player>>("/leaderboard");

export const addPlayerToLeaderboardApi = (player: Player) =>
  network.post("/leaderboard", player);
