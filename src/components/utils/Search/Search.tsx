import { useState } from 'react';
import classnames from 'classnames'
import { SearchButton, SearchInput } from './components';

type SearchProps = {
  className?: string
  onClick?: () => void;
  setSearchTitle?: (value: string) => void;
}

const Search = ({ className, onClick, setSearchTitle }: SearchProps) => {
  const [searchTerm, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchTitle(searchTerm)
  }

  return (
    <form className={classnames('align-items-center', 'align-self-flex-start', className, 'flex-row')} aria-label='search-form' onSubmit={(e) => handleSubmit(e)}>
      <SearchInput aria-label='search-input' onChange={setSearch} placeholder='Search Job Titles' />
      <SearchButton aria-label='search-button' onClick={onClick} text='Search' type='submit' />
    </form>
  )
}

export default Search
