import React,{useState} from 'react';
import { Pressable,extendTheme, useColorMode,StatusBar,HStack, Image, VStack,Center } from "native-base";
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator , DrawerContentScrollView, DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text, TouchableOpacity, StyleSheet  } from "react-native";


import AlbumScreen from '../screens/AlbumScreen';
import DetailScreen from '../screens/DetailScreen';
import SettingScreen from '../screens/SettingScreen';
import UploadScreen from '../screens/UploadScreen';
import PlanetScreen from '../screens/PlanetScreen';
import PlanetChineseScreen from '../screens/PlanetChineseScreen';
import PlanetMathScreen from '../screens/PlanetMathScreen';
import PlanetScienceScreen from '../screens/PlanetScienceScreen';
import PlanetSocietyScreen from '../screens/PlanetSocietyScreen';
import SignupScreen from '../screens/SignupScreen';
import ManualScreen from '../screens/ManualScreen';
import ReviewScreen from '../screens/ReviewScreen';
import PlanetDetailScreen from '../screens/PlanetDetailScreen';
import PlanetImgScreen from '../screens/PlanetImgScreen';
import PlanetImgfinalScreen from '../screens/PlanetImgfinalScreen';
import DisplaySettingScreen from '../screens/DisplaySettingScreen';
import MyTheme from '../Theme';

import albumData from "../json/albums.json";
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
// // Define the config
// const config = {
//   useSystemColorMode: false,
//   initialColorMode: "light",
// };

// // extend the theme
// export const theme = extendTheme({ config });

const Navigation = () => {
  const { colorMode } = useColorMode();
  return (
    <NavigationContainer theme={MyTheme} >
       <MyDrawer/>
      <StatusBar
        barStyle={
          colorMode == "light" ? "dark-content" : "light-content"
        }
        backgroundColor={
          colorMode == "light" ? "#FFE7AB" : "#2B3A61"
        }
      />
      
    </NavigationContainer>
  );
}
const CustomDrawerContent = (props) => {
  const { colorMode } = useColorMode();
  return(
      <DrawerContentScrollView {...props}>
          <VStack ml={70} mb={2} mt={10} space={14}>
            <Image 
                h={140} w={140}
                source={{uri: "https://i.imgur.com/4DVRvoV.png"}}
                alt='avatar'
            />
            </VStack>
            <Center>
              <HStack style={styles.userStyle} color={colorMode == 'light' ? '#FFE7AB' : '#2B3A61'} alignItems="center" >
                <Text  style={styles.userfontStyle}  >某探險者</Text>
              </HStack>
            </Center>
          <DrawerItemList {...props}/>
          <Image 
                h={290} w={260}
                style={styles.imgStyle}
                source={  {uri: colorMode=="light" ? "https://i.imgur.com/NTgy0Dz.png" :"https://raw.githubusercontent.com/wang-C109156201/app-midterm/master/src/images/b%201.png" }}

                alt='avatar'
            />
      </DrawerContentScrollView>
  );
}

