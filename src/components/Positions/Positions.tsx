import { Fragment } from 'react';
import styled from 'styled-components';

const StyledPositions = styled.div`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
`;

const Positions = () => {
  return (
    <Fragment>
      <StyledPositions>
        <h2>Overview</h2>
      </StyledPositions>
    </Fragment>
  )
}

export default Positions
