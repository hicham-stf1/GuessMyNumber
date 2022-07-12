import { useState } from "react";
import { TextInput, Text, View, StyleSheet, Button, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

function StartGameScreen({ onPickNumber }) {
  const [numberInput, setNumberInput] = useState("");
  function confirmInputHandler() {
    const typedNumber = parseInt(numberInput);
    if (isNaN(typedNumber) || typedNumber <= 0 || typedNumber > 99) {
      Alert.alert("Invalid Number", "1 <= Number <= 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(typedNumber);
  }
  function resetInputHandler() {
    setNumberInput("");
  }
  function numberInputHandler(enteredNumber) {
    setNumberInput(enteredNumber);
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Opponent's Guess</Title>
      {/*       
      <View style={styles.inputContainer}> */}
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          maxLength={2}
          style={styles.input}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={numberInput}
        />
        <View style={styles.buttons}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}
export default StartGameScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 120,
    alignItems: "center",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#FF7582",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#C56D86",
    shadowOffset: { width: 6, height: 6 },
    shadowRadius: 3,
    shadowOpacity: 0.5,
  },
  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "white",
    borderBottomWidth: 2,
    color: "white",
    borderColor: "#C56D86",
    marginVertical: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
    width: "100%",
  },
  buttonContainer: {
    flex: 1,
    width: "90%",
  },
});
