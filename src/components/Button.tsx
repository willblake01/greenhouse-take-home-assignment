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
  text: string
}

const Button = ({ text }: ButtonProps) => (
  <StyledButton>{text}</StyledButton>
)

export default Button
