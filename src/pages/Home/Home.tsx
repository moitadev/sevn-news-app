import { Ads, MainNews, Navbar, NewsCard, NewsList } from '@/components'

const Home = (): JSX.Element => {
  return (
    <>
      <Navbar home />
      <Ads />
      <main className="container">
        <div className="row row-spacing">
          <div className="col col-6">
            <MainNews />
          </div>
          <div className="col col-3">
            <NewsCard />
          </div>
          <div className="col col-3">
            <NewsCard />
          </div>
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
