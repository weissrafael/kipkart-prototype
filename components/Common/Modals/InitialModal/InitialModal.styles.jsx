import styled from "styled-components/native";
import {colors} from "../../../../styles/styleGuide";

export const ModalContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.View`
  background-color: white;
  padding: 16px;
  width: 100%;
  flex: 1;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  font-family: "montserrat-regular";
  color: ${colors.forestBlues};
`;

export const DescriptionText = styled.Text`
  text-align: center;
  margin-bottom: 16px;
  color: ${colors.forestBlues};
  font-family: "montserrat-regular";
`;

export const BarcodeList = styled.View`
  align-self: stretch;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const BarcodeItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 6px;
  background-color: ${colors.goodSamaritan};
`;

export const ItemName = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  width: 110px;
  flex-wrap: wrap;
  font-family: "montserrat-regular";
`;

export const ItemBarcode = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  font-family: "montserrat-regular";
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: ${colors.white};
  font-weight: bold;
  font-family: "montserrat-regular";
`;

export const GotItButton = styled.TouchableOpacity`
  background-color: ${colors.dupain};
  padding: 16px 24px;
  border-radius: 8px;
`;