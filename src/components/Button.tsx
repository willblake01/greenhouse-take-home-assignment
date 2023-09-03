import { type } from 'os';
import styled from 'styled-components'

const StyledButton = styled.button`
  border-radius: .3rem;
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
`;

type ButtonProps = {
  className?: string
  onClick?: () => void
  text: string
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({ className, onClick, text, type }: ButtonProps) => (
  <StyledButton className={className} onClick={onClick} type={type}>{text}</StyledButton>
)

export default Button
