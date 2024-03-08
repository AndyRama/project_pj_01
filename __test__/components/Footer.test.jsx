import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Footer from '@/app/components/Footer'

describe('Footer component', () => {
  test('renders footer links correctly', () => {
    const { getByText } = render(<Footer />)

    // Test footer links
    expect(getByText('Débutant')).toBeInTheDocument()
    expect(getByText('Intermédiaire')).toBeInTheDocument()
    expect(getByText('Confirmé')).toBeInTheDocument()
    expect(getByText('Accueil')).toBeInTheDocument()
    expect(getByText('Prestation')).toBeInTheDocument()
    expect(getByText('Team')).toBeInTheDocument()
    expect(getByText('Contact')).toBeInTheDocument()
    expect(getByText('Ressources')).toBeInTheDocument()
    expect(getByText('Application')).toBeInTheDocument()
    expect(getByText('Ebook')).toBeInTheDocument()
    expect(getByText('Calories')).toBeInTheDocument()
    expect(getByText('Support')).toBeInTheDocument()
  })

  test('renders footer company name', () => {
    const { getByText } = render(<Footer />)

    // Test footer company name
    expect(getByText('Unlcoaching.')).toBeInTheDocument()
  })

  test('renders footer copyright information', () => {
    const { getByText } = render(<Footer />)

    // Test footer copyright information
    expect(getByText(/© 2023/i)).toBeInTheDocument()
    expect(getByText(/Unlcoaching./i)).toBeInTheDocument()

    expect(getByText(/All rights reserved./i)).toBeInTheDocument()
    expect(getByText(/Created with/i)).toBeInTheDocument()
    expect(getByText(/by/i)).toBeInTheDocument()
  })
})
