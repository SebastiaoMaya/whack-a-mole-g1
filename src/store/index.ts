/*import { configureStore } from "@reduxjs/toolkit";
import gameReducer, { GameSliceState } from "./gameSlice";

export interface RootState {
  game: GameSliceState;
}

export default configureStore({
  reducer: {
    game: gameReducer,
  },
});*/

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";

import gameReducer from "./gameSlice";

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  game: gameReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
