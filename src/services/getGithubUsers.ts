import axios, { AxiosInstance } from "axios"

const github: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_URL,
  // headers: { Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` },
})

// Get Search results
export const searchUsers = async (text: string): Promise<UsersType[]> => {
  const params = new URLSearchParams({
    q: text,
  })
  const response = await github.get(`/search/users?${params}`)
  return response.data.items
}

// Get User and Repos results
export const getUserAndRepos = async (
  login: string | undefined
): Promise<getUserAndReposType> => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ])
  return { user: user.data, repos: repos.data }
}
