// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Icons
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {RecoilRoot} from 'recoil';
import { Ionicons } from '@expo/vector-icons';

// Import for screens
import HomeScreen from './components/home'
import WorkersScreen from './components/workers'
import FarmsScreen from './components/farms'
import AccountScreen from './components/account'
import PhotoScreen from './components/photoScreen'

// Provider
import ThemeProvider from './styles/theme/ThemeProvider';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import configData from './config/hasura.json';

import WorkerDetails from './components/workers/worker_details';
import FarmDetails from './components/farms/farm_details';
import FieldDetails from './components/fields/field_details';

const Tab = createBottomTabNavigator();


const client = new ApolloClient({
  uri: configData.qlendpoint,
  headers: {
    'x-hasura-admin-secret': configData.qlkey
  },
  cache: new InMemoryCache()
});

const WorkersStack = createNativeStackNavigator();

function WorkerStackScreen() {
  return(
    <WorkersStack.Navigator>
      <WorkersStack.Screen name="WorkersList" 
      component={WorkersScreen} 
      options={{ title: 'Employees' }}/>
      <WorkersStack.Screen name="WorkerDetails" 
      component={WorkerDetails} 
      options={{ title: 'Details' }}/>
    </WorkersStack.Navigator>
  );
}

const FarmStack = createNativeStackNavigator();

function FarmStackScreen() {
  return(
    <FarmStack.Navigator>
      <FarmStack.Screen name="FarmsList" 
      component={FarmsScreen} 
      options={{ title: 'Farms' }}/>
      <FarmStack.Screen name="FarmDetails" 
      component={FarmDetails} 
      options={{ title: 'Details' }}/>
      <FarmStack.Screen name="FieldDetails" 
      component={FieldDetails} 
      options={{ title: 'Field details' }}/>
    </FarmStack.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider>
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
      <RecoilRoot>
      <ApolloProvider client={client}>
      <NavigationContainer>
          <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon:({focused, color, size}) => {
              let iconName;
              switch (route.name){
                case "Home":
                  iconName = 'home';
                  break;
                case "Workers":
                  iconName = 'hammer';
                  break;
                case "Farms":
                  iconName = 'tractor';
                  break;
                  case "Account":
                    iconName = 'account';
                    break;
                  case "Camera":
                    iconName = 'camera';
                    break;
              }
              return <Icon name={iconName} size={size} color={color}/>
            },
            tabBarActiveTintColor: '#ff7a00',
            tabBarInactiveTintColor: '#ecf0f1',
            tabBarStyle: {
              backgroundColor: '#2c3e50',
            },
          })}>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Workers" component={WorkerStackScreen} options={{headerShown: false}}/>
            <Tab.Screen name="Farms" component={FarmStackScreen} options={{headerShown: false}}/>
            <Tab.Screen name="Account" component={AccountScreen}/>
            <Tab.Screen name="Camera" component={PhotoScreen}/>
          </Tab.Navigator>
        </NavigationContainer>
      </ApolloProvider>
      </RecoilRoot>
    </IconComponentProvider>
    </ThemeProvider>
  );
}
