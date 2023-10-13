import React, { useMemo, useCallback } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import {
  ListsContainer,
  EmptyListText,
  EmptyTextContainer,
  ListContainer,
  ListImage,
  MissingItemsTitle,
  MissingItems,
  Page,
  ListTitle,
  CartItems,
  TitleContainer,
  Line,
} from "./ShoppingList.styles";
import ListRow from "./ListRow/ListRow";
import { colors } from "../../../styles/styleGuide";
import { LoadingContainer } from "./ListRow/ListRow.styles";

const emptyList = require("../../../assets/emptylist.png");

const ShoppingList = ({
  list,
  addItem,
  removeItem,
  removeItemFromList,
  missingItems,
  keyboardShown,
  productIsLoading,
  scrollHandler,
  scrollRef,
}) => {
  const listArray = Object.entries(list).reverse();
  const missingItemsArray = Object.entries(missingItems).reverse();

  const renderItem = useCallback(
    ({ item, index }) => {
      return (
        <>
          <Line show={index !== 0} />
          <ListRow
            item={item[1]}
            addItem={addItem}
            removeItem={removeItem}
            removeItemFromList={removeItemFromList}
          />
        </>
      );
    },
    [addItem, removeItem, removeItemFromList]
  );

  const keyExtractor = useCallback((item) => item[0], []);

  const memoizedValue = useMemo(() => renderItem, [renderItem]);

  return (
    <Page>
      <ListsContainer empty={listArray.length <= 0}>
        {listArray.length <= 0 && missingItemsArray.length <= 0 && (
          <EmptyTextContainer>
            {productIsLoading ? (
              <LoadingContainer>
                <ActivityIndicator size="large" color={colors.primary} />
              </LoadingContainer>
            ) : (
              <>
                <ListImage source={emptyList} resizeMode="contain" />
                <EmptyListText>
                  Para começar a adicionar itens no seu carrinho, escaneie o
                  código de barras do produto,
                </EmptyListText>
              </>
            )}
          </EmptyTextContainer>
        )}

        <CartItems show={listArray.length > 0} keyboardShown={keyboardShown}>
          <TitleContainer>
            <ListTitle>Meu Carrinho</ListTitle>
          </TitleContainer>
          {productIsLoading && (
            <ListContainer>
              <ListRow />
              <Line show={listArray.length > 0} />
            </ListContainer>
          )}
          <FlatList
            data={listArray}
            style={{ width: "100%", height: "100%" }}
            renderItem={memoizedValue}
            keyExtractor={keyExtractor}
            onScroll={scrollHandler}
            ref={scrollRef}
            alwaysBounceVertical={false}
            bounces={false}
            scrollEventThrottle={1000}
            keyboardShouldPersistTaps="handled"
            maxToRenderPerBatch={16}
            windowSize={17}
          />
        </CartItems>

        <MissingItems show={missingItemsArray.length > 0}>
          {missingItemsArray.length > 0 && (
            <TitleContainer>
              <MissingItemsTitle>Minha Lista</MissingItemsTitle>
            </TitleContainer>
          )}

          {missingItemsArray.length > 0 &&
            missingItemsArray.map(([barcode, item], key) => (
              <ListContainer key={item.name}>
                <Line show={key !== 0} />
                <ListRow
                  item={item}
                  addItem={addItem}
                  removeItem={removeItem}
                  barcode={barcode}
                  isMissingListRow
                />
              </ListContainer>
            ))}
        </MissingItems>

        {/* {!scanner && ( */}
        {/* <SuggestedItems cartItems={list} /> */}
        {/* )} */}
      </ListsContainer>
    </Page>
  );
};

export default ShoppingList;
