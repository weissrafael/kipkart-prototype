import React, { useEffect, useState } from "react";
import {
  ItemImage,
  ItemName,
  SectionTitle,
  Item,
  SuggestedItemsSection,
  Items,
} from "./SuggestedItems.styles";
import Carousel from "../../../Common/Carousel/Carousel";

function SuggestedItems({ cartItems }) {
  const [suggestedItems, setSuggestedItems] = useState([]);

  useEffect(() => {
    const resp = [
      {
        id: "7898409951886",
        name: "Ovomaltine Pronto",
        price: 4.49,
        category: "dairy",
        imageUrl: require("../../../../assets/products-image/ovomaltine.png"),
      },
      {
        id: "7791293022581",
        name: "Rexona Men",
        price: 3.7,
        category: "hygiene",
        imageUrl: require("../../../../assets/products-image/rexona.jpg"),
      },
      {
        id: "7891528029498",
        name: "Sorriso Tripla",
        price: 5.99,
        category: "hygiene",
        imageUrl: require("../../../../assets/products-image/sorriso.jpg"),
      },
      {
        id: "7891242211179",
        name: "Uau Multiuso",
        price: 1.8,
        category: "snacks",
        imageUrl: require("../../../../assets/products-image/uau.png"),
      },
      {
        id: "7897395020194",
        name: "Itaipava Malzbier",
        price: 4.79,
        category: "alcohol",
        imageUrl: require("../../../../assets/products-image/itaipava.jpg"),
      },
      {
        id: "7613033174728",
        name: "Nescafé Dolce Gusto",
        price: 16.84,
        category: "coffee",
        imageUrl: require("../../../../assets/products-image/dolcegusto.png"),
      },

      {
        id: "7894650003879",
        name: "Raid",
        price: 12.11,
        category: "coffee",
        imageUrl: require("../../../../assets/products-image/raid.png"),
      },
    ];

    setSuggestedItems(resp);
  }, []);
  return (
    <SuggestedItemsSection>
      <SectionTitle>Itens sugeridos:</SectionTitle>
      <Items>
        <Carousel>
          {suggestedItems.map(({ imageUrl, name, id }) => {
            if (cartItems[id]) {
              return false;
            }
            return (
              <Item key={id}>
                <ItemImage resizeMode="contain" source={imageUrl} />
                <ItemName>{name}</ItemName>
              </Item>
            );
          })}
        </Carousel>
      </Items>
    </SuggestedItemsSection>
  );
}

export default SuggestedItems;
