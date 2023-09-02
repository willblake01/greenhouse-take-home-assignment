import { useEffect } from "react"
import styled from "styled-components"

const StyledInput = styled.input`
  align-items: center;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  margin-right: 0.75rem;
  padding: 1.25rem;
  width: 16rem;
`;

type InputProps = {
  className?: string
  onChange?: (value: string) => void 
  placeholder: string
} 

const Input = ({ className, placeholder, onChange }: InputProps) => {
  const handleInput = (e) => {
    const { value } = e.target as HTMLInputElement
    onChange(value)
  }

  return (
  <StyledInput className={className} id="input-id" onChange={handleInput} placeholder={placeholder} />
)
}

export default Input
