// main Github State types
interface GithubState {
  users: UsersType[]
  user: UserType
  repos: ReposType[]
  loading: boolean
}

type UsersType = {
  id: number | string
  login: string
  avatar_url: string
}
type UserType = {
  name: string
  type: string
  avatar_url: string
  location: string
  bio: string
  blog: string
  twitter_username?: string
  login: string
  html_url: string
  followers: number
  following: number
  public_repos: number
  public_gists: number
  hireable?: string
}
type ReposType = {
  id: number
  name: string
  description: string
  html_url: string
  forks: number
  open_issues: number
  watchers_count: number
  stargazers_count: number
}

// github State actions types
interface getUserAndReposType {
  user: UserType
  repos: ReposType[]
}
