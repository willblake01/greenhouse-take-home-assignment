import styled from 'styled-components';
import classnames from 'classnames'

const StyledNavBar = styled.header`
  background-color: #FFFFFF;
  color: #000000;
  .nav-content {
    height: 100%;
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

  @media screen and (max-width: 768px) {
    width: 100%;

    a {
      font-size: 0.8rem;
    }
    .nav-logo {
      height: 2rem;
      width: 5rem;
    }
  }
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <div className={classnames('align-items-center', 'flex-row', 'justify-content-left', 'nav-content')}>
        <a className={classnames('nav-item', 'nav-logo')} href='/positions' rel='home'>Unity Home Link</a>
        <a className={classnames('nav-item', 'navbar-link')} href='/positions' rel='home'>Careers</a>
      </div>
    </StyledNavBar>
  );
}

export default NavBar;
