import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FinishView = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <Text style={styles.titleIcon}>🍽️</Text>
      <Text style={styles.title}>Bon appetit!</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Recipe List')}>
        <Text style={styles.buttonText}>Back to home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleIcon:{
    fontSize: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: '700'
  },
  button: {
    backgroundColor: '#1DCA69',
    padding: 16,
    borderRadius: 5,
    marginVertical: 30
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff'
  }
});

export default FinishView;