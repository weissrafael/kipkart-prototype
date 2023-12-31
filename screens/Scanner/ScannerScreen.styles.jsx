import styled from "styled-components/native";
import { colors } from "../../styles/styleGuide";
import FontSizes from "../../constants/FontSizes";

export const Screen = styled.View`
  flex: 1;
  background-color: ${({listIsEmpty}) => listIsEmpty ? colors.white : colors.graySamaritan};
`;

export const Container = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
`;

export const ImageContainer = styled.View`
  width: 100%;
  align-items: center;
  flex: 2;
`;

export const Page = styled.ScrollView`
  width: 100%;
`;

export const ContentContainer = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FinishContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const FinishButton = styled.TouchableOpacity`
  padding: 0 16px;
  height: 50px;
  background-color: ${colors.forestBlues};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
`;

export const CancelButton = styled(FinishButton)`
  background-color: ${colors.goodSamaritan};
`;

export const ConfirmButton = styled(FinishButton)`
  background-color: ${colors.dupain};
`;

export const ButtonText = styled.Text`
  font-family: "montserrat-bold";
  font-size: 14px;
  color: ${colors.white};
`;

export const ShoppingListTotal = styled.Text`
  font-family: "montserrat-regular";
  font-size: ${FontSizes.largeTitle}px;
  color: ${colors.white};
`;
