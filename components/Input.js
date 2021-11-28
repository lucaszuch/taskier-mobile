import React, { useState} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const Input = props => {
  // States
  const [enteredGoal, setEnteredGoal] = useState('');

  // Functions
  const inputHandler = (text) => {
    setEnteredGoal(text);
  }

  return (
    <View style={styles.inputWrapper}>
      <TextInput 
        style={styles.goalInput}
        placeholder="Add a new course goal!"
        onChangeText={inputHandler}
        value={enteredGoal}
      />
      <Button 
        style={styles.goalButton}
        color="#000"
        title="ADD"
        onPress={props.onAddGoal.bind(this, enteredGoal)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  goalInput: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    flex: 3
  },
  goalButton: {
    width: '20%',
    borderColor: '#000',
    flex: 1
  }
});

export default Input;