import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faClock, faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { Divider } from '@rneui/themed';
import { FavoritesContext } from '../Favoritecontext';

const image = require('../assets/gradient.png');

const DetailView = ({ route }) => {
  const navigation = useNavigation();
  const { recipe } = route.params;
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const isFavorite = favorites.some(item => item.id === recipe.id);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesomeIcon icon={faChevronLeft} style={{ color: '#fff'}} />
      </TouchableOpacity>
      <ScrollView style={styles.scrollView}>
        <Image source={{ uri: recipe.image }} style={styles.image} />
        <ImageBackground source={image} resizeMode='stretch' style={styles.bgimage}>
          <View style={styles.detailContainer}>
            <View style={styles.headerRow}>
              <Text style={styles.name}>{recipe.name}</Text>
              <TouchableOpacity onPress={() => toggleFavorite(recipe)}>
                <FontAwesomeIcon 
                  icon={isFavorite ? faStarSolid : faStarRegular} 
                  style={{ color: isFavorite ? '#fac70f' : '#ccc' , fontSize: 50,}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.sub}>
              <Text style={styles.type}>🍽️ {recipe.type}</Text>
              <View style={styles.timetc}>
                <Text style={styles.timeToCook}>{recipe.timeToCook}</Text>
                <FontAwesomeIcon style={styles.clock} icon={faClock} />
              </View>
            </View>
            <Divider style={{ paddingVertical: 10 }} />
            <Text style={styles.header}>Ingredients that you need!</Text>
            <View style={styles.ingredientGrid}>
              {recipe.ingredients.map((ingredient, index) => (
                <View key={index} style={styles.ingredientContainer}>
                  <Text style={styles.ingredient}>{ingredient}</Text>
                </View>
              ))}
            </View>
            <Divider style={{ paddingVertical: 10 }} />
            <Text style={styles.header}>Here's how to do it!</Text>
            {recipe.instructions.map((instruction, index) => (
              <View key={index} style={styles.instructionContainer}>
                <Text style={styles.step}>{index + 1} step</Text>
                <Text style={styles.instruction}>{instruction}</Text>
              </View>
            ))}
            <TouchableOpacity style={styles.finishButton} onPress={() => navigation.navigate('FinishView')}>
              <Text style={styles.finishButtonText}>Finish</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 1,
    backgroundColor: '#1DCA69',
    opacity: 0.9,
    borderRadius: 10,
    padding: 10,
    border: 1,
    fontWeight: '800'
  },
  image: {
    width: '100%',
    height: 300,
    flex: 3,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginBottom: 16,
  },
  bgimage: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  detailContainer: {
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  sub: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  type: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '600',
    color: '#888',
  },
  timetc: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  timeToCook: {
    fontSize: 16,
    marginBottom: 8,
  },
  clock: {
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  ingredientGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  ingredientContainer: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#dbdbdb',
    flexBasis: 'auto',
    marginHorizontal: 5,
  },
  ingredient: {
    fontSize: 16,
    fontWeight: '500',
  },
  instructionContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#dbdbdb',
  },
  step: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  instruction: {
    fontSize: 16,
    fontWeight: '400',
  },
  finish: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    marginVertical: 20,
    color: '#1DCA69',
  },
  finishButton: {
    backgroundColor: '#1DCA69',
    padding: 16,
    borderRadius: 10,
    marginVertical: 20,
  },
  finishButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default DetailView;
