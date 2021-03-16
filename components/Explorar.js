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
import LinearGradient from 'react-native-linear-gradient';

const Explorar = (props) => {
  return (
    <View>
      <Text style={styles.title}>Explorar</Text>
      <View style={styles.exploreContainer}>
        <TouchableOpacity>
          <View style={styles.exploreItem}>
            <ImageBackground
              imageStyle={{borderRadius: 6}}
              style={styles.exploreImg}
              source={require('../img/animacao.jpg')}>
              <LinearGradient
                colors={[
                  'rgba(0, 0, 0, 0)',
                  'rgba(0, 0, 0, 0)',
                  'rgba(0, 0, 0, 0.3)',
                  'rgba(0, 0, 0, 0.6)',
                  'rgba(0, 0, 0, 0.8)',
                ]}
                style={styles.linearGradient}>
                <Text style={styles.exploreTxt}>Animação</Text>
              </LinearGradient>
            </ImageBackground>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.exploreItem}>
            <ImageBackground
              imageStyle={{borderRadius: 6}}
              style={styles.exploreImg}
              source={require('../img/aventura.jpg')}>
              <LinearGradient
                colors={[
                  'rgba(0, 0, 0, 0)',
                  'rgba(0, 0, 0, 0)',
                  'rgba(0, 0, 0, 0.3)',
                  'rgba(0, 0, 0, 0.6)',
                  'rgba(0, 0, 0, 0.8)',
                ]}
                style={styles.linearGradient}>
                <Text style={styles.exploreTxt}>Aventura</Text>
              </LinearGradient>
            </ImageBackground>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.exploreItem}>
            <ImageBackground
              imageStyle={{borderRadius: 6}}
              style={styles.exploreImg}
              source={require('../img/documentario.png')}>
              <LinearGradient
                colors={[
                  'rgba(0, 0, 0, 0)',
                  'rgba(0, 0, 0, 0)',
                  'rgba(0, 0, 0, 0.3)',
                  'rgba(0, 0, 0, 0.6)',
                  'rgba(0, 0, 0, 0.8)',
                ]}
                style={styles.linearGradient}>
                <Text style={styles.exploreTxt}>Documentário</Text>
              </LinearGradient>
            </ImageBackground>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.exploreItem}>
            <ImageBackground
              imageStyle={{borderRadius: 6}}
              style={styles.exploreImg}
              source={require('../img/terror.jpg')}>
              <LinearGradient
                colors={[
                  'rgba(0, 0, 0, 0)',
                  'rgba(0, 0, 0, 0)',
                  'rgba(0, 0, 0, 0.3)',
                  'rgba(0, 0, 0, 0.6)',
                  'rgba(0, 0, 0, 0.8)',
                ]}
                style={styles.linearGradient}>
                <Text style={styles.exploreTxt}>Terror</Text>
              </LinearGradient>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
    </View>
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
    marginBottom: 50,
  },
  exploreImg: {
    width: 150,
    height: 120,
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
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 120,
    width: 150,
    borderRadius: 6,
    paddingBottom: 10,
  },
});

export default Explorar;
