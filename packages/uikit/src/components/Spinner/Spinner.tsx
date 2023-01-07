import React from "react";
import styled, { keyframes } from "styled-components";
import NobleSwapIcon from "./NobleSwapIcon";
import { SpinnerProps } from "./types";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const Container = styled.div`
  position: relative;
`;

const RotatingNobleSwapIcon = styled(NobleSwapIcon)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${pulse} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <RotatingNobleSwapIcon width={`${size * 0.5}px`} />
    </Container>
  );
};

export default Spinner;
