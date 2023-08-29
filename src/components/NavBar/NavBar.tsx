import styled from 'styled-components';

const StyledNavBar = styled.header`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
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
    text-indent: -9999px;
  }
  .nav-logo {
    background-image: url(https://www.greenhouse.com/assets/svg/logo.svg);
    background-repeat: no-repeat;
    background-size: 100%;
    display: inline-block;
    height: 3rem;
    width: 12.5rem;
  }
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <header className='App-header'>
        <div className='nav-content'>
          <a className='nav-logo' href='/positions' rel='home'>Greenhouse Home Link</a>
        </div>
      </header>
    </StyledNavBar>
  );
}

export default NavBar;
