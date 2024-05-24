import axios from 'axios'

export const fetchMainArticles = async () => {
  const response = await axios.get('http://localhost:3000/home/main-articles')
  const mainArticles = response.data

  return mainArticles
}

export const fetchSecondaryArticles = async () => {
  const response = await axios.get(
    'http://localhost:3000/home/secondary-articles'
  )
  const secondaryArticles = response.data

  return secondaryArticles
}
