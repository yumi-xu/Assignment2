import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import ItemsList from '../Components/ItemsList';
import { AppContext } from '../AppContext';

const displayActivityValue = (item) => item.duration;

const Activities = () => {
  const { activities } = useContext(AppContext);
  return (
    <View style={styles.container}>
      <ItemsList items={activities} displayValue={displayActivityValue}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    padding: 10,
  },
});

export default Activities;