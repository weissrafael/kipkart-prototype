import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Animated, { Easing } from 'react-native-reanimated';

const { Value, timing } = Animated;

const PromotionCard = ({ title, details }) => {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState(new Value(50));
  const [opacity, setOpacity] = useState(new Value(0));

  useEffect(() => {
    const toHeight = expanded ? 100 : 50;
    const toOpacity = expanded ? 1 : 0;

    timing(height, {
      toValue: toHeight,
      duration: 500,
      easing: Easing.inOut(Easing.ease),
    }).start();

    timing(opacity, {
      toValue: toOpacity,
      duration: 500,
      easing: Easing.inOut(Easing.ease),
    }).start();
  }, [expanded]);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity onPress={toggleExpand}>
      <Container style={{ height }}>
        <Title>{title}</Title>
        <Details style={{ opacity }}>{details}</Details>
      </Container>
    </TouchableOpacity>
  );
};

const Container = styled(Animated.View)`
  background-color: white;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.23;
  shadow-radius: 2.62;
  elevation: 4;
`;

const Title = styled(Text)`
  font-size: 18px;
  font-weight: bold;
`;

const Details = styled(Animated.Text)`
  font-size: 14px;
  margin-top: 5px;
`;

export default PromotionCard;
