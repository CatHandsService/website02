import styled from "styled-components";
import { Nav } from "./Nav";
import { Link } from "react-scroll";

const HeaderContainer = styled.section`
  width: 100%;
  height: 60px;
  background: rgba(255, 255, 255, .5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
`;

const H1 = styled.h1`
  padding: .5rem 0 0 1rem;
  line-height: 1;
  color: #444;
  cursor: pointer;
`;

///////////////////////////////////////////////////////////////////////////////
//
//
//
///////////////////////////////////////////////////////////////////////////////
export const Header = () => {
  return (
    <HeaderContainer id="Header">
      <Link
        activeClass="active"
        to="HeroImage"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <H1>Luminance</H1>
      </Link>
      <Nav />
    </HeaderContainer>
  )
}
