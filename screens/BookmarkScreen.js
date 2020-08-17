import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BookmarkScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Bookmark Screen</Text>
        <Button
          title="Click Here"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});

export default BookmarkScreen;