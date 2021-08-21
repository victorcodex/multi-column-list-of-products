import styled from "styled-components";

const ProductsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  & figure.product-box-item {
    margin-bottom: 5vh;
    width: calc(50% - 1vw);
    text-align: center;
    margin: 0;
  }
  & figure.product-box-item figcaption  {
    margin-top: 2vh;
  }
  & figure.product-box-item figcaption.product-name  {
    padding: 0 3vh;
  }
  & figure.product-box-item figcaption.product-type  {
    color: #737373;
  }
  & figure.product-box-item figcaption.product-price-wrapper  {
    font-size: 1rem;
    line-height: 1.2;
  }
  & figure.product-box-item img  {
    height: auto;
    max-width: 100%;
  }
  @media screen and (min-width: 800px) {
    figure.product-box-item {
      width: calc(40% - 6vh);
    }
  }
`;

export default ProductsContainer;