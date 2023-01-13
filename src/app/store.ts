import { configureStore } from "@reduxjs/toolkit"
import githubReducer from "../features/GithubSlice"
import alertReducer from "../features/AlertSlice"
export const store = configureStore({
  reducer: {
    githubState: githubReducer,
    alertState: alertReducer,
  },
})
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
