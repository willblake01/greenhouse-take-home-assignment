import { Card as MUICard } from "@mui/material"

const Card = ({ className, content, onClick }: any) => (
  <MUICard className={className} onClick={onClick}>
    {content}
  </MUICard>
)

export default Card
