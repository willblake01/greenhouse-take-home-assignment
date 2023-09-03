import { Card as MUICard } from '@mui/material'

type CardProps = {
  className?: string
  content: any
  onClick?: () => void
}

const Card = ({ className, content, onClick }: CardProps) => (
  <MUICard className={className} onClick={onClick}>
    {content}
  </MUICard>
)

export default Card
