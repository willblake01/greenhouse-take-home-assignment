import { Fragment, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { LoadingSpinner } from '../../components/utils';
import { Button } from '../../components';
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
  .all-positions-button {
    background-color: #2096F3;
  }
`;

const Position = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({});

  const navigate = useNavigate()

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
        {isLoading ? <LoadingSpinner /> : (
          <Fragment>
            <PositionCard className='margin-top' job={position} />
            <Button className='all-positions-button' onClick={() => navigate('/positions')} text='See all positions' />
          </Fragment>
        )}
    </StyledPosition>
  )
}

export default Position
