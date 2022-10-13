import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mainColor } from '../../Theme';

const Nav = () => {
  return (
    <NavWrapper>
      <NavItem to='/'>AUDIO</NavItem>
      <NavItem to='/record'>RECORD</NavItem>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  /* background-color: ${mainColor}; */
  background: linear-gradient(to right, #f0ff00, #58cffb);
  font-weight: 3em;
`;

const NavItem = styled(Link)`
  padding: 20px 0;
  color: white;
  font-size: 30px;
  :hover {
    text-shadow: 0 2px #000;
    transform: scale(1.2);
  }
  :focus {
    text-shadow: 0 2px #000;
    transform: scale(1.2);
  }
`;
