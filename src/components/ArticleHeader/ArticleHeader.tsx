import { IndividualArticle } from '@/Types'
import style from './ArticleHeader.module.scss'
import { FormattedDate } from '../formattedDate'

const removeAccents = (str: string) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

const ArticleHeader = ({
  category,
  title,
  subtitle,
  publicationDate,
  author,
}: IndividualArticle): JSX.Element => {
  const normalizedCategory = removeAccents(category).toLowerCase()

  return (
    <div className="container">
      <div className="row">
        <div className="col col-12">
          <div className={style.articleHeader}>
            <div className={style.topHeader}>
              <small className={`category-title-${normalizedCategory}`}>
                {category}
              </small>
              <h1>{title}</h1>
            </div>
            <h2>{subtitle}</h2>
            <small className={style.date}>
              <FormattedDate isoDate={publicationDate} />, Por: {author}
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ArticleHeader }
