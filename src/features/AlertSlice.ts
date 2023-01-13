import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: AlertState = {
  msg: "",
  type: "",
  error: false,
}

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<AlertActionType>) => {
      state.msg = action.payload.msg
      state.type = action.payload.type
      state.error = true
    },
    removeAlert: (state) => {
      state.msg = ""
      state.type = ""
      state.error = false
    },
  },
})

export const { setAlert, removeAlert } = alertSlice.actions
export default alertSlice.reducer
