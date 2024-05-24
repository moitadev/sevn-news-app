function formatDate(isoDate: string): string {
  const date = new Date(isoDate)

  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()

  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')

  return `${day}/${month}/${year} às ${hours}h${minutes}`
}

type Props = {
  isoDate: string
}

const FormattedDate = ({ isoDate }: Props) => {
  return <span>{formatDate(isoDate)}</span>
}

export { FormattedDate }
