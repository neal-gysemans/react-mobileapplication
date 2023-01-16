import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon:({focused, color, size}) => {
          let iconName;
          switch (route.name){
            case "Home":
              iconName=focused ? 'home-sharp' : 'home-outline';
              break;
            case "Countries":
              iconName=focused ? 'flag-sharp' : 'flag-outline';
              break;
            case "Continents":
              iconName=focused ? 'earth' : 'earth-outline';
              break;
            case "Search":
              iconName=focused ? 'search-circle' : 'search-circle-outline';
              break;
          }
          return <Ionicons name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'black',
      })}
      >
        <Tab.Screen name="" component={}/>
        <Tab.Screen name="" component={}/>
        <Tab.Screen name="" component={}/>
        <Tab.Screen name="" component={}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
