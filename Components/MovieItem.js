import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MovieItem({ movie }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: movie.image?.medium || 'https://via.placeholder.com/150x200' }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{movie.name}</Text>
        <Text style={styles.genre}>{movie.genres.join(' • ')}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.rating}>{movie.rating.average || 'N/A'}</Text>
        </View>
        <Text style={styles.summary} numberOfLines={2}>
          {movie.summary.replace(/<[^>]*>/g, '')}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#111',
    borderRadius: 8,
    marginBottom: 15,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
  },
  infoContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    fontFamily: 'Roboto_700Bold',
  },
  genre: {
    fontSize: 12,
    color: '#999',
    marginBottom: 5,
    fontFamily: 'Roboto_400Regular',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  rating: {
    fontSize: 12,
    color: '#fff',
    marginLeft: 5,
    fontFamily: 'Roboto_400Regular',
  },
  summary: {
    fontSize: 12,
    color: '#ccc',
    fontFamily: 'Roboto_400Regular',
  },
});

