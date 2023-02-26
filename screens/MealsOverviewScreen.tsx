import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { RootStackParamList } from "../utils/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "MealsOverview">;

const MealsOverviewScreen = ({ route, navigation }: Props) => {
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    )!.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId]);

  return <MealsList displayMeals={displayMeals} />;
};

export default MealsOverviewScreen;
