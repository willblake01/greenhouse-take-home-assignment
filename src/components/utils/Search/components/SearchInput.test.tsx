import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import SearchInput from './SearchInput'

describe('<SearchInput />', () => {
  it('should be defined', () => {
    expect(SearchInput).toBeDefined()
  })

  test('renders search input', () => {
    render(
      <BrowserRouter>
        <Routes>   
          <Route path="*" element= {<SearchInput placeholder='Search Job Title' />}/>
        </Routes>
      </BrowserRouter>
    )

    const input = screen.getByRole('textbox', { name: '' })
    expect(input).toHaveAttribute('name', 'search-input')
  });
})
