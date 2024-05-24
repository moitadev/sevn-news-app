import { Link } from 'react-router-dom'
import style from './Navbar.module.scss'
import { ArrowLeft } from '@/components'

type HeaderProps = {
  home?: boolean
}

const Navbar = ({ home }: HeaderProps): JSX.Element => {
  return (
    <header className={style.header}>
      {!home && (
        <div className={style.backButton}>
          <Link to="/">
            <ArrowLeft />
          </Link>
        </div>
      )}
      <h3 className={style.logo}>
        <Link to="/">SEVN News</Link>
      </h3>
    </header>
  )
}

export { Navbar }
