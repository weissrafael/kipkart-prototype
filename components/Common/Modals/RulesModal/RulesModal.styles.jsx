import styled from "styled-components/native/dist/styled-components.native.esm";
import { colors } from "../../../../styles/styleGuide";
import {
  BoldText,
  BoldTitle,
  LargeTitle,
} from "../../../../styles/common.styles";

export const ModalContainer = styled.View`
  flex: 1;
  width: 100%;
  position: relative;
`;

export const Container = styled.ScrollView`
  width: 100%;

  position: relative;
  background-color: ${colors.primary};
`;

export const RulesTitle = styled(BoldTitle)`
  color: ${colors.secondary};
  padding: 30px 0;
`;

export const RulesModalText = styled(BoldText)`
  text-align: center;
  color: ${colors.secondary};
  padding: 0 20px 20px 20px;
`;
