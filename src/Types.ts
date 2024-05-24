export type Article = {
  id: number
  category: string
  title: string
  image?: string
}

export type NewsProps = {
  article: Article
}

export type IndividualArticle = {
  id?: number
  category: string
  title: string
  subtitle: string
  text?: string
  publicationDate: string
  author: string
}
