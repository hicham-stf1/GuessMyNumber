import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: "#355C7D",
    padding: 12,
    margin: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
