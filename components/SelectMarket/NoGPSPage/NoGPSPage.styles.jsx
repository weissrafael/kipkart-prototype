import styled from "styled-components/native/dist/styled-components.native.esm";
import Colors from "../../../constants/Colors";
import { RegularText } from "../../../styles/common.styles";

export const FooterImage = styled.Image`
  width: 102%;
  position: absolute;
  bottom: 0;
  height: 60px;
`;

export const NoGPSContainer = styled.View`
  flex: 1;
  padding: 0 16px;
  align-items: center;
  background-color: ${Colors.secondary};
  justify-content: center;
`;

export const IndicatorContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const NoGPSImage = styled.Image`
  width: 80%;
  height: 40%;
  margin-bottom: 16px;
`;

export const NoGPSTitle = styled.Text`
  font-family: "montserrat-regular";
  font-size: 18px;
  color: ${Colors.primary};
  text-align: center;
  margin-bottom: 56px;
  width: 80%;
`;

export const Divider = styled.View`
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export const DividerText = styled(RegularText)`
  color: white;
`;
