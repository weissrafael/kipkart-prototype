import styled from "styled-components/native/dist/styled-components.native.esm";
import Colors from "../../../constants/Colors";
import { colors } from "../../../styles/styleGuide";

export const MarketCol = styled.TouchableOpacity`
  width: 100%;
  height: 200px;
  border: 1px ${colors.blueGrotto};
  border-radius: 10px;
  margin-bottom: 32px;
  overflow: hidden;
`;

export const TextWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  padding: 0 16px;
`;

export const MarketAdress = styled.Text`
  font-family: "montserrat-bold";
  font-size: 12px;
  color: ${colors.secondary};
`;

export const MarketName = styled.Text`
  font-family: "montserrat-bold";
  font-size: 16px;
  color: ${colors.secondary};
`;

export const MarketLogo = styled.Image`
  width: 100%;
  height: 70%;
`;
