import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

const SearchResult = ({props, movies}) => {
  const imgBaseURL = 'https://image.tmdb.org/t/p/original/';

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

export default SearchResult;
