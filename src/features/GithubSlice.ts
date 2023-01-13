import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { defaultUserValue } from "../utils/defaultvalues"

const initialState: GithubState = {
  users: [],
  user: defaultUserValue,
  repos: [],
  loading: false,
}

const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    getUsers: (state, actions: PayloadAction<UsersType[]>) => {
      state.users = actions.payload
      state.loading = false
    },
    getUserAndReposData: (
      state,
      actions: PayloadAction<getUserAndReposType>
    ) => {
      state.user = actions.payload.user
      state.repos = actions.payload.repos
      state.loading = false
    },
    setIsLoading: (state) => {
      state.loading = true
    },
    clearSearchUsers: (state) => {
      state.users = []
    },
  },
})

export const { getUsers, setIsLoading, getUserAndReposData, clearSearchUsers } =
  githubSlice.actions

export default githubSlice.reducer
