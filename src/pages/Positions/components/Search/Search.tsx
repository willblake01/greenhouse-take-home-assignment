import { useState } from 'react'
import styled from 'styled-components'
import { Button, Input } from '../../../../components'

const StyledSearch = styled.div`
  align-items: center;
  align-self: flex-start;
  display: flex;
  flex-direction: row;
`;

type SearchProps = {
  className?: string
  onChange?: (value: string) => void;
  onClick?: () => void;
}

const Search = ({ className, onChange, onClick }: SearchProps) => {
  const handleSubmit = () => {
    ((document.getElementById(
      'input-id'
    ) as HTMLInputElement).value = null)
  }

  return (
    <StyledSearch>
      <Input className={className} onChange={onChange} placeholder='Search Job Titles' />
      <Button onClick={onClick} onSubmit={handleSubmit} text='Search' />
    </StyledSearch>
  )
}

export default Search
