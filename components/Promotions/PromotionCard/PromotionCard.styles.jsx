import styled from "styled-components/native";

export const PromotionImage = styled.Image`
  min-height: 60px;
  width: 100%;
  flex: 1;
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export const TitleContainer = styled.View`
  flex: 1;
  min-height: 40px;
  max-height: 40px;
  background-color: ${props => props.backgroundColor};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  justify-content: center;
  padding-left: 16px;
`;
