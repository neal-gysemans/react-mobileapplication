// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// Import screen
import TakePicture from './photoTakeScreen';
import TakenPicture from './photoTakenScreen';

export default function PhotoScreen(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Take picture" component={TakePicture} options={{unmountOnBlur: true}}/>
            <Stack.Screen name="Taken picture" component={TakenPicture}/>
        </Stack.Navigator>
    )
}