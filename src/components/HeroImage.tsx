import { styled } from "styled-components";
import image from "../assets/HeroImage.jpg"

const HeroImageContainer = styled.section`
  width: 1150px;
  height: 530px;
  margin: 0 auto;
  position: relative;
  top: 120px;
`;

const HeroTitle = styled.div`
  position: absolute;
  bottom: 350px;
  left: 130px;
`;

const H1 = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2rem;
`;

const HeroImg = styled.div`
  width: 720px;
  height: 480px;
  background: url(${image}) 0 0 no-repeat;
  background-size: contain;
  position: absolute;
  bottom: 50px;
  left: 430px;
  z-index: 2;
`;

const HeroDesc = styled.div`
  width: 90%;
  height: 200px;
  padding: 2rem;
  background-color: #D4D4D4;
  text-align: left;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

const P = styled.p`
  margin: .5rem 0;
  font-size: 1.1rem;
`;

const Desc = styled.p`
  width: 380px;
  height: 100px;
`;
///////////////////////////////////////////////////////////////////////////////
//
//
//
///////////////////////////////////////////////////////////////////////////////
export const HeroImage = () => {
  return (
    <HeroImageContainer id ="HeroImage">
      <HeroTitle>
        <H1>Luminance</H1>
        <P>amino acid<br/> shampoo & conditioner</P>
      </HeroTitle>
      <HeroImg />
      <HeroDesc>
        <h2>４種の高浸透型アミノ酸配合</h2>
        <br />
        <Desc>
          リッチなヘアケアで髪に贅沢な輝きを与える、高機能型シャンプー＆コンディショナー。４種の高浸透型アミノ酸が髪の芯から栄養を届け、ハリとコシを取り戻します。洗練された香りに包まれた贅沢なケアが、日々の美容時間を特別なものに変える。
        </Desc>
      </HeroDesc>
    </HeroImageContainer>
  )
}
