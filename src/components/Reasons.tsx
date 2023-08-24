import { styled } from "styled-components";
import { Anime } from "./Anime";
import image1 from "../assets/reasons01.jpeg"
import image3 from "../assets/reasons03.png"


const ReasonsContainer = styled.section`
  width: 100%;
  margin: 80px auto 0;
  padding: 40px 0;
  background-color: #d4d4d4;
  box-shadow: 0 0 0 100vmax #d4d4d4;
  clip-path: inset(0 -100vmax);
`;

const H2 = styled.h2`
  width: fit-content;
  line-height: 2;
  margin: 40px auto;
  text-align: center;
  &&::after{
    content: "";
    width: 200px;
    border-bottom: 2px solid #a6a6a6;
    display: block;
  }
`;

const ReasonsWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ReasonsRows= styled.div`
  margin: 40px 0;
  display: flex;
`;

const Img = styled.img`
  width: 300px;
  height: 200px;

`;

const H3 = styled.h3`
  width: fit-content;
  line-height: 2;
  margin: 20px auto;
  text-align: center;
  &&::after{
    content: "";
    width: 200px;
    border-bottom: 2px solid #a6a6a6;
    display: block;
  }
`;

const P = styled.p`
  width: 300px;
  margin: 0;
`;

const Space = styled.div`
  flex: 1;
`;

const Reasons2 = styled.div`
  width: 300px;
  height: 200px;
  padding: 10px;
  background-color: #fff;
  position: relative;
  &&::before {
    content: "";
    width: 300px;
    height: 200px;
    border: 1px solid #000;
    display: block;
  }
`;

const ReasonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Circle = styled.div`
  width: 80px;
  height: 80px;
  border: 2px solid #a6a6a6;
  border-radius: 50%;
  font-size: .8rem;
  font-weight: 700;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &&::after {
    content: "";
    width: 82px;
    height: 1px;
    border-top: 1px solid #a6a6a6;
    background-color: #a6a6a6;
    display: block;
    position: absolute;
    top: 50%;
    transform: rotate(-45deg) ;
  }
`;
/////////////////////////////////////////////////////////////////////////////////////
//
//
//
/////////////////////////////////////////////////////////////////////////////////////
export const Reasons = () => {
  return (
    <ReasonsContainer id="reasons">
      <H2>reasons</H2>
      <ReasonsWrapper>
        <ReasonsRows>
          <Anime animation="to-right" rootMargin="-100px" triggerOnce>
            <Img src={`${image1}`} alt="reasons01" />
          </Anime>
          <Space />
          <Anime animation="to-left" rootMargin="-100px" triggerOnce>
            <div>
              <H3>４種のアミノ酸</H3>
              <P>絶妙なバランスで配合された４種の高浸透型アミノ酸が頭皮をやさしく洗い上げ、傷んだ髪をうるおいで包む。寝ている間も集中ケア。</P>
            </div>
          </Anime>
        </ReasonsRows>
        <ReasonsRows>
          <Anime animation="to-right" rootMargin="-100px" triggerOnce>
            <div>
              <H3>６つのフリー</H3>
              <P>石油系界面活性剤フリー・無着色・無鉱物油・ノンパラベン・ノンアルコール・ノンシリコンの6つのフリー処方。お子様でも安心してお使いいただけます。</P>
            </div>
          </Anime>
          <Space />
          <Anime animation="to-left" rootMargin="-100px" triggerOnce>
            <Reasons2>
              <ReasonsGrid>
                <Circle>シリコン</Circle>
                <Circle>アルコール</Circle>
                <Circle>パラベン</Circle>
                <Circle>鉱物油</Circle>
                <Circle>合成着色料</Circle>
                <Circle>石油系<br />界面活性剤</Circle>
              </ReasonsGrid>
            </Reasons2>
          </Anime>
        </ReasonsRows>
        <ReasonsRows>
          <Anime animation="to-right" rootMargin="-100px" triggerOnce>
            <Img src={`${image3}`} alt="reasons03" />
          </Anime>
          <Space />
          <Anime animation="to-left" rootMargin="-100px" triggerOnce>
            <div>
              <H3>３段階に展開する香り</H3>
              <P>トップノートは爽やかで軽いシトラスの香り、ミドルノートはフローラルで華やかな香り、ラストノートはぬくもりを感じられるウッディ。<br />最後まで楽しめる香りのピラミッド。</P>
            </div>
          </Anime>
        </ReasonsRows>
      </ReasonsWrapper>
    </ReasonsContainer>
  )
}
