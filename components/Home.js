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

const Home = (props) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const trendingMoviesURL =
    'https://api.themoviedb.org/3/trending/movie/week?api_key=450bf04edaaa49ba73752463a5e7270d&language=pt-BR';

  useEffect(() => {
    let isMounted = true;

    const fetchMovies = async () => {
      const response = await fetch(trendingMoviesURL);
      const data = await response.json();
      if (isMounted) {
        setMovies(data.results);
        setLoading(false);
      }
    };

    fetchMovies();

    return () => {
      isMounted = false;
    };
  });

  const imgBaseURL = 'https://image.tmdb.org/t/p/original/';

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
