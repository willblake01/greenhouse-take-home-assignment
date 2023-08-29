import { useEffect, useState } from 'react';
import styled from 'styled-components';
import classnames from 'classnames'

const StyledPositions = styled.div`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  .display-flex {
    display: flex;  
  }
  .job-card {
    align-items: start;
    background-color: #FFFFFF;
    border-radius: 8px;
    color: #808080;
    flex-direction: column;
    height: 12rem;
    justify-content: left;
    margin: 1rem;
    padding: 0.5rem;
    width: 20rem;
    span {
      margin: 0.3rem;
    }
  }
  .jobs-container {
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
  const { jobs = [], meta = {} }: any = data;

  const fetchData = async () => {
  const response = await fetch('https://boards-api.greenhouse.io/v1/boards/unity3d/jobs');
  const data = await response.json();
  return data;
}

useEffect(() => {
  Promise.resolve(fetchData()).then((data) => {
    setData(data)
  });
  }, [])

  return (
    <StyledPositions>
      <h1>Overview</h1>
      <h3 className='meta-data'>{meta.total} jobs at Unity</h3>
      <div className={classnames(['display-flex', 'jobs-container'])}>
        {jobs.map((job: Job) => {
        return (
          <div key={job.id} className={classnames(['display-flex', 'job-card'])}>
            <span>{`${job.location.name}`}</span>
            <span><small>{`Internal Job ID: ${job.internal_job_id}`}</small></span>
            <span><strong>{`${job.title}`}</strong></span>
          </div>
        )
      })}
      </div>
    </StyledPositions>
  )
}

export default Positions
