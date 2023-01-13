import UserResults from "../components/users/UserResults"
import UserSearch from "../components/users/UserSearch"
function Home(): JSX.Element {
  return (
    <div>
      <UserSearch />
      <UserResults />
    </div>
  )
}

export default Home
