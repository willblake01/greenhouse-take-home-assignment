import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import classnames from 'classnames';
import styled from 'styled-components';
import { LoadingSpinner } from '../../components/utils';
import { PositionsCard, Search } from '../../pages/Positions/components';

const StyledPositions = styled.div`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
  .align-left {
    align-self: flex-start;
    margin-left: 1rem;
  }
  .align-items-center {
    align-items: center;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
  }
  .jobs-container {
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
  .margin-top {
    margin-top: 0.5rem;
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

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://boards-api.greenhouse.io/v1/boards/unity3d/jobs');
      const data = await response.json();
      return data;
    }

    Promise.all([setIsLoading(true), fetchData()]).then((data: any) => setData(data[1])).then(() => setIsLoading(false));
  }, [])

  return (
    <StyledPositions>
      <h1>All Positions</h1>
      {isLoading ? <LoadingSpinner /> : (
        <Fragment>
          <Search className={classnames('align-items-center', 'align-left', 'flex-row')} />
          <h3 className={classnames('align-left', 'margin-top')}>{meta.total} positions</h3>
          <div className={classnames('flex-row', 'jobs-container')}>
            {jobs.map((job: Job) => {
            return (
              <PositionsCard key={job.id} job={job} onClick={() => navigate(`/position/${job.id}`)} />
            )
          })}
          </div>
        </Fragment>
      )}
    </StyledPositions>
  )
}

export default Positions
