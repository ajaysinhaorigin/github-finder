import { useAppSelector } from "../../hooks/reduxhooks"

function Alert(): JSX.Element {
  const { msg, type, error } = useAppSelector((state) => state.alertState)
  if (error) {
    return (
      <p className="flex items-start mb-4 space-x-2">
        {type === "error" && (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-current mr-3"
          >
            <circle cx="12" cy="12" r="12" fill="#FECDD3"></circle>
            <path
              d="M8 8l8 8M16 8l-8 8"
              stroke="#B91C1C"
              strokeWidth="2"
            ></path>
          </svg>
        )}
        <strong>{msg}</strong>
      </p>
    )
  }
  return <></>
}

export default Alert
