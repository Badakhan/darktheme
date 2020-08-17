import * as React from 'react';
import { View, Text , Button, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';

function HomeScreen({navigation}) {
  const { colors } = useTheme();

  const theme = useTheme();
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
      <Text style={{color: colors.text}}>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
export default HomeScreen;