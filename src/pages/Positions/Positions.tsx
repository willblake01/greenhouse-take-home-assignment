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
  .margin-left {
    margin-left: 4rem;
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
  const { jobs = [], meta = {} }: any = data;
  const [isLoading, setIsLoading] = useState(false);
  const [positions, setPositions] = useState([])
  const [searchTerm, setSearchTerm] = useState(null)

  const navigate = useNavigate()

  const filterPositions = () => {
  const filteredPositions = jobs.filter(job => job.title.includes(searchTerm))
    setPositions(filteredPositions)
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://boards-api.greenhouse.io/v1/boards/unity3d/jobs');
      const data = await response.json();
      return data;
    }

    Promise.all([setIsLoading(true), fetchData()]).then((data: any) => setData(data[1])).then(() => setIsLoading(false));
  }, [])

  useEffect(() => {
    if (jobs.length > 0) setPositions(jobs)
  }, [jobs])

  return (
    <StyledPositions>
      <h1>All Positions</h1>
      {isLoading ? <LoadingSpinner /> : (
        <Fragment>
          <Search className='margin-left' onChange={setSearchTerm} onClick={filterPositions} />
          <h3 className={classnames('align-left', 'margin-left', 'margin-top')}>{positions?.length} positions</h3>
          <div className={classnames('flex-row', 'jobs-container')}>
            {positions.map((job: Job) => {
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
