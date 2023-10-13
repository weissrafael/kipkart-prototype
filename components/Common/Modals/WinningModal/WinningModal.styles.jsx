import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { colors } from "../../../../styles/styleGuide";
import { LargeTitle } from "../../../../styles/common.styles";

const { width } = Dimensions.get("window");
export const ModalContainer = styled.View`
  flex: 1;
  width: 100%;
  position: relative;
`;

export const Container = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
  position: relative;
  background-color: ${colors.primary};
  padding: 16px;
`;

export const Logo = styled.Image`
  width: 60%;
  height: 60px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  align-items: center;
  height: 50%;
  justify-content: space-between;
`;

export const ModalImage = styled.Image`
  width: 80%;
  flex: 1;
`;

export const TextContainer = styled.View`
  width: 100%;
  height: 50%;
  justify-content: space-evenly;
  align-items: center;
`;

export const WinningModalTitle = styled(LargeTitle)`
  font-family: "montserrat-bold";
  color: ${colors.fifth};
  font-size: 32px;
`;

export const WinningModalText = styled(WinningModalTitle)`
  color: ${colors.primary};
  font-family: "montserrat-regular";
  font-size: 18px;
`;

export const ArcBackground = styled.View`
  width: 1000px;
  height: 1000px;
  background-color: ${colors.secondary};
  border-radius: 500px;
  position: absolute;
  bottom: -720px;
  z-index: -1;
`;

export const ConfettiBackground = styled.Image`
  width: ${width - 32}px;
  height: 400px;
  position: absolute;
  z-index: -10;
`;

export const BackContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${colors.primary};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 11;
`;
