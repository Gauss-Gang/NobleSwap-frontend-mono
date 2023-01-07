import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

type SkewedBoxProps = {
  minHeight?: string;
} & PropsWithChildren;

const StyledSkewedBox = styled.div<SkewedBoxProps>`
  background: ${({ theme }) => theme.colors.nobleDarkBlue};
  border-radius: 20px 0;
  position: relative;
  min-height: ${(props) => props.minHeight || "auto"};
  padding: 20px;
`;

const SkewedBox: FC<SkewedBoxProps> = (props) => {
  return <StyledSkewedBox {...props}>{props.children}</StyledSkewedBox>;
};

export default SkewedBox;
