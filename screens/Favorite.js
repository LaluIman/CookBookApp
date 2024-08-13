import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { FavoritesContext } from '../Favoritecontext';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { BackgroundImage } from '@rneui/base';

const image = require('../assets/gradient.png');

const FavoriteView = ({ navigation }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  return (
    <View style={styles.container}>
      <BackgroundImage  source={image} resizeMode='stretch' style={styles.bgimage}>
      <Text style={styles.header}>Favorites</Text>
      <FlatList 
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.cardContainer}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detail', { recipe: item })}>
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.textContainer}>
                <View style={styles.cardTop}>
                  <Text style={styles.name}>{item.name}</Text>
                  <TouchableOpacity onPress={() => toggleFavorite(item)}>
                    <FontAwesomeIcon 
                      icon={faStarSolid} 
                      style={{ color: 'yellow', fontSize: 24 }} 
                    />
                  </TouchableOpacity>
                </View>
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
      </BackgroundImage>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bgimage: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%', 
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    marginHorizontal: 50,
    marginVertical: 100
  },
  card: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },
  image: {
    width: 90,
    height: 75,
    borderRadius: 8,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  type: {
    fontSize: 15,
    color: '#888',
  },
  favoriteIcon: {
    color: 'yellow',
  },
});

export default FavoriteView;
