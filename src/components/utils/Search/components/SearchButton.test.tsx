import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import SearchButton from './SearchButton'

describe('<SearchButton />', () => {
  it('should be defined', () => {
    expect(SearchButton).toBeDefined()
  })

  test('renders search button', () => {
    render(
      <BrowserRouter>
        <Routes>   
          <Route path="*" element= {<SearchButton text='Search' />}/>
        </Routes>
      </BrowserRouter>
    )

    const button = screen.getByRole('button', { name: 'Search' })
    expect(button).toHaveAttribute('name', 'search-button')
  });
})
