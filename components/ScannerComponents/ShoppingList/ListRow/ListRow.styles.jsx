import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { ContentContainer } from "../../../../screens/Scanner/ScannerScreen.styles";
import { colors } from "../../../../styles/styleGuide";
import Colors from "../../../../constants/Colors";

const smallDevice = Dimensions.get("window").width < 380;

export const ImageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  padding: 16px;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

export const ProductImage = styled.Image`
  width: 90%;
  height: 90%;
`;

export const ItemQuantityBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

export const MinusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 60px;
  border-radius: 20px;
`;

export const ThrashButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 60px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const PlusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 60px;
  border-radius: 20px;
`;

export const ItemQuantity = styled.Text`
  font-size: ${smallDevice ? 18 : 26}px;
  color: ${colors.forestBlues};
`;

export const ItemNameBox = styled.TouchableOpacity`
  padding-left: 16px;
  padding-right: 8px;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
`;

export const ItemName = styled.Text`
  text-align: left;
  font-size: 16px;
  color: ${colors.forestBlues};
`;

export const ItemTotalValue = styled.Text`
  text-align: right;
  color: ${Colors.fifth};
  font-size: 16px;
`;

export const IconButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
