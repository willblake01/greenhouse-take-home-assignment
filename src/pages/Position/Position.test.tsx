import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Position from './Position'

describe('<Position />', () => {
  it('should be defined', () => {
    expect(Position).toBeDefined()
  })

  test('renders the single position page', () => {
    render(
      <BrowserRouter>
        <Routes>   
          <Route path="*" element= {<Position />}/>
        </Routes>
      </BrowserRouter>
    )

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Position');
  });
})
