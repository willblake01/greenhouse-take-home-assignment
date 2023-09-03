import { useState } from 'react';
import classnames from 'classnames'
import styled from 'styled-components'
import { Button, Input } from '../..'

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
    <form className={classnames('align-items-center', 'align-self-flex-start', 'flex-row')} onSubmit={(e) => handleSubmit(e)}>
      <Input className={className} onChange={setSearch} placeholder='Search Job Titles' />
      <Button onClick={onClick} text='Search' type='submit' />
    </form>
  )
}

export default Search
