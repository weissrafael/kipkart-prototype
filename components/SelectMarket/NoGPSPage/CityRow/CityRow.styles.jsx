import styled from "styled-components/native/dist/styled-components.native.esm";
import { RegularText } from "../../../Common/Texts/Texts.styles";
import Colors from "../../../../constants/Colors";
import { colors } from "../../../../styles/styleGuide";

export const Row = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: 70px;
  align-items: center;
  margin: 10px 0;
  padding: 0 15px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.secondary};
`;

export const CityIcon = styled.Image`
  height: 80%;
  width: 15%;
  margin-right: 20px;
`;
export const CityName = styled.Text`
  color: ${Colors.secondary};
  font-family: "montserrat-bold";
  font-size: 16px;
`;
