import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Icons
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Ionicons } from '@expo/vector-icons';

import {RecoilRoot} from 'recoil';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


import HomeScreen from './components/home'
import WorkersScreen from './components/workers'
import FarmsScreen from './components/farms'
import AccountScreen from './components/account'

import configData from "./config/hasura.json";

const Tab = createBottomTabNavigator();


const client = new ApolloClient({
  uri: configData.qlendpoint,
  headers: {
    'x-hasura-admin-secret': configData.qlkey
  },
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
      <RecoilRoot>
      <ApolloProvider client={client}>
        <NavigationContainer>
        <Tab.Navigator screenOptions={({route}) => ({
          tabBarIcon:({focused, color, size}) => {
            let iconName;
            switch (route.name){
              case "Home":
                iconName=focused ? 'home' : 'home';
                break;
              case "Workers":
                iconName=focused ? 'hammer' : 'hammer';
                break;
              case "Farms":
                iconName=focused ? 'tractor' : 'tractor';
                break;
              case "Account":
                iconName=focused ? 'account' : 'account';
                break;
            }
            return <Icon name={iconName} size={size} color={color}/>
            //return <Ionicons name={iconName} size={size} color={color}/>
          },
          initialRouteName:'Home',
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        >
          <Tab.Screen name="Home" component={HomeScreen}/>
          <Tab.Screen name="Workers" component={WorkersScreen}/>
          <Tab.Screen name="Farms" component={FarmsScreen}/>
          <Tab.Screen name="Account" component={AccountScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
      </ApolloProvider>
      </RecoilRoot>
    </IconComponentProvider>
  );
}
