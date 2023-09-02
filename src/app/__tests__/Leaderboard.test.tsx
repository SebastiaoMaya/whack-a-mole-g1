import { Leaderboard } from "app/Leaderboard";
import { AppStore, setupStore } from "store";
import { renderWithProviders } from "utils/test-utils";

describe("Leaderboard", () => {
  let store: AppStore;

  beforeAll(() => {
    store = setupStore();
  });

  it("matches Leaderboard snapshot", async () => {
    const { container } = renderWithProviders(<Leaderboard />, { store });
    expect(container).toMatchSnapshot();
  });
});
