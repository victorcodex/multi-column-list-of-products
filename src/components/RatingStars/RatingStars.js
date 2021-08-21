import styled from "styled-components";

const RatingStars = styled.span`
  position: relative;
  display: inline-block;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: '★★★★★';
    color: lightgray;
  }
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    content: '★★★★★';
    color: #000000;
    overflow: hidden;
    width: ${props => props.rating}%
`;

export default RatingStars;