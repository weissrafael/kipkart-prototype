import styled from "styled-components/native";
import Colors from "../../../constants/Colors";

export const NavCirclesContainer = styled.View`
  width: 100%;
  background-color: ${Colors.secondary};
  align-items: center;
  justify-content: center;
`;

export const NavCircles = styled.View`
  height: 50px;
  flex-direction: row;
  width: 40%;
  background-color: ${Colors.secondary};
  align-items: center;
  justify-content: space-around;
`;

export const Circle = styled.View`
  width: 10px;
  height: 10px;
  background-color: white;
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  border-radius: 20px;
`;
