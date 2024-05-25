import { Link, useRouteError } from 'react-router-dom'
import style from './ErrorPage.module.scss'
import { Ads, Navbar } from '@/components'

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <section>
      <Navbar />
      <Ads />
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <main className={style.mainWrapper}>
              <h1>Oh, não! :(</h1>
              <p>Ocorreu um erro ao tentar acessar esta página.</p>
              <p>
                <i>{error.statusText || error.message}</i>
              </p>
              <Link to="/">
                <button className={style.back}>Voltar para Home</button>
              </Link>
            </main>
          </div>
        </div>
      </div>
    </section>
  )
}

export { ErrorPage }
