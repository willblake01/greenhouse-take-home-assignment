import styled from 'styled-components';

const StyledNavBar = styled.header`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100px;
  .nav-content {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 6rem;
    justify-content: space-between;
    padding: 2rem 4rem;
    position: static;
    z-index: 2;
  }
  .nav-logo {
    background-image: url(https://www.greenhouse.com/assets/svg/logo.svg);
    background-repeat: no-repeat;
    background-size: 100%;
    display: inline-block;
    height: 3rem;
    text-indent: -9999px;
    width: 12.5rem;
  }
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <header className='App-header'>
        <div className='nav-content'>
          <a className='nav-logo' href='/positions' rel='home'>Greenhouse Home Link</a>
          <a href='/positions' rel='home'>Careers</a>
        </div>
      </header>
    </StyledNavBar>
  );
}

export default NavBar;
