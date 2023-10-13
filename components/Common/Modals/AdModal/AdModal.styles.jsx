import styled from "styled-components/native/dist/styled-components.native.esm";
import { colors } from "../../../../styles/styleGuide";
import { BoldText, RegularText } from "../../../../styles/common.styles";

export const ModalContainer = styled.View`
  flex: 1;
  width: 100%;
  position: relative;
`;

export const Container = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
  position: relative;
  background-color: ${colors.primary};
`;

export const AdImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const RulesText = styled(BoldText)`
  text-align: center;
  color: ${colors.primary};
`;

export const OpenRulesButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
`;
