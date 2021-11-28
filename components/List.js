import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const List = props => {
  return (
    <TouchableOpacity 
      activeOpacity={0.5}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listView}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listView: {
    padding: 10,
    backgroundColor: '#EEE',
    borderBottomColor: '#000',
    borderWidth: 1,
    marginTop: 3
  }
});

export default List;