import { Link } from 'react-router-dom'
import { Camera } from '../icons'
import style from './NewsCard.module.scss'

const NewsCard = (): JSX.Element => {
  const bgImageURL = 'https://conteudo.imguol.com.br/c/entretenimento/a7/2021/04/12/aula-na-pandemia-covid-escola-1618259816196_v2_900x506.jpg'

  return (
    <div className={style.card}>
      <Link to="/2">
        <div className={style.cardImage}>
          {bgImageURL ? (
            <img src={bgImageURL} className={style.image} alt="" />
          ) : (
            <Camera width="48px" height="48px" />
          )}
        </div>
      </Link>
      <div className={style.cardBody}>
        <small>Educação</small>
        <h4>
          <Link to="/2">
            Datafolha: após ensino remoto, 76% precisam de reforço na
            alfabetização
          </Link>
        </h4>
      </div>
    </div>
  )
}

export { NewsCard }
