import styled from "styled-components";

export default function Navbar() {
  return (
    <Nav>
      {/* Left - Logo */}
      <Left>
        <Logo>
          wellfound<span>:</span>
        </Logo>
      </Left>

      {/* Center - Links */}
      <Center>
        <NavLink>Discover</NavLink>
        <NavLink>For job seekers</NavLink>
        <NavLink>For companies</NavLink>
      </Center>

      {/* Right - Buttons */}
      <Right>
        <Login>Log In</Login>
        <Signup>Sign Up</Signup>
      </Right>
    </Nav>
  );
}

/* ================= STYLED COMPONENTS ================= */

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 72px;
  background: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 48px;
  border-bottom: 1px solid #eee;
`;

const Left = styled.div`
  flex: 1;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: #000; /* IMPORTANT */

  span {
    color: #ff4d4f;
    margin-left: 2px;
  }
`;

const Center = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  gap: 36px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 15px;
  color: #000; /* FORCE BLACK */
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
`;

const Login = styled.button`
  background: transparent;
  border: 1px solid #ddd;
  padding: 8px 18px;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 500;
  color: #000;

  &:hover {
    background: #f5f5f5;
  }
`;

const Signup = styled.button`
  background: #0b1c1e;
  color: white;
  border: none;
  padding: 9px 20px;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #000;
  }
`;
