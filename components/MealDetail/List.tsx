import React from "react";
import { StyleSheet, Text, View } from "react-native";

const List = ({ items }: { items: string[] }) => {
  return (
    <>
      {items.map((item: string) => (
        <View style={styles.listItem} key={item}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </>
  );
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
