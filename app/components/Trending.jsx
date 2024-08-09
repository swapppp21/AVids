import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import VideoCard from '../components/VideoCard'; // Ensure this path is correct for your project

const Trending = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <VideoCard
          title={item.title}
          thumbnail={item.thumbnail}
          videoId={item.videoId}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingLeft: 10,
  },
});

export default Trending;