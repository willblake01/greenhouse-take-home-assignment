import { useState } from 'react';
import classnames from 'classnames'
import styled from 'styled-components'
import { Button, Input } from '../../../../components'

const StyledSearch = styled.form`
  align-self: flex-start;
`;

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
    <StyledSearch className={classnames('align-items-center', 'flex-row')} onSubmit={(e) => handleSubmit(e)}>
      <Input className={className} onChange={setSearch} placeholder='Search Job Titles' />
      <Button onClick={onClick} text='Search' type='submit' />
    </StyledSearch>
  )
}

export default Search
