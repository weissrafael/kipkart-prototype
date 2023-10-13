import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { ContentContainer } from "../../../../screens/Scanner/ScannerScreen.styles";
import { colors } from "../../../../styles/styleGuide";
import Colors from "../../../../constants/Colors";

const smallDevice = Dimensions.get("window").width < 380;

export const ListRowContainer = styled(ContentContainer)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 100px;
  padding: 0 16px;
`;

export const ImageContainer = styled.View`
  flex: 1;
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
  color: ${Colors.secondary};
`;

export const MinusText = styled.Text`
  color: ${colors.red};
  font-size: 48px;
  font-weight: bold;
`;
export const PlusText = styled.Text`
  color: ${colors.blue};
  font-weight: bold;
  font-size: 32px;
`;

export const ItemNameBox = styled.TouchableOpacity`
  padding-left: 12px;
  padding-right: 12px;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
`;

export const ItemName = styled.Text`
  text-align: center;
  font-size: 16px;
  color: ${colors.charcoalGray};
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
