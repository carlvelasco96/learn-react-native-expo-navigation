import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavouritesContext } from "../store/context/favourites-context";

const FavouritesScreen = () => {
  const favouriteMealsCtx = useContext(FavouritesContext);

  const favouriteMeals = MEALS.filter((meal) => {
    return favouriteMealsCtx.ids.includes(meal.id);
  });

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet.</Text>
      </View>
    );
  }

  return <MealsList displayMeals={favouriteMeals} />;
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
