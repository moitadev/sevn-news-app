import { Ads, MainNews, Navbar, NewsCard, NewsList } from '@/components'
import { useQuery } from '@tanstack/react-query'
import type { Article } from '@/Types'
import { fetchMainArticles } from '@/fetchers/articles'

const Home = (): JSX.Element => {
  const { data: mainArticles } = useQuery<Article[]>({
    queryKey: ['mainArticles'],
    queryFn: () => fetchMainArticles(),
  })

  return (
    <>
      <Navbar home />
      <Ads />
      <main className="container">
        <div className="row row-spacing">
          <div className="col col-6">
            {mainArticles && <MainNews article={mainArticles[0]} />}
          </div>
          {mainArticles?.slice(1).map((article) => (
            <div key={article.id} className="col col-3">
              <NewsCard article={article} />
            </div>
          ))}
        </div>
        <div className="row row-spacing">
          <div className="col col-12">
            <NewsList />
          </div>
        </div>
      </main>
    </>
  )
}

export { Home }
