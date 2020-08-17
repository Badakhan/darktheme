import * as React from 'react';
import { View, Text , Button } from 'react-native';

function ProfileScreen ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        title="Go back to main "
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
export default ProfileScreen;