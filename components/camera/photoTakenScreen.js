import { Image, Text, TouchableOpacity, View } from "react-native";

// Theme
import useThemedStyles from "../../styles/theme/useThemedStyles";
import { styles } from "../../styles/styles";

// Icons
import { Icon } from "@react-native-material/core";

// Screens
import Fetching from "../../layout/message_fetching";

// Use effect
import { useEffect, useState } from "react";

// Geolocation
import * as Location from 'expo-location';

export default function TakePhotoScreen({ route, navigation }) {
    // Styling (theme)
    const style = useThemedStyles(styles);

    // Image (link to local image)
    const { image } = route.params;

    // Geolocation
    const [status, requestPermission] = Location.useForegroundPermissions();
    const [location, setLocation] = useState(null);

    // Size of icon
    const size = 25;

    requestPermission();

    useEffect( () => {
        (async () => {
            const locationData = await Location.getCurrentPositionAsync({})
            setLocation(locationData.coords);
        })();
        
    }, [])

    if(!location) return <Fetching message="Looking for location..."/>

    return (
        <View style={style.body}>
            <Image source={{ uri: image }} style={style.img}/>
            <TouchableOpacity style={style.newPhotoButton} onPress={() => {newPhoto();}}>
                <Icon name="camera-iris" size={size} style={style.textBG_COLOR}/>
            </TouchableOpacity>
            <TouchableOpacity style={style.usePhotoButton} onPress={() => {usePhoto();}}>
                <Text style={[style.textBG_COLOR, {fontSize: 30}]}>Use photo</Text>
            </TouchableOpacity>
        </View>
    )

    function newPhoto() {
        navigation.navigate("Take picture");
    }

    function usePhoto() {
        let locationString = "x: " + location.longitude + "\n" + "y: " + location.latitude;
        // Do things with this image
        alert(locationString)
    }
    
}
