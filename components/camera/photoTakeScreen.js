import { Text, View, TouchableOpacity } from "react-native";

// Theme
import useThemedStyles from "../../styles/theme/useThemedStyles";
import { styles } from "../../styles/styles";

import { useEffect, useState } from "react";

// Geolocation
import * as Location from 'expo-location';

// Import Camera
import { Camera, CameraType, FlashMode } from 'expo-camera';

// Camera closed when not focus
import { useIsFocused } from "@react-navigation/core";

// Icons
import { Icon } from "@react-native-material/core";

// Fetch screen
import Fetching from '../../layout/message_fetching'

export default function TakePhotoScreen({ navigation }) {
    // Styling (theme)
    const style = useThemedStyles(styles);

    // Geolocation
    const [status, requestPermission] = Location.useForegroundPermissions();
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    // Camera
    const [permission, setPermission] = Camera.useCameraPermissions();
    const [camera, setCamera] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(CameraType.back);

    useEffect(() => {
        (async () => {
            requestPermission();
            
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setPermission(cameraStatus.status === 'granted');

            const locationData = await Location.getCurrentPositionAsync({});
            setLocation(locationData);
        })();
    }, []);
    
    const takePicture = async () => {
        if(camera){
            const data = await camera.takePictureAsync(null);
            setImage(data.uri);
            // console.log(location);
            navigation.navigate('Taken picture', {image: data.uri, locationX: location.coords.longitude, locationY: location.coords.latitude})
        }
    };

    const size = 25;

    // Function to toggle the type of the camera
    const toggleCameraType = () => {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    // Focused?
    const isFocused = useIsFocused();

    if(!location) return <Fetching message="Camera is getting ready..."/>

    return (
        <View style={style.body}>
            {isFocused && permission
                ? permission.granted 
                    ? <Camera style={style.camera} type={type} ref={ref => setCamera(ref)} ratio={'16:9'}>
                        <View style={style.cameraFlipButtonContainer}>
                            <TouchableOpacity style={style.cameraButton} onPress={toggleCameraType}>
                                <Icon name="camera-flip" size={size} style={style.cameraButtonText}/>
                            </TouchableOpacity>
                        </View>
                        <View style={style.takePictureButtonContainer}>
                            <TouchableOpacity style={style.cameraButton} onPress={() => {takePicture()}}>
                                <Icon name="camera" size={size} style={style.cameraButtonText}/>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                    : <Text style={style.text}>You do not have the correct permissions to use the camera.</Text>
                : <Text style={style.text}>You do not have given any permissions</Text>
            }
        </View>
    )
}
