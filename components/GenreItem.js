/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const GenreItem = (props) => {
  const images = {
    animacao: require('../img/animacao.jpg'),
    aventura: require('../img/aventura.jpg'),
    documentario: require('../img/documentario.png'),
    terror: require('../img/terror.jpg'),
  };

  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate('Genre Result', {
          genreID: props.genre.id,
          genreTitle: props.genre.title,
        })
      }>
      <View style={styles.exploreItem}>
        <ImageBackground
          imageStyle={{borderRadius: 6}}
          style={styles.exploreImg}
          source={images[props.genre.img]}>
          <LinearGradient
            colors={[
              'rgba(0, 0, 0, 0)',
              'rgba(0, 0, 0, 0)',
              'rgba(0, 0, 0, 0.3)',
              'rgba(0, 0, 0, 0.6)',
              'rgba(0, 0, 0, 0.8)',
            ]}
            style={styles.linearGradient}>
            <Text style={styles.exploreTxt}>{props.genre.title}</Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  exploreItem: {
    width: 177,
    height: 120,
    marginBottom: 10,
  },
  exploreImg: {
    width: 177,
    height: 120,
  },
  exploreTxt: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 120,
    width: 177,
    borderRadius: 6,
    paddingBottom: 10,
  },
});

export default GenreItem;
