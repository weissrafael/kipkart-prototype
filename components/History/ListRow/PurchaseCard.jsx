import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import {
  IconBox,
  LeftWrapper,
  ListRowContainer,
  MarketInfo,
  MarketName,
  NumberOfItems,
  NumberOfItemsRow,
  NumbersContainer,
  PurchaseDate,
  PurchaseValue,
  PurchaseValueRow,
  Wrapper,
} from "./PurchaseCard.styles";
import { colors } from "../../../styles/styleGuide";
import Icon from "../../Common/Icon/Icon";

function PurchaseCard({ navigation, list }) {
  const { name, amountOfItems, total, createdAt } = list;

  function handleListRowPress() {
    navigation.navigate("PurchasedListDetails", { list });
  }

  return (
    <ListRowContainer onPress={handleListRowPress}>
      <Wrapper>
        <LeftWrapper>
          <MarketInfo>
            <MarketName numberOfLines={1}>{name}</MarketName>
            <PurchaseDate>{createdAt}</PurchaseDate>
          </MarketInfo>
        </LeftWrapper>
        <NumbersContainer>
          <NumberOfItemsRow>
            <IconBox>
              <Icon name="food-apple" color={colors.blueGrotto} size={20} />
            </IconBox>
            <NumberOfItems>{amountOfItems}</NumberOfItems>
          </NumberOfItemsRow>
          <PurchaseValueRow>
            <IconBox>
              <Icon
                name="money-bill-wave"
                fontAwesome
                color={colors.blueGrotto}
                size={20}
              />
            </IconBox>
            <PurchaseValue>
              {total
                .toFixed(2) // always two decimal digits
                .replace(".", ",") // replace decimal point character with ,
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
            </PurchaseValue>
          </PurchaseValueRow>
        </NumbersContainer>
      </Wrapper>
    </ListRowContainer>
  );
}

export default PurchaseCard;
