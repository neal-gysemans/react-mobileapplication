import { Text, View, TouchableOpacity } from "react-native";

// Theme
import useThemedStyles from "../styles/theme/useThemedStyles";
import { styles } from "../styles/styles";

import { useEffect, useState } from "react";

// Import Camera
import { Camera, CameraType } from 'expo-camera';


// Icons
import { Icon } from "@react-native-material/core";

export default function TakePicScreen({ navigation }) {
    // Styling (theme)
    const style = useThemedStyles(styles);
    // Camera
    const [permission, setPermission] = Camera.useCameraPermissions();
    const [camera, setCamera] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(CameraType.back);

    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setPermission(cameraStatus.status === 'granted');
        })();
    }, []);
    
    const takePicture = async () => {
        if(camera){
            const data = await camera.takePictureAsync(null);
            setImage(data.uri);
        }
    };

    const size = 25;

    // Function to toggle the type of the camera
    const toggleCameraType = () => {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    return (
        <View style={style.body}>
            {permission
                ? permission.granted 
                    ? <Camera style={style.camera} type={type} ref={ref => setCamera(ref)} ratio={"16:9"}>
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
                    : <Text>You do not have the correct permissions to use the camera.</Text>
                : <Text>You do not have given any permissions</Text>
            }
            <Text>{image}</Text>
        </View>
    )
}
