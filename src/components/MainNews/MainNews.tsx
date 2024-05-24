import { Link } from 'react-router-dom'
import style from './MainNews.module.scss'

const MainNews = ():JSX.Element => {
    return (
        <div className={style.mainNews}>
            <small>Economia</small>
            <h1><Link to="/1">Quem não tiver valores a receber nesta poderá ter nas próximas fases, diz BC</Link></h1>
        </div>
    )
}

export { MainNews }