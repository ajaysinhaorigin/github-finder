import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppState, AppDispatch } from "../app/store"

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
