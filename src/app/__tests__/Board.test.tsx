import { AppStore, setupStore } from "store";
import { GameSliceState } from "store/gameSlice";
import { renderWithProviders } from "utils/test-utils";
import { fireEvent, screen } from "@testing-library/react";
import { Board } from "app/Board";

describe("Board", () => {
  let store: AppStore;

  beforeAll(() => {
    store = setupStore();
  });

  it("matches Board snapshot", async () => {
    const { container } = renderWithProviders(<Board />, { store });
    expect(container).toMatchSnapshot();
  });

  it("clicks retry button and removes overlay", async () => {
    const initialGameSlice: GameSliceState = {
      playerName: "anonymous",
      score: 0,
      isPlaying: false,
      timer: 120,
      leaderboard: [],
      gameFinished: true,
    };

    renderWithProviders(<Board />, {
      preloadedState: {
        game: initialGameSlice,
      },
    });

    expect(screen.getByText("Top 10 Players")).toBeInTheDocument();

    const retry = screen.getByRole("button");
    fireEvent.click(retry);

    expect(screen.queryByText("Top 10 Players")).toBeNull();
  });
});
