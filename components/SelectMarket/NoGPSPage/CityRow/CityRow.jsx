import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Row, CityIcon, CityName } from "./CityRow.styles";

const cityIcon = require("../../../../assets/cityIcon.png");

const CityRow = ({ cityName, onPress }) => (
  <Row onPress={onPress}>
    <CityIcon source={cityIcon} resizeMode="contain" />
    {/* <FontAwesome5 style={{ marginRight: 20 }} name="city" size={24} color="black" /> */}
    <CityName>{cityName}</CityName>
  </Row>
);

export default CityRow;
