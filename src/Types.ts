export type Article = {
  id: number
  category: string
  title: string
  image?: string
}

export type NewsProps = {
  article: Article
}