const MyDrawer = () => {
  const { colorMode } = useColorMode();
  const {color} = colorMode;
  return (
    <Drawer.Navigator initialRouteName="HomeStack"  
        useLegacyImplementation
        screenOptions={{
          drawerStyle: {
            backgroundColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          },
          drawerActiveBackgroundColor:colorMode == 'light' ? 'rgba(142,174,255,0.2)' : 'rgba(255,231,171,0.2)',
          drawerInactiveTintColor:colorMode == 'light' ? '#757272' : '#FFFFFF',
          drawerActiveTintColor:colorMode == 'light' ? '#2B3A61' : '#FFE7AB',
          drawerLabelStyle: { fontSize: 18, fontWeight: '300' },
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}
        >
          
      <Drawer.Screen 
        name="HomePage" 
        component={MyTabs} 
        
        options={{
          headerShown: false,
          title: "登入",
          drawerIcon: ({color}) => (
            <FontAwesome5 name="user-astronaut" color={color} size={20} style={styles.loginStyle}/>
          ),
        }}
      />
      <Drawer.Screen 
        name="SettingsStack" 
        component={SettingStack} 
        options={{
          headerShown: false,
          title: "探索設定",
          drawerIcon: ({color}) => (
            <Ionicons name="md-settings-outline" color={color} size={20} style={styles.setStyle}/>
          ),
        }}
      />
      <Drawer.Screen 
        name="Review" 
        component={ReviewStack} 
        options={{
          headerShown: false,
          title: "待複習星知",
          
          drawerIcon: ({color}) => (
            <FontAwesome5 name="star" color={color} size={20}style={styles.reviewStyle}  />
          ),
        }}
      />
      <Drawer.Screen 
        name="ExploreManual" 
        component={ManualStack} 
        options={{
          headerShown: false,
          title: "探索說明書",
          drawerIcon: ({color}) => (
            <AntDesign name="book" color={color} size={20} style={styles.bookStyle}/>
          ),
        }}
      />
    </Drawer.Navigator>
  );  
}

const MyTabs = () => {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarInactiveTintColor: colorMode == 'light' ? '#FFFFFF' : '#2B3A61',
        tabBarActiveTintColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
        tabBarStyle: { backgroundColor: colorMode == 'light' ? '#2B3A61' : '#FFE7AB' },
        // headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "首頁",
          fontSize:"25",
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color}  size={27} />
          ),
        }}
      />
      <Tab.Screen
        name="planet-outline"
        component={PlanetStack}
        options={{
          headerShown: false,
          title: "星球",
          tabBarIcon: ({color}) => (
            <Ionicons name="planet-outline" color={color} size={27} />
          ),
        }}
      />
      <Tab.Screen
        name="UploadScreen"
        component={UploadScreen}
        options={{
          headerShown: false,
          title: "上傳",
          tabBarIcon: ({color}) => (
            <Ionicons name="cloud-upload-outline" color={color} size={27} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const ReviewStack = ({navigation}) => {
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DisplayReview"
        component={ReviewScreen}
        options={{
          title: "Review",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          },
          headerTintColor: colorMode == 'light' ? '#2B3A61' : '#FFE7AB',
          
          headerTitleStyle: {
            color: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons 
              name={'menu'} 
              size={30} 
              color= {colorMode == 'light' ? '#2B3A61' : '#FFE7AB'}
              onPress={() => navigation.openDrawer()}
              style={{marginRight: 20}}
            />            
          ),  
        }}
      />
      
    </Stack.Navigator>
    
  );
}

const SettingStack = ({navigation}) => {
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DisplaySetting"
        component={DisplaySettingScreen}
        options={{
          title: "Display",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          },
          headerTintColor: colorMode == 'light' ? '#2B3A61' : '#FFE7AB',
          
          headerTitleStyle: {
            color: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons 
              name={'menu'} 
              size={30} 
              color= {colorMode == 'light' ? '#2B3A61' : '#FFE7AB'}
              onPress={() => navigation.openDrawer()}
              style={{marginRight: 20}}
            />            
          ),  
        }}
      />
      
    </Stack.Navigator>
    
  );
}


const ManualStack = ({navigation}) => {
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DisplayManualScreen"
        component={ManualScreen}
        options={{
          title: "Manual",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          },
          headerTintColor: colorMode == 'light' ? '#2B3A61' : '#FFE7AB',
          
          headerTitleStyle: {
            color: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons 
              name={'menu'} 
              size={30} 
              color= {colorMode == 'light' ? '#2B3A61' : '#FFE7AB'}
              onPress={() => navigation.openDrawer()}
              style={{marginRight: 20}}
            />            
          ),  
        }}
      />
      
    </Stack.Navigator>
    
  );
}

