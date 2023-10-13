import styled from "styled-components/native";
import { colors } from "../../../../styles/styleGuide";
import { BoldTitle } from "../../../../styles/common.styles";

export const TokenCharContainer = styled.View`
  width: 50px;
  height: 70px;
  border-radius: 11px;
  border: 1px solid ${colors.charcoalGray};
  margin: 0;
  justify-content: center;
  align-items: center;
`;

export const TokenChar = styled(BoldTitle)`
  font-size: 20px;
  color: ${colors.secondary};
  margin: 0;
`;
