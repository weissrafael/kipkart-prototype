import styled from "styled-components/native";
import { colors } from "../../../styles/styleGuide";


export const FooterContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  padding: 16px 16px;
  align-items: center;
  flex-direction: row;
  background-color: ${({bgColor}) => bgColor ? bgColor : colors.white};
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
  elevation: 5;
`;

export const FooterButton = styled.TouchableOpacity`
  
`;