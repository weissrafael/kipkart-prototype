import styled from "styled-components/native";
import { colors } from "../../styles/styleGuide";
import { BoldTitle, LargeTitle } from "../../styles/common.styles";

export const Screen = styled.SafeAreaView`
  flex: 1;
  position: relative;
  background-color: ${colors.white};
`;

export const Page = styled.SectionList``;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100px;
  border-bottom-color: white;
  border-bottom-width: 4px;
`;

export const Title = styled(BoldTitle)`
  color: ${colors.forestBlues};
  font-size: 24px;
  margin: 0;
`;

export const CarrouselContainer = styled.View`
  height: 250px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${colors.graySamaritan};
`;
