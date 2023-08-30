import styled from "styled-components"

const StyledInput = styled.input`
  align-items: center;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

type InputProps = {
  placeholder: string
} 

const Input = ({ placeholder }: InputProps) => (
  <StyledInput placeholder={placeholder} />
)

export default Input
