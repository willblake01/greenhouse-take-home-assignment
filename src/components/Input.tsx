import classnames from "classnames"
import { Input as MUIInput } from '@mui/material'

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
  <MUIInput className={classnames('align-items-center', className)} id="input-id" onChange={handleInput} placeholder={placeholder} type='text' />
)
}

export default Input
