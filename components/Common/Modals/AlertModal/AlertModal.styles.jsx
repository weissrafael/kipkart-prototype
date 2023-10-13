import styled from "styled-components/native";
import { BoldTitle } from "../../../../styles/common.styles";
import { colors } from "../../../../styles/styleGuide";

export const LogoutContainer = styled.View`
  flex: 1;
  width: 100%;
  position: relative;
`;

export const Container = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
  position: relative;
  background-color: white;
  padding: 16px;
  justify-content: space-between;
`;

export const ImageContainer = styled.View`
  width: 100%;
  align-items: center;
  flex: 2;
  justify-content: space-evenly;
`;

export const ModalImage = styled.Image`
  height: 80%;
  max-height: 250px;
`;

export const LogoutTitle = styled(BoldTitle)`
  margin-top: 16px;
  font-size: 18px;
  color: ${colors.secondary};
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ButtonsRow = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
