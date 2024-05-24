import style from './NewsList.module.scss'
import { useQuery } from '@tanstack/react-query'
import type { Article } from '@/Types'
import { fetchSecondaryArticles } from '@/fetchers/articles'
import { NewsListItem } from './NewsListItem'

const NewsList = (): JSX.Element => {
  const { data: secondaryArticles } = useQuery<Article[]>({
    queryKey: ['secondaryArticles'],
    queryFn: () => fetchSecondaryArticles(),
  })

  return (
    <ul className={style.NewsList}>
      {secondaryArticles?.map((article, index) => (
        <NewsListItem key={index} article={article} />
      ))}
    </ul>
  )
}

export { NewsList }
