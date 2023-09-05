import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Positions from './Positions'
import { wait } from '@testing-library/user-event/dist/utils';

describe('<Position />', () => {
  it('should be defined', () => {
    expect(Positions).toBeDefined()
  })

  test('renders the all positions page', async () => {
    render(
      <BrowserRouter>
        <Routes>   
          <Route path="*" element= {<Positions />}/>
        </Routes>
      </BrowserRouter>
    )

    const heading = screen.getByRole('heading', { level: 1 })
    const loadingState = screen.getByRole('status')

    expect(heading).toBeInTheDocument();
    expect(loadingState).toBeInTheDocument();
    expect(heading).toHaveTextContent('Positions');
    
    await waitFor(() => {
      const positionsCount = screen.getByRole('heading', { level: 3 })
      const searchForm = screen.getByRole('form', { name: 'search-form' })

      expect(positionsCount).toBeInTheDocument();
      expect(searchForm).toBeInTheDocument();
      expect(positionsCount).toHaveTextContent('0 positions');
      expect(searchForm).toHaveAttribute('aria-label', 'search-form')
    })
  });
})
