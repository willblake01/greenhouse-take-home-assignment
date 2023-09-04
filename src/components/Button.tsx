import { Button as MUIButton } from '@mui/material'

type ButtonProps = {
  ariaLabel?: string
  className?: string
  name?: string
  onClick?: () => void
  text: string
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({ ariaLabel, className, name, onClick, text, type }: ButtonProps) => (
  <MUIButton aria-label={ariaLabel} className={className} name={name} onClick={onClick} type={type}>{text}</MUIButton>
)

export default Button
