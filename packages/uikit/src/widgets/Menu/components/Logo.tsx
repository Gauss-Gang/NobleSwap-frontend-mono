import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import Flex from "../../../components/Box/Flex";
import { LogoIcon, LogoWithTextIcon } from "../../../components/Svg";
import { MenuContext } from "../context";

interface Props {
  href: string;
}

const StyledLink = styled("a")`
  display: flex;
  .mobile-icon {
    ${({ theme }) => theme.mediaQueries.lg} {
      display: none;
    }
  }
  .desktop-icon {
    display: none;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: block;
    }
  }
`;

const Logo: React.FC<React.PropsWithChildren<Props>> = ({ href }) => {
  const { linkComponent } = useContext(MenuContext);
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoIcon className="mobile-icon" width="60px" />
      <LogoWithTextIcon className="desktop-icon" width="80px" />
    </>
  );

  return (
    <Flex alignItems="center">
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Noble Swap home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink href={href} as={linkComponent} aria-label="Noble Swap home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(Logo);
