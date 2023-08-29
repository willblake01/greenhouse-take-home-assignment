import styled from 'styled-components';
import { CardContent, Typography } from "@mui/material"
import { Card } from '../../../components';

const StyledPositionsCard = styled.div`
  .job-card {
    align-items: start;
    background-color: #FFFFFF;
    border-radius: 8px;
    color: #808080;
    display: flex;
    flex-direction: column;
    height: 12rem;
    justify-content: left;
    margin: 1rem;
    padding: 0.5rem;
    width: 30rem;
    span {
      margin: 0.3rem;
    }
  }
`;

const PositionsCard = ({ job, onClick }: any) => {
  const content = (
  <CardContent>
    <Typography>
      <span>{`${job.location.name}`}</span>
    </Typography>
    <Typography>
      <span><small>{`Internal Job ID: ${job.internal_job_id}`}</small></span>
    </Typography>
    <Typography>
      <span><strong>{`${job.title}`}</strong></span>
    </Typography>
  </CardContent>
)

  return (
  <StyledPositionsCard>
    <Card className='job-card' content={content} onClick={onClick} />
  </StyledPositionsCard>
  )
}

export default PositionsCard
