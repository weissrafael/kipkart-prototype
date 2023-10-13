import styled from "styled-components";
import FontSizes from "../../../constants/FontSizes";
import { ButtonContainer } from "../MainButton/MainButton.styles";

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const ContentContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 75%;
  background-color: white;
  border-radius: 20px;
  height: 300px;
`;

export const Title = styled.Text`
  font-size: ${FontSizes.largeTitle}px;
`;

export const SubTitle = styled.Text`
  font-size: ${FontSizes.title}px;
  text-align: center;
`;
