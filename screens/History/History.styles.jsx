import styled from "styled-components/native";
import { colors } from "../../styles/styleGuide";
import { ErrorContainer } from "../../components/Common/Modals/GenericErrorModal/GenericErrorModal.styles";

export const Page = styled.View`
  flex: 1;
  background-color: ${colors.forestBlues};
`;

export const SearchContainer = styled.View`
  width: 100%;
  padding: 16px;
  background-color: ${colors.forestBlues};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 4px;
  border-bottom-color: ${colors.spray};
`;

export const PageTitle = styled.Text`
  font-family: "montserrat-bold";
  font-size: 22px;
  color: ${colors.white};
  text-align: left;
`;

export const CameraSpacing = styled.View`
  width: 100%;
  height: 38px;
  background-color: ${colors.forestBlues};
`;

export const ListContainer = styled.ScrollView`
  width: 100%;
  flex: 1;
  border: 4px solid ${colors.spray};
  border-top-width: 0;
  border-right-width: 0;
  border-left-width: 0;
`;

export const StyledErrorContainer = styled(ErrorContainer)`
  justify-content: center;
  background-color: ${colors.white};
  padding: 0 16px;
`;
