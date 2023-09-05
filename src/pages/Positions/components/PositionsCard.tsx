import styled from 'styled-components';
import classnames from 'classnames';
import { CardContent, Typography } from '@mui/material'
import { Card } from '../../../components';

const StyledPositionsCard = styled.div`
  .job-card {
    align-items: start;
    background-color: #FFFFFF;
    border-radius: 8px;
    color: #808080;
    height: 12rem;
    margin: 1rem;
    padding: 0.5rem;
    width: 32rem;
    span {
      margin: 0.3rem;
    }
  }

  @media screen and (max-width: 768px) {
    .job-card {
      font-size: 0.5em;
      max-height: 12rem;
      max-width: 20rem;
      overflow: hidden;
    }
  }
`;

const PositionsCard = ({ job, onClick }: any) => {
  const { location = {}, internal_job_id = '', title = '' } = job;
  const { name = '' } = location;

  const cardContent = (
    <CardContent>
      <Typography>
        <span>{`${name}`}</span>
      </Typography>
      <Typography>
        <span><small>{`Internal Job ID: ${internal_job_id}`}</small></span>
      </Typography>
      <Typography>
        <span><strong>{`${title}`}</strong></span>
      </Typography>
    </CardContent>
  )

  return (
    <StyledPositionsCard className={classnames('flex-column', 'flex-wrap-wrap')}>
      <Card className={classnames('justify-content-left', 'job-card')} content={cardContent} onClick={onClick} />
    </StyledPositionsCard>
  )
}

export default PositionsCard
