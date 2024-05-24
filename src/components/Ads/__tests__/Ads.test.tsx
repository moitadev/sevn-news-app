import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Ads } from '../Ads'

const setup = (bgImageURL: string) => {
  render(<Ads bgImageURL={bgImageURL} />)
}

describe('Ads component', () => {
  it('renders without crashing', () => {
    setup('')
  })

  it('renders with background image when provided', () => {
    const bgImageURL = 'https://example.com/image.jpg'
    setup(bgImageURL)

    expect(screen.getByRole('adsdialog')).toHaveStyle(
      `background-image: url(${bgImageURL})`
    )
  })

  it('renders a heading when no image is provided', () => {
    setup('')

    expect(screen.getByRole('heading', { level: 2 })).toBeTruthy()
  })
})
