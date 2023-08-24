import { styled } from "styled-components"
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useState } from "react";
import { Link } from "react-scroll";

const NavContainer = styled.section`
  width: fit-content;
  height: 60px;
  margin-right: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

const NavWrapper = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: translateY(-50%);
  transition: .3s all;
  position: relative;
 `;

const A = styled.a`
  width: fit-content;
  height: 60px;
  margin: 5px;
  padding: 5px 10px;
  color: #444;
  font-size: 1.5rem;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  position: relative;
  &&::after {
    content: "";
    border-radius: 10px;
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: .3s all;
    scale: 0 0 ;
  }
  &&:hover {
    color: #fff;
  }
  &&:hover::after {
    background: #d4d4d4;
  	scale: 1 1;
  }
`;

const Button = styled.div`
  width: 30px;
  height: 30px;
  margin: auto 0px;
  padding: 0;
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  transition: .3s all;
`;
////////////////////////////////////////////////////////////////////////////////////
//
//
//
////////////////////////////////////////////////////////////////////////////////////

export const Nav = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false);

  const handleChangeState = () => {
    setIsMenu(!isMenu);
    console.log(isMenu);
  }

  return (
    <NavContainer>
      <NavWrapper className={isMenu ? "nav-on" : "nav-off"}>
      <Link
          to="products"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <A>
            Products
          </A>
        </Link>
        <Link
          to="reasons"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <A>
            Reasons
          </A>
        </Link>
        <Link
          to="label-less"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <A>
            Label less
          </A>
        </Link>
        <Link
          to="footer"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <A>
            Contact
          </A>
        </Link>
      </NavWrapper>
      <Button
        className={isMenu ? "menu-on" : "menu-off"}
        onClick={handleChangeState}
      >
        <KeyboardDoubleArrowDownIcon
          sx={{fontSize: "1.8rem"}}
        />
      </Button>
    </NavContainer>
  )
}
