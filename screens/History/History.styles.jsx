import styled from "styled-components/native";
import { colors } from "../../styles/styleGuide";
import { ErrorContainer } from "../../components/Common/Modals/GenericErrorModal/GenericErrorModal.styles";

export const Page = styled.View`
  flex: 1;
  background-color: ${colors.goodSamaritan};
`;

export const Header = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px 10px 16px;
  background-color: ${colors.white};
`;

export const CameraSpacing = styled.View`
  width: 100%;
  height: 38px;
  background-color: ${({bgColor}) => bgColor ? bgColor : colors.white};
`;

export const EmptySpot = styled.View`
  width: 50px;
`;

export const ListContainer = styled.ScrollView`
  width: 100%;
  flex: 1;
`;

export const StyledErrorContainer = styled(ErrorContainer)`
  justify-content: center;
  background-color: ${colors.white};
  padding: 0 16px;
`;
