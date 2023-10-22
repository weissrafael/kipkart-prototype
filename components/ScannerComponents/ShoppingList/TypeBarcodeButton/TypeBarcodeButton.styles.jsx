import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { colors } from "../../../../styles/styleGuide";

const { width } = Dimensions.get("window");
const smallDevice = Dimensions.get("window").width < 380;

export const TypeBarcodeContainer = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${colors.secondary};
  align-items: center;
  justify-content: center;
`;
