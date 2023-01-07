import styled from "styled-components";
import { Box } from "../Box";
import Container from "../Layouts/Container";
import { PageHeaderProps } from "./types";

const Outer = styled(Box)<{ background?: string }>`
  background: ${({ theme, background }) => background || theme.colors.gradientNobleDarkBlue};
`;

const Inner = styled(Container)`
  padding-top: 60px;
  padding-bottom: 60px;
  position: relative;
`;

const PageHeader: React.FC<React.PropsWithChildren<PageHeaderProps>> = ({ background, children, ...props }) => (
  <Outer background={background} {...props}>
    <Inner>{children}</Inner>
  </Outer>
);

export default PageHeader;
