import styled from "styled-components";
import { colors } from "../../../../styles/styleGuide";

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const ItemDetailsContainer = styled.View`
  flex: 6;
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.white};
`;

export const Header = styled.View`
  width: 100%;
  padding: 32px 16px 0 16px;
  flex-direction: row;
  align-items: center;
`;

export const ItemImage = styled.Image`
  width: 150px;
  height: 200px;
`;

export const HeaderText = styled.View`
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
`;

export const ItemName = styled.Text`
  font-family: "montserrat-bold";
  color: ${colors.black};
  margin-bottom: 16px;
  font-size: 22px;
`;

export const ItemPrice = styled.Text`
  font-family: "montserrat-bold";
  color: ${colors.black};
  font-size: 18px;
`;

export const TransparentTop = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  z-index: 2;
`;