const PlanetStack = ({navigation}) => {
  const { colorMode } = useColorMode();
  const [toggle, setToggle] = useState(true);
    const toggleFunction = () => {
        setToggle(!toggle);
    };
  return (
    <Stack.Navigator
    >
      <Stack.Screen
        name="Planet"
        component={PlanetScreen}
        options={{
          title: "Planet",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          },
          
          headerLeft: () => (
            <MaterialCommunityIcons 
              name={'menu'} 
              size={30} 
              color= {colorMode == 'light' ? '#2B3A61' : '#FFE7AB'}
              onPress={() => navigation.openDrawer()}
              style={{marginRight: 20}}
            />            
          ),  
          headerTitleStyle: {
            color: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
      <Stack.Screen
        name="PlanetDetail"
        component={PlanetDetailScreen}
        options={() => ({
          title: "PlanetDetail",
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons 
              name={'menu'} 
              size={30} 
              color= {colorMode == 'light' ? '#2B3A61' : '#FFE7AB'}
              onPress={() => navigation.openDrawer()}
              style={{marginRight: 20}}
            />            
          ),
          headerRight: () => (
            <Ionicons 
              name={'search'} 
              size={30} 
              color= {colorMode == 'light' ? '#2B3A61' : '#FFE7AB'}
              onPress={() => {alert("you clicked me")}}
              style={{marginRight: 20}}
            />            
          ),  
          headerTitleStyle: {
            color: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
            fontWeight: '400',
            fontSize: 20
          },
        })}
      />
      <Stack.Screen
        name="PlanetChinese"
        component={PlanetChineseScreen}
        options={() => ({
          title: "PlanetChinese",
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons 
              name={'menu'} 
              size={30} 
              color= {colorMode == 'light' ? '#2B3A61' : '#FFE7AB'}
              onPress={() => navigation.openDrawer()}
              style={{marginRight: 20}}
            />            
          ),
          headerRight: () => (
            <Ionicons 
              name={'search'} 
              size={30} 
              color= {colorMode == 'light' ? '#2B3A61' : '#FFE7AB'}
              onPress={() => {alert("you clicked me")}}
              style={{marginRight: 20}}
            />            
          ),  
          headerTitleStyle: {
            color: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
            fontWeight: '400',
            fontSize: 20
          },
        })}
      />
      <Stack.Screen
        name="PlanetMath"
        component={PlanetMathScreen}
        options={() => ({
          title: "PlanetMath",
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons 
              name={'menu'} 
              size={30} 
              color= {colorMode == 'light' ? '#2B3A61' : '#FFE7AB'}
              onPress={() => navigation.openDrawer()}
              style={{marginRight: 20}}
            />            
          ),
          headerRight: () => (
            <Ionicons 
              name={'search'} 
              size={30} 
              color= {colorMode == 'light' ? '#2B3A61' : '#FFE7AB'}
              onPress={() => {alert("you clicked me")}}
              style={{marginRight: 20}}
            />            
          ),  
          headerTitleStyle: {
            color: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
            fontWeight: '400',
            fontSize: 20
          },
        })}
      />
      <Stack.Screen
        name="PlanetSociety"
        component={PlanetSocietyScreen}
        options={() => ({
          title: "PlanetSociety",
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons 
              name={'menu'} 
              size={30} 
              color= {colorMode == 'light' ? '#2B3A61' : '#FFE7AB'}
              onPress={() => navigation.openDrawer()}
              style={{marginRight: 20}}
            />            
          ),
          headerRight: () => (
            <Ionicons 
              name={'search'} 
              size={30} 
              color= {colorMode == 'light' ? '#2B3A61' : '#FFE7AB'}
              onPress={() => {alert("you clicked me")}}
              style={{marginRight: 20}}
            />            
          ),  
          headerTitleStyle: {
            color: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
            fontWeight: '400',
            fontSize: 20
          },
        })}
      />
      <Stack.Screen
        name="PlanetScience"
        component={PlanetScienceScreen}
        options={() => ({
          title: "PlanetScience",
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons 
              name={'menu'} 
              size={30} 
              color= {colorMode == 'light' ? '#2B3A61' : '#FFE7AB'}
              onPress={() => navigation.openDrawer()}
              style={{marginRight: 20}}
            />            
          ),
          headerRight: () => (
            <Ionicons 
              name={'search'} 
              size={30} 
              color= {colorMode == 'light' ? '#2B3A61' : '#FFE7AB'}
              onPress={() => {alert("you clicked me")}}
              style={{marginRight: 20}}
            />            
          ),  
          headerTitleStyle: {
            color: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
            fontWeight: '400',
            fontSize: 20
          },
        })}
      />
      <Stack.Screen
        name="PlanetImg"
        component={PlanetImgfinalScreen}
        options={() => ({
          title: "PlanetImg",
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <Pressable>
                <MaterialCommunityIcons 
                name={'chevron-left'} 
                color={colorMode == 'light' ? '#2B3A61' : '#FFE7AB'} 
                size={30}
                style={{marginRight: 20}}
                onPress={ () => {navigation.navigate('PlanetDetail');}}
            />
            </Pressable>
            ),
          headerRight:() =>(
            <TouchableOpacity onPress={() => toggleFunction()}>
              <Text>{toggle ? <MaterialCommunityIcons name={'star-outline'} color={colorMode == 'light' ? '#2B3A61' : '#FFE7AB'} size={25} />:
                              <MaterialCommunityIcons name={'star'} color={colorMode == 'light' ? '#2B3A61' : '#FFE7AB'} size={25} />}
              </Text>
            </TouchableOpacity>
            )  
        })}
      />
    </Stack.Navigator>
  );
}

