import { Link } from 'react-router-dom'
import { Camera } from '../icons'
import style from './NewsCard.module.scss'
import { NewsProps } from '@/Types'

const removeAccents = (str: string) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

const NewsCard = ({ article }: NewsProps): JSX.Element => {
  const normalizedCategory = removeAccents(article.category).toLowerCase()

  return (
    <div className={style.card}>
      <Link to={`/${article.id}`}>
        <div className={style.cardImage}>
          {article.image ? (
            <img
              src={article.image}
              className={style.image}
              alt={article.title}
            />
          ) : (
            <Camera width="48px" height="48px" role="camera-icon" />
          )}
        </div>
      </Link>
      <div className={style.cardBody}>
        <small className={`category-title-${normalizedCategory}`}>
          {article.category}
        </small>
        <h4>
          <Link to={`/${article.id}`}>{article.title}</Link>
        </h4>
      </div>
    </div>
  )
}

export { NewsCard }
