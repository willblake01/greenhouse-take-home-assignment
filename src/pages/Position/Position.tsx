import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import { LoadingSpinner } from '../../components/utils';
import { PositionCard } from './components';

const StyledPosition = styled.div`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  padding: 4rem 6rem;
  .margin-top {
    margin-top: 2rem;
  }
`;

const Position = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({});

  useEffect(() => {
    const fetchData = async () => {
    const response = await fetch(`https://boards-api.greenhouse.io/v1/boards/unity3d/jobs/${id}`);
    const data = await response.json();
    return data;
  }
  
  if (id) Promise.all([setIsLoading(true), fetchData()]).then((data: any) => setPosition(data[1])).then(() => setIsLoading(false));
  }, [id])

  return (
    <StyledPosition>
      <h1>Position</h1>
        {isLoading ? <LoadingSpinner /> : <PositionCard className='margin-top' job={position} />}
    </StyledPosition>
  )
}

export default Position
