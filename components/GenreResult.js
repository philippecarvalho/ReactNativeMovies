import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {searchMoviesByGenre} from '../utils/search';
import SearchResult from './SearchResult';

const GenreResult = (props) => {
  const [movies, setMovies] = useState('');
  const genreID = props.route.params.genreID;

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      searchMoviesByGenre(genreID).then((response) =>
        setMovies(response.data.results),
      );
    }
    return () => {
      isMounted = false;
    };
  }, [genreID]);

  return (
    <View style={styles.container}>
      <View style={styles.genreTitleContainer}>
        <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
          <Image
            style={styles.goBack}
            source={require('../img/arrow-black.png')}
          />
        </TouchableWithoutFeedback>
        <Text style={styles.genreTitle}>{props.route.params.genreTitle}</Text>
      </View>

      <SearchResult movies={movies} navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  genreTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  goBack: {
    marginTop: 10,
    marginRight: 20,
  },
  genreTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 26,
  },
});

export default GenreResult;
