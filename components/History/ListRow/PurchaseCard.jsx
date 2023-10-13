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
import { fireEvent } from "../../../utils/analytics";

function PurchaseCard({ navigation, list }) {
  const { name, marketLogoImage, amountOfItems, total, createdAt } = list;

  function handleListRowPress() {
    navigation.navigate("PurchasedListDetails", { list });
    fireEvent(
      "user_pressed_on_purchased_list_to_open_details",
      "History",
      "success",
      "User pressed on a purchased list, to open its details",
      list
    );
  }

  return (
    <ListRowContainer onPress={handleListRowPress}>
      <Wrapper>
        <LeftWrapper>
          <Image
            source={{ uri: marketLogoImage }}
            style={{
              resizeMode: "cover",
              width: 150,
              height: "100%",
            }}
          />
          <LinearGradient
            colors={[colors.darkMistyBlue, "transparent"]}
            start={{
              x: 0.5,
              y: 0.8,
            }}
            end={{
              x: 0,
              y: 0,
            }}
            style={{
              width: 200,
              height: "100%",
              position: "absolute",
              left: -10,
            }}
          />
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
