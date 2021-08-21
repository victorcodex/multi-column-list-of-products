import styled, { keyframes } from 'styled-components';

const LoadingAnimationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
`;

const animationKeyFrames = boxShadowColor =>
  keyframes`
    0% {
      box-shadow: 9984px 0 0 -1px ${boxShadowColor}, 9999px 0 0 1px ${boxShadowColor}, 10014px 0 0 -1px ${boxShadowColor};
    }
    50% {
      box-shadow: 10014px 0 0 -1px ${boxShadowColor}, 9984px 0 0 -1px ${boxShadowColor}, 9999px 0 0 1px ${boxShadowColor};
    }
    100% {
      box-shadow: 9999px 0 0 1px ${boxShadowColor}, 10014px 0 0 -1px ${boxShadowColor}, 9984px 0 0 -1px ${boxShadowColor};
    }
  `;

const LoadingAnimation = styled.div`
  position: relative;
  left: -9999px;
  width: 1vh;
  height: 1vh;
  border-radius: 1vh;
  animation: ${animationKeyFrames("gray")}
    ${props => props.delay} infinite linear;
`;

export {
    LoadingAnimationContainer,
    LoadingAnimation
}