import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native'; 
import { Divider } from '@rneui/themed';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const image = require('../assets/gradient.png');

const DetailView = ({ route }) => {
  const navigation = useNavigation();
  const { recipe } = route.params;
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesomeIcon icon={faArrowLeft}/>
      </TouchableOpacity>
      <ScrollView style={styles.scrollView}>
          <Image source={{ uri: recipe.image }} style={styles.image} />
          <ImageBackground source={image} resizeMode='stretch' style={styles.bgimage}>
            <View style={styles.detailContainer}>
              <View>
                <Text style={styles.name}>{recipe.name}</Text>
                <View style={styles.sub}>
                    <Text style={styles.type}>{recipe.type}</Text>
                    <View style={styles.timetc}>
                      <Text style={styles.timeToCook}>{recipe.timeToCook}</Text>
                      <FontAwesomeIcon style={styles.clock} icon={faClock} />
                    </View>
                </View>
                <Divider style={{ paddingVertical: 10 }}/>
                <Text style={styles.header}>Ingredients</Text>
                {recipe.ingredients.map((ingredient, index) => (
                  <View key={index} style={styles.ingredientContainer}>
                    <Text style={styles.ingredient}>{ingredient}</Text>
                  </View>
                ))}
                <Text style={styles.header}>Instructions</Text>
                {recipe.instructions.map((instruction, index) => (
                  <View key={index} style={styles.instructionContainer}>
                    <Text style={styles.step}>{index + 1} step</Text>
                    <Text style={styles.instruction}>{instruction}</Text>
                  </View>
                ))}
              </View>
              <Text style={styles.finish}>Bon appetit 🍽️</Text>
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
    backgroundColor: '#fff',
    opacity: 0.9,
    borderRadius: 50, 
    padding: 10,
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
  name: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sub: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
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
    paddingHorizontal: 15
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  ingredientContainer: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#dbdbdb'
  },
  ingredient: {
    fontSize: 16,
    fontWeight: '500'
  },
  instructionContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#dbdbdb'
  },
  step: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  instruction: {
    fontSize: 16,
    fontWeight: '500',
  },
  finish:{
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    marginVertical: 20,
    color: '#1DCA69',
  }
});

export default DetailView;