const HomeStack = ({navigation}) => {
  const { colorMode } = useColorMode();
  const [toggle, setToggle] = useState(true);
    const toggleFunction = () => {
        setToggle(!toggle);
    };
  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerShown: false
    // }}
    >
      <Stack.Screen
        name="Home"
        component={AlbumScreen}
        options={{
          title: albumData.albumTitle,
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          },
          
          headerLeft: () => (
            <MaterialCommunityIcons 
              name={'menu'} 
              size={30} 
              color= {colorMode == 'light' ? '#2B3A61' : '#FFE7AB'}
              onPress={() => navigation.openDrawer()}
              style={{marginRight: 20}}
            />            
          ),  
          headerTitleStyle: {
            color: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          headerStyle: {
            backgroundColor: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? '#FFE7AB' : '#2B3A61',
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <Pressable>
                <MaterialCommunityIcons 
                name={'chevron-left'} 
                color={colorMode == 'light' ? '#2B3A61' : '#FFE7AB'} 
                size={30}
                style={{marginRight: 20}}
                onPress={ () => {navigation.goBack();}}
            />
            </Pressable>
            ),
            headerRight:() =>(
              <TouchableOpacity onPress={() => toggleFunction()}>
                          <Text>{toggle ? <MaterialCommunityIcons name={'heart-outline'} color={colorMode == 'light' ? 'black' : '#FFE7AB'} size={25} />:
                                          <MaterialCommunityIcons name={'heart'} color={'red'} size={25} />}
                          </Text>
                      </TouchableOpacity>
            )
        })}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  userStyle: {
    marginTop:5,
    marginBottom:20,
    // fontSize:20,
    // textAlign: 'center',
  },
  userfontStyle: {
    fontSize:20,
    color:"#DAA520",
  },
  loginStyle: {
    marginLeft:30,
  },
  setStyle: {
    //position:"absolute",
    marginLeft:30,
  },
  reviewStyle: {
    marginLeft:29,
  },
  bookStyle: {
    marginLeft:32,
  },
  imgStyle: {
    //position:"absolute",
    marginLeft:20,
    marginTop:52
  }
});
export default Navigation;