import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import classnames from 'classnames';
import styled from 'styled-components';
import { LoadingSpinner, Search } from '../../components/utils';
import { PositionsCard } from '../../pages/Positions/components';

const StyledPositions = styled.div`
  color: #FFFFFF;
  padding: 4rem 0;
  .margin-left {
    margin-left: 4rem;
  }
  .margin-top {
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    .cards-container {
      flex-direction: column;
    }
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
  const { jobs = [] }: any = data;
  const [isLoading, setIsLoading] = useState(false);
  const [positions, setPositions] = useState([])
  const [searchTitle, setSearchTitle] = useState(null)

  const navigate = useNavigate()

  const filterPositions = () => {
  const filteredPositions = jobs.filter(job => job.title.includes(searchTitle))
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

  useEffect(() => {
    if (searchTitle) filterPositions()
  }, [searchTitle])

  return (
    <StyledPositions className={classnames('align-items-center', 'flex-column')}>
      <h1>All Positions</h1>
      {isLoading ? <LoadingSpinner /> : (
        <Fragment>
          <Search className='margin-left' onClick={filterPositions} setSearchTitle={setSearchTitle} />
          <h3 className={classnames('align-self-flex-start', 'margin-left', 'margin-top')}>{positions?.length} positions</h3>
          <div className={classnames('cards-container', 'flex-row', 'flex-wrap-wrap', 'justify-content-center')}>
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
