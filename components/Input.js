import React, { useState} from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const Input = props => {
  // States
  const [enteredGoal, setEnteredGoal] = useState('');

  // Functions
  const inputHandler = (text) => {
    setEnteredGoal(text);
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal)
    setEnteredGoal('');
  }

  return (
    <Modal
      visible={props.visible}
      animationType="slide"
    >
      <View style={styles.inputWrapper}>
        <TextInput 
          style={styles.goalInput}
          placeholder="Add a new course goal!"
          onChangeText={inputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonsWrapper}>
          <Button 
            style={styles.goalButton}
            title="ADD"
            onPress={addGoalHandler}
          />
          <Button 
            style={styles.goalButton}
            color="red"
            title="CANCEL"
            onPress={props.onCancel}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    flex: 1
  },
  goalInput: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    width: '80%'
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',
    marginVertical: 20
  },
  goalButton: {
    width: '50%',
    borderColor: '#000',
  }
});

export default Input;