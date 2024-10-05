import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ItemsList = ({ items, displayValue }) => {
  return (
    <FlatList
      data={items}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.title}>{item.type}</Text>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.value}>{displayValue(item)}</Text>
          {item.warning && <Text style={styles.warning}>⚠️</Text>}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#5D5DFF',
    borderRadius: 5,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
  },
  date: {
    color: 'white',
  },
  value: {
    color: 'white',
  },
  warning: {
    color: 'yellow',
  },
});

export default ItemsList;