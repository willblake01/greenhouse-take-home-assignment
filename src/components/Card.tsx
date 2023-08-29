import { Fragment } from 'react';
import styled from 'styled-components';
import { Card as MUICard, CardContent, Typography } from "@mui/material"

const StyledCard = styled.div`
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

const Card = ({ job }: any) => {
  return (
    <StyledCard>
      <MUICard className='job-card'>
        <CardContent key={job.id}>
          <Fragment>
            <Typography>
              <span>{`${job.location.name}`}</span>
            </Typography>
            <Typography>
              <span><small>{`Internal Job ID: ${job.internal_job_id}`}</small></span>
            </Typography>
            <Typography>
              <span><strong>{`${job.title}`}</strong></span>
            </Typography>
          </Fragment>
      </CardContent>
      </MUICard>
    </StyledCard>
  )
}

export default Card
