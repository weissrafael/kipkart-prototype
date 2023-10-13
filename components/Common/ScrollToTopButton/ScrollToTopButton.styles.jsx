import styled from "styled-components/native";
import Colors from "../../../constants/Colors";

export const AbsoluteView = styled.View`
  width: 60px;
  height: 60px;
  background-color: ${Colors.secondary};
  position: absolute;
  bottom: 160px;
  right: 30px;
  z-index: 11;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const ScrollTopButtonContainer = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${Colors.secondary};
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;
