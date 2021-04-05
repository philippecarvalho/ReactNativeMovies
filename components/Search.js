import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Genres from './Genres';
import SearchResult from './SearchResult';
import {Searchbar} from 'react-native-paper';

const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  useEffect(() => {
    let isMounted = true;
    const searchMoviesURL = `https://api.themoviedb.org/3/search/movie?api_key=450bf04edaaa49ba73752463a5e7270d&language=pt-BR&query=${searchQuery}&page=1&include_adult=false`;

    const fetchMovies = async () => {
      const response = await fetch(searchMoviesURL);
      const data = await response.json();
      if (isMounted) {
        setMovies(data.results);
      }
    };

    fetchMovies();

    return () => {
      isMounted = false;
    };
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Buscar"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />

      <SearchResult movies={movies} navigation={props.navigation} />

      <Genres />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  searchBar: {
    marginBottom: 20,
    backgroundColor: '#E2E3EA',
    fontFamily: 'Poppins-Bold',
    borderRadius: 10,
    elevation: 0,
  },
  searchResultContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
  },
  resultImg: {
    width: 95,
    height: 143,
    marginRight: 20,
  },
  resultTitle: {
    fontSize: 18,
    width: 220,
  },
  resultRelease: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#565656',
  },
  resultRanking: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
  },
});

export default Search;
