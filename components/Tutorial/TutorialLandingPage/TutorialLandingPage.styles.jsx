import styled from "styled-components/native";
import Colors from "../../../constants/Colors";
import FontSizes from "../../../constants/FontSizes";

export const Page = styled.View`
  flex: 1;
  align-items: center;
`;

export const Sky = styled.View`
  flex: 1.2;
  background-color: ${Colors.primary};
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
`;

export const LogoImage = styled.Image`
  width: 100%;
  height: 60px;
`;

export const WelcomeText = styled.Text`
  color: ${Colors.secondary};
  font-size: ${FontSizes.largeTitle}px;
  font-family: "montserrat-regular";
`;

export const MarketImage = styled.Image`
  width: 80%;
  height: 180px;
`;

export const Ground = styled.View`
  flex: 1;
  padding-bottom: 20px;
  width: 100%;
  background-color: ${Colors.secondary};
  align-items: center;
  justify-content: space-evenly;
`;

export const GroundTitle = styled.Text`
  color: ${Colors.primary};
  font-size: ${FontSizes.largeTitle}px;
  font-family: "montserrat-regular";
`;

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

export const GroundText = styled.Text`
  color: ${Colors.primary};
  font-size: ${FontSizes.text}px;
  font-family: "montserrat-regular";
  width: 70%;
  text-align: center;
`;
