import RepoItem from "./RepoItem"
type Props = {
  repos: ReposType[]
}
function RepoList({ repos }: Props): JSX.Element {
  return (
    <div className="w-full py-6  rounded-lg shadow-lg card bg-base-100">
      <div className="card-normal lg:card-body  md:card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Repositories
        </h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  )
}

export default RepoList
// w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats
