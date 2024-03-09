import React from 'react'
import { render, screen } from '@testing-library/react'
import CardDescription from '@/app/components/CardDescription'

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
describe('CardDescription', () => {
  // Teste si le titre et le sous-titre sont rendus correctement
  it('should render title and subtitle correctly', () => {
    render(<CardDescription />)
    expect(screen.getByText('Qui suis-je ?')).toBeInTheDocument()
    const mesValeursElements = screen.getAllByText('Mes valeurs')
    expect(mesValeursElements.length).toBe(2)
    expect(screen.getByText('Philosophie')).toBeInTheDocument()
  })

  // Teste si les descriptions sont rendues correctement
  it('should render descriptions correctly', () => {
    render(<CardDescription />)
    expect(screen.getByText(/Bienvenue dans mon univers/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Fort de mon expérience dans l'armée/i),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /Allier entraînement rigoureux et nutrition équilibrée/i,
      ),
    ).toBeInTheDocument()
  })

  // Teste si les images sont rendues correctement
  it('should render images correctly', () => {
    render(<CardDescription />)
    expect(screen.getByAltText(/Card Description Image/i)).toBeInTheDocument()
    expect(screen.getByAltText(/coaching personel Image/i)).toBeInTheDocument()
  })
})
