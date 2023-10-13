import styled from "styled-components/native/dist/styled-components.native.esm";
import Colors from "../../../constants/Colors";
import { Title } from "../../../styles/common.styles";
import { colors } from "../../../styles/styleGuide";

export const ModalHeaderContainer = styled.View`
  flex-direction: row;
  height: 100px;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.secondary};
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ dark }) => (dark ? colors.secondary : colors.white)};
`;

export const IconContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
  border-radius: 30px;
  border: 2px ${({ dark }) => (dark ? colors.white : colors.secondary)};
  position: absolute;
  left: 20px;
`;

export const ModalHeaderTitle = styled(Title)`
  color: ${({ dark }) => (dark ? colors.white : colors.secondary)};
  font-size: 18px;
  padding-left: ${({ dark }) => (dark ? "18px" : 0)};
  font-family: "montserrat-bold";
`;
