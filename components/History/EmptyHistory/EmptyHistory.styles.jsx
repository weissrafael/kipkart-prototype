import styled from "styled-components/native";
import { Title } from "../../../styles/common.styles";

export const EmptyContainer = styled.View`
  padding: 16px;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const EmptyImage = styled.Image`
  width: 100%;
  height: 60%;
  margin-top: 16px;
`;

export const EmptyTitle = styled(Title)`
  margin-top: 32px;
  font-size: 18px;
`;
