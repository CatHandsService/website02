import { styled } from "styled-components"
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from "react-scroll";

const BackToTopContainer = styled.section`
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 5;
`;

const LinkTo = styled(Link)`
  width: 50px;
  height: 50px;
  margin: 10px 0;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 255, .5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s all;
  cursor: pointer;
  &&:hover {
    transform: scale(1.2);
  }
`;

export const BackToTop = () => {
  return (
    <BackToTopContainer>
      <LinkTo
        activeClass="active"
        to="HeroImage"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <TwitterIcon sx={{fontSize: "2rem"}}/>
      </LinkTo>
      <LinkTo
        activeClass="active"
        to="HeroImage"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <InstagramIcon sx={{fontSize: "2rem"}}/>
      </LinkTo>
      <LinkTo
        activeClass="active"
        to="HeroImage"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <KeyboardArrowUpIcon sx={{fontSize: "2rem"}}/>
      </LinkTo>
    </BackToTopContainer>
  )
}
