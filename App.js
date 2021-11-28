import React, {useState} from 'react';
import { StyleSheet, View, FlatList} from 'react-native';

// Import components
import Input from './components/Input';
import List from './components/List';

export default function App() {
  // States
  const [courseGoals, setCourseGoals] = useState([]);

  // Functions
  const addGoalHandler = (title) => {
    console.log(title);
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: title}]);
  }

  const removeGoalHandler = (id) => {
    console.log(`Deleting ID: ${id}`)
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== id)
    });
  }
  
  return (
    <View style={styles.container}>
      {/* Input area */}
      <Input onAddGoal={addGoalHandler}/>

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
    backgroundColor: '#EEE',
    minHeight: '100%'
  }
});
