import { Leaderboard } from "app/Leaderboard";
import { Player } from "app/interfaces";
import { AppStore, setupStore } from "store";
import { addPlayerToLeaderboard } from "store/gameSlice";
import { renderWithProviders } from "utils/test-utils";
import { fireEvent, screen } from "@testing-library/react";

const MOCK_PLAYER: Player = {
  id: "uuid",
  name: "mockplayer",
  score: 123,
};

describe("Leaderboard", () => {
  let store: AppStore;

  beforeAll(() => {
    store = setupStore();
  });

  it("matches Leaderboard snapshot", async () => {
    const { container } = renderWithProviders(<Leaderboard />, { store });
    expect(container).toMatchSnapshot();
  });

  it("renders leaderboard with added player", async () => {
    store.dispatch(addPlayerToLeaderboard(MOCK_PLAYER));
    renderWithProviders(<Leaderboard />, { store });

    expect(screen.getByText("Top 10 Players")).toBeInTheDocument();
    expect(screen.getByText("mockplayer")).toBeInTheDocument();
    expect(screen.getByText("123")).toBeInTheDocument();
  });
});
