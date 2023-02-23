import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";
import { RootStackParamList } from "../utils/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "MealsCategories">;

const CategoriesScreen = ({ navigation }: Props) => {
  function renderCategoryItem(itemData: ListRenderItemInfo<Category>) {
    function pressHandler() {
      navigation.navigate("MealsOverview");
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
