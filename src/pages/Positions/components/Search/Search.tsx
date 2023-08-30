import styled from 'styled-components'
import { Button, Input } from '../../../../components'
import { Dispatch } from 'react';

const StyledSearch = styled.div`
  align-items: center;
  align-self: flex-start;
  display: flex;
  flex-direction: row;
`;

type SearchProps = {
  className?: string
  onChange?: (value: string) => void;
  onClick?: () => void
}

const Search = ({ className, onChange, onClick }: SearchProps) => {  
  return (
    <StyledSearch>
      <Input className={className} placeholder='Search Job Titles' onChange={onChange} />
      <Button onClick={onClick} text='Search' />
    </StyledSearch>
  )
}

export default Search
