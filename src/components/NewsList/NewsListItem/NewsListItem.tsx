import { Link } from 'react-router-dom'
import style from './NewsListItem.module.scss'

const removeAccents = (str: string) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }

const NewsListItem = (): JSX.Element => {
    const category = 'Economia'
    const normalizedCategory = removeAccents(category).toLowerCase()

  return (
    <li className={style.listItem}>
      <div className={`category-bg-${normalizedCategory} ${style.borderLeft}`}></div>
      <h5>
        <Link to="/3">
          Quem não tiver valores a receber poderá ter nas próximas fases, diz BC
        </Link>
      </h5>
    </li>
  )
}

export { NewsListItem }
