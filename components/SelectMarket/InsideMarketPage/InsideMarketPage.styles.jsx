import styled from "styled-components/native/dist/styled-components.native.esm";

import Colors from "../../../constants/Colors";
import { BoldTitle, LargeTitle, Title } from "../../../styles/common.styles";
import { colors } from "../../../styles/styleGuide";

export const WelcomeContainer = styled.View`
  flex: 1;
  padding: 20px 20px 20px 20px;
  background-color: ${Colors.secondary};
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const SelectedMarketLogo = styled.Image`
  height: 40%;
  width: 100%;
`;

export const WelcomeText = styled(LargeTitle)`
  width: 100%;
  text-align: center;
  color: ${Colors.primary};
  font-size: 22px;
  margin-top: 32px;
`;

export const WineText = styled(BoldTitle)`
  color: ${colors.fifth};
  font-size: 28px;
`;

export const WifiContainer = styled.View`
  width: 100%;
  margin-bottom: 60px;
`;

export const WifiInfo = styled.Text`
  color: white;
  font-family: "montserrat-regular";
  font-size: 22px;
  text-align: center;
  margin-bottom: 8px;
`;

export const ButtonsCol = styled.View`
  width: 100%;
  align-items: center;
  position: absolute;
  bottom: 20px;
  z-index: 11;
`;
