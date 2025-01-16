import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DetailsScreen({ route, navigation }) {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <Image
        source={{ uri: movie.image?.original || 'https://via.placeholder.com/500x750' }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{movie.name}</Text>
        <Text style={styles.genre}>{movie.genres.join(' • ')}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={18} color="#FFD700" />
          <Text style={styles.rating}>{movie.rating.average || 'N/A'}</Text>
        </View>
        <Text style={styles.summary}>{movie.summary.replace(/<[^>]*>/g, '')}</Text>
        <View style={styles.additionalInfo}>
          <Text style={styles.infoText}>Language: {movie.language}</Text>
          <Text style={styles.infoText}>Status: {movie.status}</Text>
          <Text style={styles.infoText}>Runtime: {movie.runtime} min</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    fontFamily: 'Roboto_700Bold',
  },
  genre: {
    fontSize: 16,
    color: '#999',
    marginBottom: 10,
    fontFamily: 'Roboto_400Regular',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rating: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 5,
    fontFamily: 'Roboto_400Regular',
  },
  summary: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 24,
    marginBottom: 20,
    fontFamily: 'Roboto_400Regular',
  },
  additionalInfo: {
    borderTopWidth: 1,
    borderTopColor: '#333',
    paddingTop: 20,
  },
  infoText: {
    fontSize: 14,
    color: '#999',
    marginBottom: 5,
    fontFamily: 'Roboto_400Regular',
  },
});

