import { Link } from 'react-router-dom'
import style from './MainNews.module.scss'

const removeAccents = (str: string) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

const MainNews = (): JSX.Element => {
  const category = 'Economia'
  const normalizedCategory = removeAccents(category).toLowerCase()

  return (
    <div className={style.mainNews}>
      <small className={`category-title-${normalizedCategory}`}>Economia</small>
      <h1>
        <Link to="/1">
          Quem não tiver valores a receber nesta etapa poderá ter nas próximas fases,
          diz BC
        </Link>
      </h1>
    </div>
  )
}

export { MainNews }
