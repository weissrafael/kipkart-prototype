import React, { useEffect, useState } from "react";
import { StatusBar, View } from "react-native";
import {
  DateTimeHeader,
  DateTimeItem,
  DateTimeText,
  Header,
  ListContainer,
  LoaderContainer,
  LoaderImage,
  MyListHeader,
  MyListItems,
  Page,
  Title,
  Total,
} from "./PurchasedListDetails.styles";

import GoBackButton from "../../components/Common/GoBackButton/GoBackButton";
import { colors } from "../../styles/styleGuide";
import SearchBar from "../../components/Common/SearchBar/SearchBar";
import ItemRow from "../../components/MyLists/ItemRow/ItemRow";
import Icon from "../../components/Common/Icon/Icon";
import { fireSearch } from "../../utils/analytics";

const gif = require("../../assets/gifs/bananaLoader.gif");

function PurchasedListDetails({ navigation, route }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [selectedItems, setSelectedItems] = useState({});
  const [filteredSelectedItems, setFilteredSelectedItems] = useState([]);
  const [listTotal, setListTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (route.params) {
      setTimeout(() => {
        const { list } = route.params;

        const { name, timeSpent, items, createdAt } = list;
        setSelectedItems(items);
        setFilteredSelectedItems(Object.values(items));
        setTitle(name);
        setDate(createdAt);
        setTime(timeSpent);
        setLoading(false);
      }, 2000);
    }
  }, []);

  useEffect(() => {
    setListTotal(calculateTotal(filteredSelectedItems));
  }, [filteredSelectedItems]);

  function filterOptions(input) {
    fireSearch(input);
    setSearchValue(input);
    if (input.length <= 0) {
      setFilteredSelectedItems(Object.values(selectedItems));
      return;
    }
    const newList = Object.values(selectedItems).filter((list) =>
      list.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredSelectedItems(newList);
  }

  function getSum(total, item) {
    return total + item.price * item.quantity;
  }

  function calculateTotal(list) {
    return list.reduce(getSum, 0).toFixed(2);
  }

  return (
    <Page>
      <StatusBar hidden />
      <Header>
        <GoBackButton color={colors.mistyBlue} navigation={navigation} />
        <SearchBar
          bgColor={colors.mistyBlue}
          textColor={colors.darkBlue}
          placeHolderTextColor={colors.darkBlue}
          placeholder="Procurar por item"
          value={searchValue}
          onChange={filterOptions}
        />
        <View
          style={{
            width: 50,
          }}
        />
      </Header>
      {loading ? (
        <LoaderContainer>
          <LoaderImage source={gif} />
        </LoaderContainer>
      ) : (
        <ListContainer>
          <DateTimeHeader>
            <DateTimeItem>
              <Icon size={14} color={colors.darkBlue} name="clock" />
              <DateTimeText>{time}</DateTimeText>
            </DateTimeItem>
            <DateTimeItem>
              <Icon size={14} color={colors.darkBlue} name="calendar" />
              <DateTimeText>{date}</DateTimeText>
            </DateTimeItem>
          </DateTimeHeader>
          <MyListHeader>
            <Title onChangeText={setTitle} numberOfLines={1}>
              {title}
            </Title>
            <Total>{listTotal}</Total>
          </MyListHeader>
          <MyListItems>
            {filteredSelectedItems.map((item) => (
              <ItemRow
                readOnly
                key={item.name}
                item={item}
                barcode={item.barcode}
              />
            ))}
          </MyListItems>
        </ListContainer>
      )}
    </Page>
  );
}

export default PurchasedListDetails;
