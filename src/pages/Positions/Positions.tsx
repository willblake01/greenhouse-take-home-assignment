import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { LoadingSpinner } from '../../components/utils';
import { PositionsCard } from '../../pages/Positions/components';

const StyledPositions = styled.div`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  .jobs-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
  .meta-data {
    align-self: flex-start;
    margin-left: 1rem;
  }
`;

interface Location {
    name: string;
  }

interface Job {
    absolute_url: string;
    id: number;
    internal_job_id: number;
    location: {
      [key: string]: Location
    }
    title: string;
    updated_at: string;
  }

const Positions = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate()

  const { jobs = [], meta = {} }: any = data;

  const fetchData = async () => {
  const response = await fetch('https://boards-api.greenhouse.io/v1/boards/unity3d/jobs');
  const data = await response.json();
  return data;
}

useEffect(() => {
  Promise.all([setIsLoading(true), fetchData()]).then((data: any) => setData(data[1])).then(() => setIsLoading(false));
  }, [])

  return (
    <StyledPositions>
      <h1>Overview</h1>
      {isLoading ? <LoadingSpinner /> : (
        <Fragment>
          <h3 className='meta-data'>{meta.total} jobs at Unity</h3>
          <div className={'jobs-container'}>
            {jobs.map((job: Job) => {
            return (
              <PositionsCard key={job.id} job={job} onClick={() => navigate(`/positions/${job.id}`)} />
            )
          })}
          </div>
        </Fragment>
      )}
    </StyledPositions>
  )
}

export default Positions
