import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

const Subtitle = ({ children }: { children: ReactNode }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subTitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "#e2b497",
  },
});
