import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import {
   useTheme, 
   Avatar,
   Title,
   Caption,
   Paragraph,
   Text,
   TouchableRipple,
   Switch,
   Drawer
} from 'react-native-paper';
import { MaterialIcons, FontAwesome ,Ionicons, Feather, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { AuthContext } from '../components/context';

export function DrawerContent(props){
   const paperTheme = useTheme();
   const { signOut, toggleTheme } = React.useContext(AuthContext);
   return(
      <View style={{flex:1}}>
         <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
               <View style={styles.useIfoSection}>
                  <View style={{flexDirection: 'row', marginTop: 15}}>
                     {/* <Avatar.Image 
                        source={{
                           uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                         }}
                        size={50}
                     /> */}
                     
                     <Image
                     source={require('../assets/man.png')}
                     style={{ width: 40, height: 40 }}
                   />
                     <View style={{marginLeft:15, flexDirection:'column'}}>
                        <Title style={styles.title}>Mohammed Nilofar</Title>
                        <Caption style={styles.caption}>@Mohammed</Caption>
                     </View>
                  </View>
                  <View style={styles.row}>
                     <View style={styles.section}>
                        <Paragraph style={[styles.Paragraph, styles.caption]}>80</Paragraph>
                        <Caption style={styles.caption}>Following</Caption>
                     </View>
                     <View style={styles.section}>
                        <Paragraph style={[styles.Paragraph, styles.caption]}>100</Paragraph>
                        <Caption style={styles.caption}>Followers</Caption>
                     </View>
                  </View>
               </View>
               <View>
                  <Drawer.Section style={styles.drawerSection}>
                     <DrawerItem 
                        icon={({color,size}) => (
                        <FontAwesome name="home"
                        color={color}
                        size={size}
                        />
                        )}
                        label="Home"
                        onPress={() => {props.navigation.navigate('Home')}}
                     />
                     <DrawerItem 
                        icon={({color,size}) => (
                        <Ionicons name="ios-person"
                        color={color}
                        size={size}
                        />
                        )}
                        label="Profile"
                        onPress={() => {props.navigation.navigate('Profile')}}
                     />
                     <DrawerItem 
                        icon={({color,size}) => (
                        <Feather name="bookmark" 
                        color={color}
                        size={size}
                        />
                        )}
                        label="Bookmarks"
                        onPress={() => {props.navigation.navigate('BookmarkScreen')}}
                     />
                     <DrawerItem 
                        icon={({color,size}) => (
                        <AntDesign name="setting"
                        color={color}
                        size={size}
                        />
                        )}
                        label="Setting"
                        onPress={() => {props.navigation.navigate('Explore')}}
                     />
                     <DrawerItem 
                        icon={({color,size}) => (
                        <MaterialCommunityIcons name="account-check-outline"
                        color={color}
                        size={size}
                        />
                        )}
                        label="Support"
                        onPress={() => {props.navigation.navigate('SupportScreen')}}
                     />

                  </Drawer.Section>
                  <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
               </View>
            </View>
         </DrawerContentScrollView>
         <Drawer.Section style={styles.bottomDrawerSection}>
         <DrawerItem 
             icon={({color,size}) => (
            <MaterialIcons name="exit-to-app"
               color={color}
               size={size}
            />
            )}
            label="Sign Out"
            onPress={() => {signOut()}}
            />
         </Drawer.Section>
      </View>
   );
}

const styles= StyleSheet.create({
   drawerContent: {
      flex: 1,
   },
   useIfoSection: {
      paddingLeft: 20,
   },
   title: {
      fontSize: 14,
      marginTop: 3,
      fontWeight: 'bold',
   },
   caption: {
      fontSize: 14,
      lineHeight: 14,
   },
   row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
   },
   section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
   },
   Paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
   },
   drawerSection: {
      marginTop: 15,
   },
   bottomDrawerSection: {
      marginBottom: 16,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1,
   },
   preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
   },
});