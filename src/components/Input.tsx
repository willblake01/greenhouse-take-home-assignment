import { useEffect, useState } from "react"
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
  placeholder: string
  onChange?: (value: string) => void 
} 

const Input = ({ className, placeholder, onChange }: InputProps) => {
  const [inputValue, setInputValue] = useState(null)

  const handleInput = (e) => {
    const { value } = e.target as HTMLInputElement
    setInputValue(value)
  }

  useEffect(() => {
    if (inputValue) onChange(inputValue)
  })

  return (
  <StyledInput className={className} onChange={handleInput} placeholder={placeholder} />
)
}

export default Input
