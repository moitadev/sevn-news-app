import style from './Ads.module.scss'

type AdsProps = {
  bgImageURL?: string
}

const Ads = ({ bgImageURL }: AdsProps): JSX.Element => {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-12">
          <div
            role="adsdialog"
            className={style.box}
            style={bgImageURL ? { backgroundImage: `url(${bgImageURL})` } : {}}
          >
            {!bgImageURL && <h2 className={style.adsHeading}>Publicidade</h2>}
          </div>
        </div>
      </div>
    </div>
  )
}

export { Ads }
