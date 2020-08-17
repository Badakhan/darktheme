import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Ionicons, AntDesign } from '@expo/vector-icons';
import HomeScreen  from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();


const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
   <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-notifications" color={color} size={26} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: 'setting',
          tabBarColor: '#3e2465',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen= ({navigation})=> (
   <HomeStack.Navigator screenOptions={{
     headerStyle: {
       backgroundColor: "#009387",
     },
     headerTintColor:"#fff",
     headerTitleStyle: {
     fontWeight: 'bold'
   }
 }}>
   <HomeStack.Screen name="Home" component={HomeScreen} options={{
     title:'OverView',
   headerLeft: ()=> (
     <Ionicons style={styles.menu} name="ios-menu" size={25} color='#fff'
     backgroundColor="#009387" onPress={() => navigation.toggleDrawer()}></Ionicons>
   )
 }}
   />
 </HomeStack.Navigator>
 );
 
 const DetailsStackScreen = ({navigation})=> (
   <DetailsStack.Navigator screenOptions={{
     headerStyle: {
       backgroundColor: "#1f65ff",
     },
     headerTintColor:"#fff",
     headerTitleStyle: {
     fontWeight: 'bold'
   }
 }}>
   <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
     title:'Top',
     headerLeft: ()=> (
       <Ionicons style={styles.menu} name="ios-menu" size={25} color='#fff'
       backgroundColor="#009387" onPress={() => navigation.toggleDrawer()}></Ionicons>
     )
   }}
   />
 </DetailsStack.Navigator>
 );

 const ProfileStackScreen = ({navigation})=> (
  <ProfileStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: "#d02860",
    },
    headerTintColor:"#fff",
    headerTitleStyle: {
    fontWeight: 'bold'
  }
}}>
  <ProfileStack.Screen name="Details" component={ProfileScreen} options={{
    title:'Profile',
    headerLeft: ()=> (
      <Ionicons style={styles.menu} name="ios-menu" size={25} color='#fff'
      backgroundColor="#009387" onPress={() => navigation.toggleDrawer()}></Ionicons>
    )
  }}
  />
</ProfileStack.Navigator>
);

const ExploreStackScreen = ({navigation})=> (
  <ExploreStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: "#3e2465",
    },
    headerTintColor:"#fff",
    headerTitleStyle: {
    fontWeight: 'bold'
  }
}}>
  <ExploreStack.Screen name="Details" component={ExploreScreen} options={{
    title:'Explore',
    headerLeft: ()=> (
      <Ionicons style={styles.menu} name="ios-menu" size={25} color='#fff'
      backgroundColor="#009387" onPress={() => navigation.toggleDrawer()}></Ionicons>
    )
  }}
  />
</ExploreStack.Navigator>
);

 const styles = StyleSheet.create({
   menu: {
     left: 17
   }
   
 });