import styled from "styled-components/native/dist/styled-components.native.esm";
import Colors from "../../../constants/Colors";

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.secondary};
`;

export const Title = styled.Text`
  font-family: "montserrat-regular";
  font-size: 18px;
  color: ${Colors.primary};
  width: 80%;
  text-align: center;
`;
