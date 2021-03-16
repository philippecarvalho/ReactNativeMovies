import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const Single = (props) => {
  const {item} = props.route.params;

  const movieID = item.id;

  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieID}?api_key=450bf04edaaa49ba73752463a5e7270d&language=pt-BR`,
      );
      const data = await response.json();
      if (isMounted) {
        setMovie(data);
        setGenres(data.genres);
      }
    };

    fetchMovie();

    return () => {
      isMounted = false;
    };
  });

  const imgBaseURL = 'https://image.tmdb.org/t/p/original/';

  return (
    <ScrollView>
      <View style={styles.movieTop}>
        <ImageBackground
          style={styles.poster}
          source={{
            uri: `${imgBaseURL}${item.backdrop_path}`,
          }}>
          <TouchableWithoutFeedback
            style={styles.goBack}
            onPress={() => props.navigation.push('Home')}>
            <Image source={require('../img/arrow.png')} />
          </TouchableWithoutFeedback>
          <LinearGradient
            style={styles.topGradient}
            colors={[
              'rgba(0, 0, 0, 0)',
              'rgba(0, 0, 0, 0)',
              'rgba(0, 0, 0, 0.4)',
              'rgba(0, 0, 0, 0.6)',
              'rgba(0, 0, 0, 1)',
            ]}>
            <View style={styles.topText}>
              <View style={styles.movieTitleContainer}>
                <Text style={styles.movieTitle}>{item.title}</Text>

                <Text style={styles.movieTime}>
                  {movie.release_date} / {movie.runtime} min
                </Text>
              </View>

              <View>
                <Text style={styles.movieRanking}>{item.vote_average}</Text>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>

      <View style={styles.textArea}>
        <View style={styles.categories}>
          {genres.map((i) => (
            <View key={i.id} style={styles.categorieBox}>
              <Text key={i.id} style={styles.categorieName}>
                {i.name}
              </Text>
            </View>
          ))}
        </View>

        <View>
          <Text style={styles.title}>Descrição</Text>
          <Text style={styles.description}>{item.overview}</Text>
        </View>

        <View>
          <Text style={styles.title}>Streaming</Text>
          <Image
            style={styles.streamingImage}
            source={require('../img/disney.jpg')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  movieTop: {
    height: 270,
  },
  topGradient: {
    height: 250,
  },
  poster: {
    width: '100%',
    height: 270,
  },
  goBack: {
    margin: 20,
  },
  topText: {
    height: 230,
    paddingBottom: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  movieTitleContainer: {
    width: '75%',
  },
  movieTitle: {
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    fontSize: 26,
  },
  movieTime: {
    fontFamily: 'Poppins-Medium',
    color: '#a3a3a3',
    fontSize: 14,
  },
  movieRanking: {
    fontFamily: 'Poppins-Medium',
    color: '#fff',
    fontSize: 24,
  },
  textArea: {
    padding: 20,
    backgroundColor: '#fff',
  },
  categories: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  categorieBox: {
    borderWidth: 1,
    borderColor: '#2A8CF6',
    borderRadius: 5,
    width: 'auto',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 20,
    marginRight: 10,
  },
  categorieName: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    color: '#2A8CF6',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    color: '#000',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    marginBottom: 20,
    lineHeight: 22,
    fontFamily: 'Roboto',
  },
  streamingImage: {
    borderRadius: 5,
  },
});

export default Single;
