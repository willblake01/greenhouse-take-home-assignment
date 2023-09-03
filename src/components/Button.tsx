import { Button as MUIButton } from '@mui/material'

type ButtonProps = {
  className?: string
  onClick?: () => void
  text: string
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({ className, onClick, text, type }: ButtonProps) => (
  <MUIButton className={className} onClick={onClick} type={type}>{text}</MUIButton>
)

export default Button
