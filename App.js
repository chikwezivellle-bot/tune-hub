import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function App() {
  const songs = [
    'Afrobeats Mix',
    'Hip-Hop Vibes',
    'R&B Collection',
    'Global Hits',
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Text style={styles.logo}>TUNE HUB 🎧</Text>
      <Text style={styles.subtitle}>
        Your sound. Your world.
      </Text>

      <Text style={styles.heading}>Trending Hip-Hop</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {songs.map((song, index) => (
          <View style={styles.card} key={index}>
            <Text style={styles.music}>♫</Text>
            <Text style={styles.song}>{song}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.heading}>Made For You</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {songs.map((song, index) => (
          <View style={styles.card} key={index}>
            <Text style={styles.music}>♪</Text>
            <Text style={styles.song}>{song}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.nav}>
        <Text style={styles.navText}>Home</Text>
        <Text style={styles.navText}>Search</Text>
        <Text style={styles.navText}>Library</Text>
        <Text style={styles.navText}>Profile</Text>
      </View>
    </View>
  );
}

const
