import { Button } from '../../../../components'
import classnames from 'classnames'
import styled from 'styled-components'

const StyledSearchButton = styled.div`
  .search-button {
    background-color: #FFFFFF;
    border-radius: .3rem;
    color: #000000;
    display: inline-block;
    font-size: 1.25rem;d
    font-weight: 400;
    line-height: 1.5;
    margin: 20px 5px 20px 5px;
    padding: .5rem 1rem;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    z-index: 2;
    :hover {
      background-color: #FFFFFF;
    }
  }
`;

type SearchButtonProps = {
  className?: string
  onClick?: () => void
  text: string
  type?: 'button' | 'submit' | 'reset'
}

const SearchButton = ({ className, onClick, text, type }: SearchButtonProps) => (
  <StyledSearchButton>
    <Button aria-label='search-button' className={classnames(className, 'search-button')} name='search-button' onClick={onClick} text={text} type={type} />
  </StyledSearchButton>
)

export default SearchButton
