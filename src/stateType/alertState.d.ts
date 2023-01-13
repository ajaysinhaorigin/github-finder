// Alert State type
interface AlertState {
  msg: string
  type: string
  error: boolean
}

// Alert State action types
type AlertActionType = {
  msg: string
  type: string
}
