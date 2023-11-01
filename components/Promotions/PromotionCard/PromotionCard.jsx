import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Animated, { EasingNode as Easing } from 'react-native-reanimated';
import {HiddenContainer, PromotionImage, Title, TitleContainer} from "./PromotionCard.styles";
import ProductRow from "../ProductRow/ProductRow";

const { Value, timing } = Animated;

const initialHeight = 120;
const initialDetails = 0;
const expandedHeight = 240;
const expandedDetails = 360;

const PromotionCard = ({ title, onClick, image, bgColor, promotions, expanded }) => {
  const [height, setHeight] = useState(new Value(initialHeight));
  const [detailsHeight, setDetailsHeight] = useState(new Value(initialDetails));
  const [opacity, setOpacity] = useState(new Value(0));

  useEffect(() => {
    const toHeight = expanded ? expandedHeight : initialHeight;
    const toDetailsHeight = expanded ? expandedDetails : initialDetails;
    const toOpacity = expanded ? 1 : 0;

    timing(height, {
      toValue: toHeight,
      duration: 500,
      easing: Easing.inOut(Easing.ease),
    }).start();

    timing(detailsHeight, {
      toValue: toDetailsHeight,
      duration: 500,
      easing: Easing.inOut(Easing.ease),
    }).start();

    if (expanded) {
      setTimeout(() => {
        timing(opacity, {
          toValue: toOpacity,
          duration: 500,
          easing: Easing.inOut(Easing.ease),
        }).start();
      }, 100);
    }
    else {
      timing(opacity, {
        toValue: toOpacity,
        duration: 500,
        easing: Easing.inOut(Easing.ease),
      }).start();
    }
  }, [expanded]);

  return (
    <>
      <TouchableOpacity onPress={onClick}>
        <Container style={{ height }}>
          <PromotionImage source={image} />
          <TitleContainer backgroundColor={bgColor}>
            <Title>{title}</Title>
          </TitleContainer>
        </Container>
      </TouchableOpacity>
      <HiddenContainer style={{ height: detailsHeight }}>
        <Details style={{ opacity }}>
          {promotions.map((product) => (<ProductRow product={product} bgColor={bgColor} />))}
        </Details>
      </HiddenContainer>
    </>
  );
};

const Container = styled(Animated.View)`
  margin: 8px;
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 1;
  shadow-radius: 5px;
  elevation: 5;
  background-color: white;
`;



const Details = styled(Animated.View)`
  display: flex;
  flex: 1;
  padding: 8px 8px 32px 8px;
`;

export default PromotionCard;
