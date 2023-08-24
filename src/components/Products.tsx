import { styled } from "styled-components";
import { Anime } from "./Anime";
import image from "../assets/productsImage.jpg"

const ProductsContainer = styled.section`
  width: 60%;
  height: 420px;
  margin: 40px auto;
  padding: 40px;
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

const ProductsWrapper = styled.div`
  display: flex;
  text-align: left;
`;


const ProductsImage = styled.div`
  width: 420px;
  height: 280px;
  margin-right: 40px;
  background: url(${image}) 0 0 no-repeat;
  background-size: contain;
`;

const ProductsDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const H3 = styled.h2`
  width: 272px;
  margin-bottom: 4px;
  line-height: 1.2;
`;

const P = styled.p`
  margin: 4px 0;
`;

const Button = styled.button`
  padding: 4px 0;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: #aeccdd;
  color: #fff;
  font-size: 1.5rem;
  transition: .3s all;
  &&:hover {
    border-color: #aeccdd;
    background-color: #fff;
    color: #aeccdd;
  }
`;
/////////////////////////////////////////////////////////////////////////////////////
//
//
//
/////////////////////////////////////////////////////////////////////////////////////
export const Products = () => {
  return (
    <ProductsContainer id="products">
      <Anime animation="to-top" rootMargin="-100px" triggerOnce>

      <H2>products</H2>
      <ProductsWrapper>
        <ProductsImage/>
        <ProductsDesc>
          <H3>
            <big><big>Luminance</big></big><br />
            amino acid<br />
            shampoo & conditioner
          </H3>
          <P>濃密泡でRich ＆ Luxuryな<br />スペシャルケア</P>
          <hr style={{margin: "8px 0"}}/>
          <P>スィート ＆ フローラルの香り<br />各 450ml / 4080円（税込）</P>
          <Button>online store</Button>
        </ProductsDesc>
      </ProductsWrapper>
      </Anime>
    </ProductsContainer>
  )
}
