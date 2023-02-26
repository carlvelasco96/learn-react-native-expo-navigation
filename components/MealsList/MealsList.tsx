import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import React from "react";
import Meal from "../../models/meal";
import MealItem from "../MealItem";

const MealsList = ({ displayMeals }: { displayMeals: Meal[] }) => {
  function renderMealItem(itemData: ListRenderItemInfo<Meal>) {
    const mealItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
