import styled from "styled-components/native";
import { BoldTitle } from "../../../../styles/common.styles";
import { colors } from "../../../../styles/styleGuide";

export const NumContainer = styled.TouchableOpacity`
  width: 110px;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const Num = styled(BoldTitle)`
  color: ${colors.secondary}
  font-size: 24px;
`;
