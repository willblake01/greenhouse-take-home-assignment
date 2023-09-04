import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Search from './Search'

describe('<Search />', () => {
  it('should be defined', () => {
    expect(Search).toBeDefined()
  })

  test('renders search form', () => {
    render(
      <BrowserRouter>
        <Routes>   
          <Route path="*" element= {<Search />}/>
        </Routes>
      </BrowserRouter>
    )

    const link = screen.getByRole('form', { name: 'search-form' })
    expect(link).toHaveAttribute('aria-label', 'search-form')
  });
})
