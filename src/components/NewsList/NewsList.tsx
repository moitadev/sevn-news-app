import style from './NewsList.module.scss'
import { NewsListItem } from './NewsListItem'

const NewsList = (): JSX.Element => {
    return (
        <ul className={style.NewsList}>
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
        </ul>
    )
}

export { NewsList }