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
  inputValue?: string
  onChange?: (value: string) => void;
  onClick?: () => void
  setInputValue?: (value: string) => void
}

const Search = ({ className, onChange, onClick }: SearchProps) => {
  const [inputValue, setInputValue] = useState(null)

  const handleSubmit = () => {
    console.log('Now!!!')
    Promise.all([
      setInputValue(inputValue),
    ]).then(
      () =>
        ((document.getElementById(
          'input-id'
        ) as HTMLInputElement).value = null)
    )
  }

  return (
    <StyledSearch>
      <Input className={className} inputValue={inputValue} onChange={onChange} placeholder='Search Job Titles' setInputValue={setInputValue} />
      <Button onClick={onClick} onSubmit={handleSubmit} text='Search' />
    </StyledSearch>
  )
}

export default Search
