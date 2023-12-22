import React, { useMemo, useCallback } from "react";
import { FlatList } from "react-native";
import {
  ListsContainer,
  EmptyListText,
  EmptyTextContainer,
  ListContainer,
  ListImage,
  Page,
  CartItems,
  Line,
} from "./ShoppingList.styles";
import ListRow from "./ListRow/ListRow";
import {useTranslation} from "react-i18next";

const emptyList = require("../../../assets/emptylist.png");

const ShoppingList = ({
  list,
  addItem,
  removeItem,
  removeItemFromList,
  productIsLoading,
  keyboardShown,
}) => {
  const { t } = useTranslation();
  const listArray = [...Object.entries(list).reverse()];

  const renderItem = useCallback(
    ({ item, index }) => {
      return (
        <ListRow
          item={item[1]}
          addItem={addItem}
          removeItem={removeItem}
          removeItemFromList={removeItemFromList}
          index={index}
        />
      );
    },
    [addItem, removeItem, removeItemFromList]
  );

  const keyExtractor = useCallback((item) => item[0], []);

  const memoizedValue = useMemo(() => renderItem, [renderItem]);

  return (
    <Page listIsEmpty={listArray.length <= 0}>
      <ListsContainer>
        {listArray.length <= 0 ? (
          <EmptyTextContainer>
            <ListImage source={emptyList} resizeMode="contain" />
            <EmptyListText>
              {t('toAddItemsToYourCartScanTheBarcode')}
            </EmptyListText>
          </EmptyTextContainer>
        ) : (
          <CartItems show={listArray.length > 0} keyboardShown={keyboardShown}>
            {productIsLoading && (
              <ListContainer>
                <ListRow />
                <Line show={listArray.length > 0} />
              </ListContainer>
            )}
            <FlatList
              data={listArray}
              style={{ width: "100%", height: "100%", paddingTop: 8 }}
              renderItem={memoizedValue}
              keyExtractor={keyExtractor}
              alwaysBounceVertical={false}
              bounces={false}
              scrollEventThrottle={1000}
              keyboardShouldPersistTaps="handled"
              maxToRenderPerBatch={16}
              windowSize={17}
            />
          </CartItems>
        )}
      </ListsContainer>
    </Page>
  );
};

export default ShoppingList;
