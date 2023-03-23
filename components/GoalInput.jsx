import { Modal } from "react-native";
import { Button, StyleSheet, TextInput, View, Image } from "react-native";
import goal from "../assets/images/goal.png"

const GoalInput = ({ goalInputHandler, addGoalHandler, value, showModal, onCancel }) => {
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={goal} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={value}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0"/>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#f31282"/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding:16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b"
  },
  image:{
    width:100,
    height:100,
    margin:20
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color:"#120438",
    borderRadius: 10,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop:16,
    flexDirection: "row",
  },
  button:{
    width:100,
    marginHorizontal: 8
  }
});
