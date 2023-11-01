import styled from "styled-components/native";
import {colors} from "../../../styles/styleGuide";
import Animated from 'react-native-reanimated';

export const PromotionImage = styled.Image`
  min-height: 80px;
  max-height: 200px;
  width: 100%;
  flex: 1;
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-family: "montserrat-bold";
`;

export const TitleContainer = styled.View`
  width: 100%;
  min-height: 40px;
  max-height: 40px;
  background-color: ${props => props.backgroundColor};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  justify-content: center;
  padding-left: 16px;
`;

export const HiddenContainer = styled(Animated.View)`
  width: 100%;
`;
