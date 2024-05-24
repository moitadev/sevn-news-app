import { Link } from 'react-router-dom'
import style from './MainNews.module.scss'
import { NewsProps } from '@/Types'

const removeAccents = (str: string) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

const MainNews = ({ article }: NewsProps): JSX.Element => {
  const normalizedCategory = removeAccents(article.category).toLowerCase()

  return (
    <div className={style.mainNews}>
      <small className={`category-title-${normalizedCategory}`}>
        {article.category}
      </small>
      <h1>
        <Link to={`/${article.id}`}>{article.title}</Link>
      </h1>
    </div>
  )
}

export { MainNews }
