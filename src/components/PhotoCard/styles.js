import styled, { keyframes } from 'styled-components';

const fadeInKeyframes = keyframes`
from{
  filter:blur(5px);
  opacity:0;
}

to{
  filter:blur(0);
  opacity:1;
}
`;

export const Article = styled.article`
  min-height: 100px;
`;

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`;

export const Img = styled.img`
  animation: 1s ${fadeInKeyframes} ease;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;
