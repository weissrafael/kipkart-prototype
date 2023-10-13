import styled from "styled-components/native";
import { BoldTitle } from "../../../../styles/common.styles";
import { colors } from "../../../../styles/styleGuide";

export const ModalContainer = styled.TouchableWithoutFeedback`
  flex: 1;
  width: 100%;
  justify-content: center;
`;

export const Container = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
  background-color: white;
  padding: 32px 16px 16px 16px;
  justify-content: space-between;
`;

export const ModalText = styled(BoldTitle)`
  color: ${colors.secondary};
`;

export const InputContainer = styled.View`
  width: 100%;
`;

export const ButtonsRow = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
