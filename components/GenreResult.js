import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import SearchResult from './SearchResult';

const GenreResult = (props) => {
  const [movies, setMovies] = useState('');

  useEffect(() => {
    let isMounted = true;

    const genreID = props.route.params.genreID;

    const searchMovieByGenreURL = `https://api.themoviedb.org/3/discover/movie?api_key=450bf04edaaa49ba73752463a5e7270d&language=pt-br&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=${genreID}`;

    const fetchMovies = async () => {
      const response = await fetch(searchMovieByGenreURL);
      const data = await response.json();
      setMovies(data.results);
    };

    if (isMounted) {
      fetchMovies();
    }

    return () => {
      isMounted = false;
    };
  }, [props]);

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
