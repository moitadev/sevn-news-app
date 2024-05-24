import { Ads, ArticleHeader, Navbar } from '@/components'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchArticle } from '@/fetchers/articles'
import type { IndividualArticle } from '@/Types'

const Article = (): JSX.Element => {
  const { id } = useParams()
  const { data: article } = useQuery<IndividualArticle>({
    queryKey: ['article', id],
    queryFn: () => fetchArticle(id),
  })

  return (
    <>
      <Navbar />
      <article>
        {article && (
          <ArticleHeader
            category={article.category}
            title={article.title}
            subtitle={article.subtitle}
            publicationDate={article.publicationDate}
            author={article.author}
          />
        )}
        <Ads />
        <div className="container">
          <div className="row">
          {article && (<div className="col col-12">{article.text}</div>)}
          </div>
        </div>
      </article>
    </>
  )
}

export { Article }
