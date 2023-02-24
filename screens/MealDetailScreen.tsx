import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text } from "react-native";
import { RootStackParamList } from "../utils/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "MealDetail">;

const MealDetailScreen = ({ route, navigation }: Props) => {
  const mealId = route.params.mealId;

  return <Text>MealDetailScreen ({mealId})</Text>;
};

export default MealDetailScreen;
