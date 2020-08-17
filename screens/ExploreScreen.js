import * as React from 'react';
import { View, Text , Button  } from 'react-native';

function ExploreScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Explore Screen</Text>
      <Button
        title="Go back to main"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
export default ExploreScreen;