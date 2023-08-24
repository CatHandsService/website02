import { styled } from "styled-components";
import { Anime } from "./Anime";
import image from "../assets/promotion.jpg"

const PromotionContainer = styled.section`
  height: 500px;
  margin-top: 200px;
  padding: 0 20%;
  background-color: #aeccdd;
  box-shadow: 0 0 0 100vmax #aeccdd;
  clip-path: inset(0 -100vmax);
  display: flex;
`;

const H2 = styled.h2`
  width: 350px;
  height: 55px;
  padding-top: 64px;
`;

const P = styled.p`
  width: 350px;
  margin: 0;
  line-height: 1.7;
  text-align: left;
`;

const PromotionImage = styled.div`
  width: 300px;
  height: 500px;
  margin: 48px 0 0 48px;
  background: url(${image}) 0 0 no-repeat;
  background-size: contain;
`;
//////////////////////////////////////////////////////////////////////////////////
//
//
//
//////////////////////////////////////////////////////////////////////////////////
export const Promotion = () => {
  return (
    <PromotionContainer>
      <Anime animation="to-right" rootMargin="-100px" triggerOnce>
        <div>
          <H2>LDK７月号に掲載されました！</H2>
          <P>「口コミなどに頼ることなく、包み隠さず消費者目線で情報発信する本格的なテストをする雑誌」LDK。超有名企業の商品ですら「買う必要なし」と忖度なく酷評する本格コスメ雑誌のシャンプー ＆ トリートメントABC判定100において、Luminanceが総合評価Aをいただきました。</P>
          <br />
          <P>"毛質が柔らかくなり、ハリや艶がでてきた"<br/>"翌朝のスタイリングで効果を実感"</P>
          <br />
          <P>モニターさんからも大好評をいただきました。</P>
        </div>
      </Anime>
      <Anime animation="to-left" rootMargin="-100px" triggerOnce>
        <PromotionImage />
      </Anime>
    </PromotionContainer>
  )
}
