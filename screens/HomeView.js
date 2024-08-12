import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import recipes from '../data/recipe';

const image = require('../assets/gradient.png');

const HomeView = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode='stretch' style={styles.bgimage}>
          <FlatList 
            data={recipes}
            keyExtractor={(item) => item.id.toString()}
            ListHeaderComponent={() => (
              <Text style={styles.header}>Cook Book</Text>
            )}
            contentContainerStyle={styles.cardContainer}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('Detail', { recipe: item })}>
                <View style={styles.card}>
                  <Image source={{ uri: item.image }} style={styles.image} />
                  <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.type}>{item.type}</Text>
                    <View style={styles.timetc}>
                      <Text style={styles.timeToCook}>{item.timeToCook}</Text>
                      <FontAwesomeIcon style={styles.clock} icon={faClock} />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </ImageBackground>  
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeee",
    width: '100%',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    paddingVertical: 20
  },
  bgimage: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%', 
  },
  cardContainer: {
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    padding: 10
  },
  image: {
    width: 90,
    height: 75,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  type: {
    fontSize: 15,
    color: '#888',
    paddingVertical: 5,
    fontWeight: '700'
  },
  timetc: {
    flexDirection: 'row',
  },
  timeToCook: {
    fontSize: 14,
  },
  clock: {
    paddingHorizontal: 15
  }
});

export default HomeView;