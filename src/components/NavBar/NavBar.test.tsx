import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar'

describe('<NavBar />', () => {
  it('should be defined', () => {
    expect(NavBar).toBeDefined()
  })

  test('renders the navbar', () => {
    render(
      <BrowserRouter>
        <Routes>   
          <Route path="*" element= {<NavBar />}/>
        </Routes>
      </BrowserRouter>
    )

    const link = screen.getByRole('link', { name: 'Careers' })
    expect(link).toHaveAttribute('href', '/positions')
  });
})
