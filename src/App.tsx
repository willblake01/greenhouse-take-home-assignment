import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './globalStyle';
import { Position, Positions } from './pages';
import { NavBar } from './components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
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
