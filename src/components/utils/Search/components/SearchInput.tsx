import { Input } from '../../../../components'
import classnames from 'classnames'
import styled from 'styled-components'

const StyledSearchInput = styled.div`
  .search-input {
    background-color: #FFFFFF;
    border-radius: 0.5rem;
    margin-right: 0.75rem;
    padding: 1.25rem;
    width: 16rem;
  }
`;

type SearchInputProps = {
  className?: string
  onChange?: (value: string) => void
  placeholder: string
}

const SearchInput = ({ className, onChange, placeholder }: SearchInputProps) => (
  <StyledSearchInput>
    <Input className={classnames(className, 'search-input')} onChange={onChange} placeholder={placeholder} />
  </StyledSearchInput>
)

export default SearchInput
