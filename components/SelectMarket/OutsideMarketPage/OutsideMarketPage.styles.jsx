import styled from "styled-components/native/dist/styled-components.native.esm";
import Colors from "../../../constants/Colors";

export const MarketListContainer = styled.View`
  flex: 1;
  background-color: ${Colors.secondary};
  padding: 20px 0;
`;

export const ErrorWrapper = styled.View`
  flex: 1;
  padding: 20px 20px;
  align-items: center;
`;

export const ActivityIndicatorContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ListTitle = styled.Text`
  font-family: "montserrat-bold";
  font-size: 18px;
  color: ${Colors.primary};
  margin-bottom: 32px;
  text-align: center;
`;

export const ErrorTitle = styled(ListTitle)`
  margin-bottom: 32px;
`;

export const ErrorSubtitle = styled(ErrorTitle)`
  font-size: 14px;
  max-width: 260px;
  line-height: 22px;
  font-weight: bold;
  margin-bottom: 56px;
`;
