export type RootStackParamList = {
  Drawer: undefined;
  MealsOverview: { categoryId: string };
  MealDetail: { mealId: string };
};

export type RootDrawerParamList = {
  MealsCategories: undefined;
  Favourites: undefined;
};
