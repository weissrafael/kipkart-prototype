import React from "react";
import {
  Circle,
  NavCircles,
  NavCirclesContainer,
} from "./NavigationCircles.styles";

const NavigationCircles = ({ activePage }) => {
  return (
    <NavCirclesContainer>
      <NavCircles>
        <Circle active={activePage === 1} />
        <Circle active={activePage === 2} />
        <Circle active={activePage === 3} />
        <Circle active={activePage === 4} />
      </NavCircles>
    </NavCirclesContainer>
  );
};

export default NavigationCircles;
