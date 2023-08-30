import styled from 'styled-components';
import classnames from 'classnames'

const StyledNavBar = styled.header`
  background-color: #FFFFFF;
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100px;
  .nav-content {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 6rem;
    justify-content: left;
    padding: 2rem 4rem;
    position: static;
    z-index: 2;
  }
  .nav-item {
    margin-right: 1.5rem;
  }
  .nav-logo {
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Unity_2021.svg/2560px-Unity_2021.svg.png);
    background-repeat: no-repeat;
    background-size: 100%;
    display: inline-block;
    height: 5rem;
    text-indent: -9999px;
    width: 12.5rem;
  }
  .navbar-link {
    color: #000000;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <header className='App-header'>
        <div className='nav-content'>
          <a className={classnames('nav-item', 'nav-logo')} href='/positions' rel='home'>Greenhouse Home Link</a>
          <a className={classnames('nav-item', 'navbar-link')} href='/positions' rel='home'>Careers</a>
        </div>
      </header>
    </StyledNavBar>
  );
}

export default NavBar;
