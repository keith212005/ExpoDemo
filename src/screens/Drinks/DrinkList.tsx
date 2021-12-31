import React, { useImperativeHandle, useState } from "react";
import { FlatList } from "react-native";

// LOCAL IMPORT
import { DrinkCard } from "@components";
import axios from "axios";
import { isEmpty } from "lodash";

export const DrinkList = React.forwardRef((_props: any, ref: any) => {
  const [list, setList] = useState<any>();
  const [refreshing, setRefreshing] = useState(false);
  console.log("Flatlist Drink render.....");

  /**
  |--------------------------------------------------
  | Global Area end
  |--------------------------------------------------
  */

  useImperativeHandle(ref, () => ({
    // We will call this function from main screen
    search(str: string): any {
      if (!isEmpty(str)) {
        setRefreshing(true);
        axios
          .get(
            "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + str
          )
          .then((response) => setList(response.data.drinks))
          .catch((error) => console.log(error))
          .finally(() => setRefreshing(false));
      } else {
        setList(undefined);
      }
    },
  }));

  const renderFlatListItem = ({ item }: any) => <DrinkCard item={item} />;
  const onRefresh = () => {};

  return (
    <FlatList
      bounces={false}
      data={list}
      renderItem={renderFlatListItem}
      keyExtractor={(item) => item?.idDrink}
      onRefresh={onRefresh}
      refreshing={refreshing}
    />
  );
});
