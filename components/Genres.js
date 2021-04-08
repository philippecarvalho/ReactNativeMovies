import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GenreItem from './GenreItem';

const Genres = (props) => {
  useEffect(() => {});

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <View style={styles.exploreContainer}>
        <GenreItem
          navigation={props.navigation}
          genre={{title: 'Animação', id: 16, img: 'animacao'}}
        />

        <GenreItem
          navigation={props.navigation}
          genre={{title: 'Aventura', id: 12, img: 'aventura'}}
        />

        <GenreItem
          navigation={props.navigation}
          genre={{title: 'Documentário', id: 99, img: 'documentario'}}
        />

        <GenreItem
          navigation={props.navigation}
          genre={{title: 'Terror', id: 27, img: 'terror'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    width: 200,
    marginBottom: 20,
  },
  exploreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 50,
  },
});

export default Genres;
