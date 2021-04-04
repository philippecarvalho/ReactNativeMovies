import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import {Searchbar} from 'react-native-paper';

const Pesquisar = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState('');

  const searchMoviesURL = `https://api.themoviedb.org/3/search/movie?api_key=450bf04edaaa49ba73752463a5e7270d&language=pt-BR&query=${searchQuery}&page=1&include_adult=false`;
  const imgBaseURL = 'https://image.tmdb.org/t/p/original/';

  const onChangeSearch = (query) => setSearchQuery(query);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(searchMoviesURL);
      const data = await response.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, [searchQuery]);

  const renderItem = ({item}) => (
    <TouchableWithoutFeedback
      onPress={() => props.navigation.push('Single', {item})}>
      <View style={styles.searchResultContainer}>
        <Image
          style={styles.resultImg}
          source={{
            uri: `${imgBaseURL}${item.poster_path}`,
          }}
        />
        <View>
          <Text style={styles.resultTitle}>{item.title}</Text>
          <Text style={styles.resultRelease}>{item.release_date}</Text>
          <Text style={styles.resultRanking}>{item.vote_average}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Buscar"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <FlatList
        keyboardShouldPersistTaps={'handled'}
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={({id}, index) => id.toString()}
        renderItem={renderItem}
        initialNumToRender={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchResultContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  resultImg: {
    width: 95,
    height: 143,
    marginRight: 20,
  },
  resultTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
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

export default Pesquisar;
