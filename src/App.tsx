import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './globalStyle';
import { Position, Positions } from './pages';
import { NavBar } from './components';

const Wrapper = styled.div`
  background-image: url(
    https://careers.unity.com/_next/image?url=%2Fhero%2Fhero.jpg&w=3840&q=75
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
`;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Wrapper>
        <NavBar />
        <Routes>
          <Route path='*' element={<Navigate to='/positions' />} />
          <Route path='/positions' element={<Positions />} />
          <Route path='/position/:id' element={<Position />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
