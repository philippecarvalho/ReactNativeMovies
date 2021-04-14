import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Genres from './Genres';
import SearchResult from './SearchResult';
import {Searchbar} from 'react-native-paper';

import {searchMultipleMovies} from '../utils/search';

const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState('');

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted && searchQuery) {
      searchMultipleMovies(searchQuery).then((response) =>
        setMovies(response.data.results),
      );
    }
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

      <Genres navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
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
