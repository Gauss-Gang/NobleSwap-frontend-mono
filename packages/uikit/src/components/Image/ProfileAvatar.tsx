import React from "react";
import styled from "styled-components";
import NobleSwapPlaceholder from "../Svg/Icons/NobleSwapPlaceholder";
import BackgroundImage from "./BackgroundImage";
import { BackgroundImageProps } from "./types";

const StyledProfileAvatar = styled(BackgroundImage)`
  border-radius: 50%;
`;

const StyledNobleSwapPlaceholder = styled(NobleSwapPlaceholder)`
  height: 100%;
  width: 100%;
`;

const ProfileAvatar: React.FC<React.PropsWithChildren<BackgroundImageProps>> = (props) => (
  <StyledProfileAvatar loadingPlaceholder={<StyledNobleSwapPlaceholder />} {...props} />
);

export default ProfileAvatar;
