import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {imgBaseURL} from '../utils/imgBaseURL';
import {searchSingleMovie, searchProviders} from '../utils/search';

const Single = (props) => {
  const {item} = props.route.params;

  const movieID = item.id;

  const [movie, setMovie] = useState('');
  const [genres, setGenres] = useState([]);
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      searchSingleMovie(movieID).then((response) => {
        setMovie(response.data);
        setGenres(response.data.genres);
      });

      searchProviders(movieID).then((response) => {
        setProviders(response.data.results);
        setLoading(false);
      });
    }

    return () => {
      isMounted = false;
    };
  }, [movieID]);

  return (
    <ScrollView>
      <View style={styles.movieTop}>
        <ImageBackground
          style={styles.poster}
          source={{uri: `${imgBaseURL}${item.backdrop_path}`}}>
          <TouchableWithoutFeedback
            style={styles.goBack}
            onPress={() => props.navigation.goBack()}>
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
                  {movie.release_date?.slice(0, 4)} / {movie.runtime} min
                </Text>
              </View>

              <View style={styles.ratingContainer}>
                <Image
                  style={styles.singleRatingStar}
                  source={require('../img/star.png')}
                />
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
          <ProvidersList providers={providers} loading={loading} />
        </View>
      </View>
    </ScrollView>
  );
};

const ProvidersList = ({providers, loading}) => {
  const imgBaseURL = 'https://image.tmdb.org/t/p/original/';

  if (loading) {
    return <ActivityIndicator size="large" color="#1e68d8" />;
  }

  if (providers.BR) {
    if (providers.BR.flatrate) {
      return (
        <View style={styles.providersContainer}>
          {providers.BR.flatrate.map((item) => (
            <View key={item.provider_id} style={styles.providersItem}>
              <Image
                style={styles.providersImg}
                source={{
                  uri: `${imgBaseURL}${item.logo_path}`,
                }}
              />
              <Text style={styles.providersTitle}>{item.provider_name}</Text>
            </View>
          ))}
        </View>
      );
    }
  }

  return <Text>Nenhum serviço disponível para este título</Text>;
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
  },
  streamingImage: {
    borderRadius: 5,
  },
  singleRatingStar: {
    width: 23,
    height: 23,
    marginTop: 5,
    marginRight: 10,
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  providersContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  providersItem: {
    marginRight: 30,
  },
  providersTitle: {
    fontFamily: 'Poppins-Medium',
  },
  providersImg: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default Single;
