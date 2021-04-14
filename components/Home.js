import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';

import Genres from './Genres';

import {imgBaseURL} from '../utils/imgBaseURL';

import {searchTrendingMovies} from '../utils/search';

const Home = (props) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      searchTrendingMovies().then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      });
    }

    return () => {
      isMounted = false;
    };
  }, []);

  const renderItem = ({item}) => (
    <TouchableWithoutFeedback
      onPress={() => props.navigation.push('Single', {item})}>
      <View style={styles.posterContainer}>
        <Image
          style={styles.posterImg}
          source={{
            uri: `${imgBaseURL}${item.poster_path}`,
          }}
        />
        <Text style={styles.movieTitle}>{item.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../img/react-movies-logo.png')}
      />
      <Text style={styles.title}>Principais essa semana</Text>

      {loading && <ActivityIndicator size="large" color="#1e68d8" />}

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={movies}
        keyExtractor={({id}, index) => id.toString()}
        renderItem={renderItem}
        initialNumToRender={1}
      />

      <Genres navigation={props.navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    width: 200,
    marginBottom: 30,
  },
  movieTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  posterContainer: {
    width: 159,
    marginRight: 20,
    marginBottom: 10,
  },
  posterImg: {
    width: 159,
    height: 240,
    borderRadius: 8,
    marginBottom: 5,
  },
  exploreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 50,
  },
  exploreImg: {
    width: 150,
    height: 120,
  },
  exploreItem: {
    width: 150,
    height: 120,
    marginBottom: 10,
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
    width: 150,
    borderRadius: 6,
    paddingBottom: 10,
  },
});

export default Home;
