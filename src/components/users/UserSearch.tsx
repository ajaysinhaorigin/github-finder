import { useState } from "react"
import {
  getUsers,
  setIsLoading,
  clearSearchUsers,
} from "../../features/GithubSlice"
import { useAppSelector, useAppDispatch } from "../../hooks/reduxhooks"
import { searchUsers } from "../../services/getGithubUsers"
import { setAlert, removeAlert } from "../../features/AlertSlice"
function UserSearch(): JSX.Element {
  const [text, setText] = useState<string>("")

  const { users } = useAppSelector((state) => state.githubState)
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (text === "") {
      let msg = "Please enter something"
      let type = "error"
      dispatch(setAlert({ msg, type }))
      setTimeout(() => dispatch(removeAlert()), 3000)
    } else {
      dispatch(setIsLoading())
      const users: UsersType[] = await searchUsers(text)
      dispatch(getUsers(users))
      setText("")
    }
  }
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-16 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            onClick={() => dispatch(clearSearchUsers())}
            className="btn btn-ghost btn-lg"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default UserSearch
