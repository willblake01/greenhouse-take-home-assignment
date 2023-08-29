import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './globalStyle';
import { NavBar, Positions } from './components';

const Wrapper = styled.div`
  background-color: #C8EFE3;
  height: 100vh;
  width: 100vw;
`;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Wrapper>
        <NavBar />
        <Routes>
          <Route path='*' element={<Navigate to='/positions' />} />
          <Route path="/positions" element={<Positions />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
