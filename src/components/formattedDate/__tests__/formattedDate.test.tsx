import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FormattedDate } from '../formattedDate'

describe('FormarttedDate component', () => {
  it('correctly converts date to more humanly readable', () => {
    const publicationDate = "2023-05-23T10:00:00Z";

    render(<FormattedDate isoDate={publicationDate} />)

    expect(screen.getByText('23/05/2023 às 07h00')).toBeInTheDocument()
  })
})
