import styled from "styled-components";
import { StyledMenuItemProps } from "./types";

export const StyledMenuItemContainer = styled.div<StyledMenuItemProps>`
  position: relative;

  ${({ $isActive, $variant, theme }) =>
    $isActive &&
    $variant === "subMenu" &&
    `
    background-color: ${theme.colors.noblePurple};
    border-radius: 5px;
    `};
`;

const StyledMenuItem = styled.a<StyledMenuItemProps>`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 4px;
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.secondary : theme.colors.textSubtle)};
  font-size: 16px;
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};
  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};
  pointer-events: ${({ $isDisabled }) => ($isDisabled ? "none" : "inherit")};

  ${({ $statusColor, theme }) =>
    $statusColor &&
    `
    &:after {
      content: "";
      border-radius: 100%;
      background: ${theme.colors[$statusColor]};
      height: 8px;
      width: 8px;
      margin-left: 12px;
    }
  `}

  ${({ $variant, theme, $isActive }) =>
    $variant === "default"
      ? `
    padding: 0 25px;
    height: 48px;
    transform: translateY(4px);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    background: ${$isActive ? theme.colors.tertiary : ""};

    &:hover {
      background: ${theme.colors.tertiary};
    }
  `
      : `
    padding: 5px 10px 5px 10px;
    height: 42px;
    border-radius:7px;
    &:hover {
      background: ${theme.colors.noblePurple};
    }
  `}
`;

export default StyledMenuItem;
