import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Positions from './Positions'

describe('<Position />', () => {
  it('should be defined', () => {
    expect(Positions).toBeDefined()
  })

  test('renders the all positions page', () => {
    render(
      <BrowserRouter>
        <Routes>   
          <Route path="*" element= {<Positions />}/>
        </Routes>
      </BrowserRouter>
    )

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Positions');
  });
})
