import { Text, StyleSheet } from "react-native";
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#355C7D",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#355C7D",
    padding: 12,
    marginHorizontal: 10,
    fontFamily: "open-sans-bold",
  },
});
