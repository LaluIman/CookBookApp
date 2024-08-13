import React, { useState, useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ImageBackground, TextInput, KeyboardAvoidingView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faClock, faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import recipes from '../data/recipe';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FavoritesContext } from '../Favoritecontext';

const image = require('../assets/gradient.png');

const HomeView = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const filtered = recipes.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()));
      setFilteredRecipes(filtered);
    } else {
      setFilteredRecipes(recipes);
    }
  };

  const isFavorite = (recipe) => {
    return favorites.some(item => item.id === recipe.id);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground source={image} resizeMode='stretch' style={styles.bgimage}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Cook Book</Text>
          <View style={styles.searchInput}>
            <FontAwesomeIcon icon={faSearch} style={styles.searchIcon} />
            <TextInput
              placeholder="Search Recipes..."
              value={search}
              onChangeText={handleSearch}
            />
          </View>
        </View>
        <FlatList 
          data={filteredRecipes}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.cardContainer}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Detail', { recipe: item })}>
              <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.textContainer}>
                  <View style={styles.topCard}>
                  <Text style={styles.name}>{item.name}</Text>
                  <TouchableOpacity onPress={() => toggleFavorite(item)}>
                    <FontAwesomeIcon 
                      icon={isFavorite(item) ? faStarSolid : faStarRegular} 
                      style={{ color: isFavorite(item) ? 'yellow' : '#ccc', fontSize: 24 }} 
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
      </ImageBackground>  
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeee",
    width: '100%',
  },
  headerContainer: {
    paddingHorizontal: 30,
    marginTop: 100,
    paddingBottom: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bgimage: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%', 
  },
  searchInput: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    fontSize: 15,
    fontWeight: '500'
  },
  searchIcon: {
    margin: 5,
    color: '#888',
  },
  cardContainer: {
    paddingHorizontal: 30,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
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
  topCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  type: {
    fontSize: 15,
    color: '#888',
    paddingVertical: 5,
    fontWeight: '700',
  },
  timetc: {
    flexDirection: 'row',
  },
  timeToCook: {
    fontSize: 14,
  },
  clock: {
    paddingHorizontal: 15,
  },
});

export default HomeView;
