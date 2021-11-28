import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Button} from 'react-native';

// Import components
import Input from './components/Input';
import List from './components/List';

export default function App() {
  // States
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Functions
  const addGoalHandler = (title) => {
    console.log(title);
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: title}]);
    setIsModalVisible(false);
  }

  const removeGoalHandler = (id) => {
    console.log(`Deleting ID: ${id}`)
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== id)
    });
  }

  const cancelGoalHandler = () => {
    setIsModalVisible(false);
  }
  
  return (
    <View style={styles.container}>
      {/* Displays the modal */}
      <Button
        title="ADD NEW TASK"
        onPress={() => setIsModalVisible(true)}
      />
      {/* Input area */}
      <Input 
        visible={isModalVisible}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalHandler}
      />

      {/* Goals list area */}
      <FlatList data={courseGoals}
                keyExtractor={(item, index) => item.id}
                renderItem={itemData => <List id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    minHeight: '100%'
  }
});
