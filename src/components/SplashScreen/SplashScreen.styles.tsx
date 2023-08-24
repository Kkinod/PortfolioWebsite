import styled from 'styled-components/macro';
import { keyframes } from 'styled-components';

export const LoadingPageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 1rem;
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
`;

const appearAndComeUp = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const NickName = styled.div`
  margin-left: 3px;
  color: #ffffff;
  opacity: 0;
  font-size: 1.25rem;
  letter-spacing: 0.75rem;
  text-transform: uppercase;
  overflow: hidden;
  animation: ${appearAndComeUp} 2s forwards;
  animation-delay: 0.3s;
`;

const drawAnimation = keyframes`
  0% {
    stroke-dashoffset: 4500;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const StyledSvg = styled.svg`
  height: 10rem;
  stroke: #ffffff;
  fill-opacity: 0;
  stroke-width: 3px;
  stroke-dasharray: 4500;
  animation: ${drawAnimation} 10s ease;
`;

export const StyledLogoSvg = () => (
  <StyledSvg
    version="1.1"
    id="svg"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="226.77px"
    height="226.77px"
    viewBox="0 0 226.77 226.77"
    enableBackground="new 0 0 226.77 226.77"
    xmlSpace="preserve"
  >
    <line
      fill="none"
      stroke="#fff"
      strokeWidth="3"
      strokeMiterlimit="10"
      x1="12.997"
      y1="28.528"
      x2="12.997"
      y2="225.203"
    />
    <path
      fill="none"
      stroke="#fff"
      strokeWidth="3"
      strokeMiterlimit="10"
      d="M40.819,198.604V2.977
	c0,0,173.665-2.837,174.99,96.396C217.134,198.606,40.819,198.604,40.819,198.604"
    />
    <path
      fill="none"
      stroke="#fff"
      strokeWidth="3"
      strokeMiterlimit="10"
      d="M67.929,170.216V28.528
	c0,0,120.428,0,120.303,70.845C188.107,170.216,67.929,170.216,67.929,170.216z"
    />
    <path
      fill="none"
      stroke="#fff"
      strokeWidth="3"
      strokeMiterlimit="10"
      d="M215.433,107.781"
    />
    <path
      fill="none"
      stroke="#fff"
      strokeWidth="3"
      strokeMiterlimit="10"
      d="M41.383,197.196"
    />
    <line
      fill="none"
      stroke="#fff"
      strokeWidth="3"
      strokeMiterlimit="10"
      x1="12.472"
      y1="29.583"
      x2="40.439"
      y2="2.593"
    />
    <path
      fill="none"
      stroke="#fff"
      strokeWidth="3"
      strokeMiterlimit="10"
      d="M67.929,56.917c0,0,114.39-13.117,94.601,88.373"
    />
    <line
      fill="none"
      stroke="#fff"
      strokeWidth="3"
      strokeMiterlimit="10"
      x1="41.736"
      y1="197.195"
      x2="13.769"
      y2="224.186"
    />
    <path
      fill="none"
      stroke="#fff"
      strokeWidth="3"
      strokeMiterlimit="10"
      d="M13.497,223.702c0,0,201.936,12.793,201.936-115.922
	"
    />
  </StyledSvg>
);
