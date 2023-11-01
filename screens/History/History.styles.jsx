import styled from "styled-components/native";
import { colors } from "../../styles/styleGuide";
import { ErrorContainer } from "../../components/Common/Modals/GenericErrorModal/GenericErrorModal.styles";

export const Page = styled.View`
  flex: 1;
  background-color: ${colors.darkMistyBlue};
`;

export const Header = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px 10px 16px;
  background-color: ${colors.mistyBlue};
`;

export const CameraSpacing = styled.View`
  width: 100%;
  height: 50px;
  background-color: ${({bgColor}) => bgColor ? bgColor : colors.white};
`;

export const EmptySpot = styled.View`
  width: 50px;
`;

export const TransparentFooter = styled.View`
  background-color: ${colors.blueGrottoTransparent};
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  bottom: 0;
  flex-direction: row;
`;

export const ListContainer = styled.ScrollView`
  width: 100%;
  flex: 1;
`;

export const StyledErrorContainer = styled(ErrorContainer)`
  justify-content: center;
  background-color: ${colors.mistyBlue};
  padding: 0 16px;
`;

export const AddNewList = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const FooterButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
