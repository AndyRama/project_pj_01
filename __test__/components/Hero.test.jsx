import React from 'react'
import { render, screen } from '@testing-library/react'
import Hero from '@/app/components/Hero'

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe() {
    // Do nothing
  }

  unobserve() {
    // Do nothing
  }
}

Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  value: MockIntersectionObserver,
})

Object.defineProperty(global, 'IntersectionObserverEntry', {
  writable: true,
  value: class MockIntersectionObserverEntry {
    constructor() {}

    get isIntersecting() {
      return true
    }
  },
})

it('should render hero section with all content', () => {
  // Arrange
  const className = 'test-class'

  // Act
  render(<Hero className={className} />)

  // Assert
  expect(screen.getByText('Coaching')).toBeInTheDocument()
  expect(screen.getByText('Personnel')).toBeInTheDocument()
  expect(
    screen.getByText(
      'Allier entraînement rigoureux et nutrition équilibrée pour un mode de vie sain et durable.',
    ),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('link', { name: '🧡 De la team !' }),
  ).toBeInTheDocument()
  expect(screen.getByAltText('hero image')).toBeInTheDocument()
})

it('should render hero section with empty statContent and heroContent', () => {
  // Arrange
  const className = 'test-class'

  // Act
  render(<Hero className={className} />)

  // Assert
  expect(screen.queryAllByText(/Transformations réussit/i)).toHaveLength(1)
  expect(screen.queryAllByText(/Années expériences/i)).toHaveLength(1)
})
