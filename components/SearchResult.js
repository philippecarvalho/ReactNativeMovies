import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

const SearchResult = ({props, movies, navigation}) => {
  const imgBaseURL = 'https://image.tmdb.org/t/p/original/';

  const renderItem = ({item}) => (
    <TouchableWithoutFeedback onPress={() => navigation.push('Single', {item})}>
      <View style={styles.searchResultContainer}>
        <Image
          style={styles.resultImg}
          source={{
            uri: `${imgBaseURL}${item.poster_path}`,
          }}
        />
        <View>
          <Text style={styles.resultTitle}>{item.title}</Text>
          <Text style={styles.resultRelease}>
            {item.release_date?.slice(0, 4)}
          </Text>
          <View style={styles.ratingContainer}>
            <Image
              style={styles.resultRating}
              source={require('../img/star.png')}
            />
            <Text style={styles.resultRanking}>{item.vote_average}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <View style={styles.container}>
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
    marginVertical: 10,
  },
  resultImg: {
    width: 95,
    height: 143,
    marginRight: 20,
  },
  resultTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    width: 220,
  },
  resultRelease: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#565656',
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  resultRating: {
    width: 19,
    height: 19,
    marginTop: 5,
    marginRight: 10,
  },
  resultRanking: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
  },
});

export default SearchResult;
