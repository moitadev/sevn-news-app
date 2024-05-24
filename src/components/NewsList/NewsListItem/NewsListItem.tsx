import { Link } from 'react-router-dom'
import style from './NewsListItem.module.scss'
import { NewsProps } from '@/Types'

const removeAccents = (str: string) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }

const NewsListItem = ({article}: NewsProps): JSX.Element => {
    const normalizedCategory = removeAccents(article.category).toLowerCase()

  return (
    <li className={style.listItem}>
      <div className={`category-bg-${normalizedCategory} ${style.borderLeft}`}></div>
      <h5>
        <Link to={`/${article.id}`}>
          {article.title}
        </Link>
      </h5>
    </li>
  )
}

export { NewsListItem }
