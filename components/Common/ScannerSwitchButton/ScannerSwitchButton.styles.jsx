import styled from "styled-components/native";
import Colors from "../../../constants/Colors";

export const ButtonContainer = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${Colors.secondary};
  position: absolute;
  bottom: 70px;
  right: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  z-index: 11;
`;
