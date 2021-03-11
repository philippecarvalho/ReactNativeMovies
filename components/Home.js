import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const Home = (props) => {
  const [movies, setMovies] = useState([]);

  let similarMoviesURL;

  if (props.movieID) {
    similarMoviesURL = `https://api.themoviedb.org/3/movie/${props.movieID}/similar?api_key=450bf04edaaa49ba73752463a5e7270d&language=pt-BR&page=1`;
  }
  const trendingMoviesURL =
    'https://api.themoviedb.org/3/trending/movie/week?api_key=450bf04edaaa49ba73752463a5e7270d&language=pt-BR';

  const fetchMovies = async () => {
    if (props.movieID) {
      const response = await fetch(similarMoviesURL);
      const data = await response.json();
      setMovies(data.results);
    } else {
      const response = await fetch(trendingMoviesURL);
      const data = await response.json();
      setMovies(data.results);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [props.movieID]);

  const renderItem = ({item}) => (
    <>
      <Item item={item} />
    </>
  );

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../img/react-movies-logo.png')}
      />
      <Text style={styles.title}>Principais essa semana</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={movies}
        keyExtractor={({id}, index) => id.toString()}
        renderItem={renderItem}
      />
      <Text style={styles.title}>Explorar</Text>
      <View style={styles.exploreContainer}>
        <TouchableOpacity style={styles.exploreItem}>
          <ImageBackground
            style={styles.exploreImg}
            source={require('../img/animacao.jpg')}>
            <Text style={styles.exploreTxt}>Animação</Text>
          </ImageBackground>
        </TouchableOpacity>

        <View style={styles.exploreItem}>
          <ImageBackground
            style={styles.exploreImg}
            source={require('../img/animacao.jpg')}>
            <Text>Animação</Text>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
};

const Item = ({item}) => {
  const imgBaseURL = 'https://image.tmdb.org/t/p/original/';

  return (
    <TouchableOpacity style={styles.posterContainer}>
      <Image
        style={styles.posterImg}
        source={{
          uri: `${imgBaseURL}${item.poster_path}`,
        }}
      />
      <Text style={styles.movieTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
    marginRight: 30,
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
  },
  exploreImg: {
    width: 150,
    height: 120,
    justifyContent: 'flex-end',
    paddingBottom: 10,
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
});

export default Home;
