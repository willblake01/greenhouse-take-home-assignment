import classnames from 'classnames'
import styled from 'styled-components'
import { Button, Input } from '../../../../components'

const StyledSearch = styled.div`
  align-self: flex-start;
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
    <StyledSearch className={classnames('align-items-center', 'flex-row')}>
      <Input className={className} onChange={onChange} placeholder='Search Job Titles' />
      <Button onClick={onClick} onSubmit={handleSubmit} text='Search' />
    </StyledSearch>
  )
}

export default Search
