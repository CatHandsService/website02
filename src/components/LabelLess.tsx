import { styled } from "styled-components";
import { Anime } from "./Anime";
import image1 from "../assets/shampoo_nonlabel.jpg"
import image2 from "../assets/conditioner_nonlabel.jpg"
import image3 from "../assets/bodysoap_nonlabel.jpg"

const LabelLesContainer = styled.section`
  margin: 80px 0;
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
const LabelLesWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const H3 = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`;

const P = styled.p`
  margin: 0;
  text-align: center;
`;

export const LabelLess = () => {
  return (
    <LabelLesContainer id="label-less">
      <Anime animation="to-top" rootMargin="-100px" triggerOnce>
        <H2>ラベルレス ボトル</H2>
        <LabelLesWrapper>
          <div>
            <img src={`${image1}`} alt="labelLess01" />
            <H3>シャンプー</H3>
            <P>ラベルレスボトル<br />450ml / 4080円（税込）</P>
          </div>
          <div>
          <img src={`${image2}`} alt="labelLess02" />
            <H3>コンディショナー</H3>
            <P>ラベルレスボトル<br />450ml / 4080円（税込）</P>
          </div>
          <div>
          <img src={`${image3}`} alt="labelLess03" />
            <H3>ボディソープ</H3>
            <P>ラベルレスボトル<br />450ml / 4080円（税込）</P>
          </div>
        </LabelLesWrapper>
      </Anime>
    </LabelLesContainer>
  )
}
