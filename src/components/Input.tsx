import classnames from "classnames"
import { Input as MUIInput } from '@mui/material'

type InputProps = {
  ariaLabel?: string
  className?: string
  name?: string
  onChange?: (value: string) => void
  placeholder: string
} 

const Input = ({ ariaLabel, className, name, placeholder, onChange }: InputProps) => {
  const handleInput = (e) => {
    const { value } = e.target as HTMLInputElement
    onChange(value)
  }

  return (
  <MUIInput className={classnames('align-items-center', className)} id="input-id" aria-label={ariaLabel} name={name} onChange={handleInput} placeholder={placeholder} type='text' />
)
}

export default Input
