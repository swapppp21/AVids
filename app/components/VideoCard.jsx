import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const VideoCard = ({ id, title, thumbnail }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: 200,
  },
  title: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default VideoCard;











// import React from 'react'
// import { Text, View } from 'react-native'

// const VideoCard=()=>{
//     return (
//         <View>
//           <Text> VideoCard </Text>
//         </View>
//       )

// }
 
   
// export default VideoCard