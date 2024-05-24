import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NewsCard } from '../NewsCard'
import { NewsProps } from '@/Types'
import { MemoryRouter } from 'react-router-dom'

const articleWithImage: NewsProps = {
  article: {
    id: 1,
    title: 'Test Article with Image',
    category: 'Educação',
    image: 'https://example.com/image.jpg',
  },
}

const articleWithoutImage: NewsProps = {
  article: {
    id: 2,
    title: 'Test Article without Image',
    category: 'Economia',
    image: '',
  },
}

const setup = ({ article }: NewsProps) => {
  render(
    <MemoryRouter>
      <NewsCard article={article} />
    </MemoryRouter>
  )
}

describe('NewsCard component', () => {
  it('renders NewsCard component with image', () => {
    setup({ ...articleWithImage })

    expect(screen.getByText('Educação')).toBeInTheDocument()
    expect(screen.getByText('Test Article with Image')).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: 'Test Article with Image' })
    ).toHaveAttribute('src', 'https://example.com/image.jpg')
  })

  it('renders NewsCard component without image', () => {
    setup({ ...articleWithoutImage })

    expect(screen.getByText('Economia')).toBeInTheDocument()
    expect(screen.getByText('Test Article without Image')).toBeInTheDocument()
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
    expect(screen.getByRole('camera-icon')).toBeInTheDocument()
  })

  it('directs links in NewsCard to the correct path', () => {
    setup({ ...articleWithImage })

    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', '/1')
    })
  })

  it('renders category class normalized correctly', () => {
    setup({ ...articleWithImage })

    const categoryElement = screen.getByText('Educação')
    expect(categoryElement).toHaveClass('category-title-educacao')
  })
})
