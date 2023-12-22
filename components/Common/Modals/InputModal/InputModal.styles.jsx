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
  background-color: ${colors.forestBlues};
  padding: 16px;
`;

export const ModalText = styled(BoldTitle)`
  color: ${colors.white};
  margin-bottom: 32px;
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
