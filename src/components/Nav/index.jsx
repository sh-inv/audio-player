import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  return (
    <NavWrapper>
      <NavItem to='/play'>음성 목록</NavItem>
      <NavItem to='/record'>녹음 목록</NavItem>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: green;
`;

const NavItem = styled(Link)`
  padding: 20px 0;
  color: black;
  font-size: 30px;
  text-decoration: none;
`;
