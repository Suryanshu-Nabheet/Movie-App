import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MovieItem from './components/MovieItem';

export default function SearchScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  const searchMovies = async () => {
    if (searchTerm.trim() === '') return;

    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data);
      setLoading(false);
    } catch (error) {
      console.error('Error searching movies:', error);
      setError('Failed to search movies. Please try again.');
      setLoading(false);
    }
  };

  const renderMovieItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { movie: item.show })}>
      <MovieItem movie={item.show} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search movies..."
        placeholderTextColor="#999"
        value={searchTerm}
        onChangeText={setSearchTerm}
        onSubmitEditing={searchMovies}
        returnKeyType="search"
      />
      {loading ? (
        <ActivityIndicator size="large" color="#E50914" style={styles.loader} />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={searchResults}
          renderItem={renderMovieItem}
          keyExtractor={(item) => item.show.id.toString()}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              {searchTerm ? 'No results found' : 'Start searching for movies'}
            </Text>
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  searchBar: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    fontFamily: 'Roboto_400Regular',
  },
  loader: {
    marginTop: 20,
  },
  errorText: {
    color: '#E50914',
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
    marginTop: 20,
  },
  emptyText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
    marginTop: 20,
  },
});

