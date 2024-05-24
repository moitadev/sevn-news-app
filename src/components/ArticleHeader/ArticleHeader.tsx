import { IndividualArticle } from '@/Types'
import style from './ArticleHeader.module.scss'

const ArticleHeader = ({
  category,
  title,
  subtitle,
  publicationDate,
  author,
}: IndividualArticle): JSX.Element => {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-12">
          <div className={style.articleHeader}>
            <div className={style.topHeader}>
              <small>{category}</small>
              <h1>
                {title}
              </h1>
            </div>
            <h2>
              {subtitle}
            </h2>
            <small>{publicationDate}, Por: {author}</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ArticleHeader }
