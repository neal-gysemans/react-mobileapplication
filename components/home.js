import { Text, View, TouchableOpacity } from "react-native";

// Import Camera
import { Camera, CameraType, requestCameraPermissionsAsync } from 'expo-camera';

// Theme
import useThemedStyles from "../styles/theme/useThemedStyles";
import { styles } from "../styles/styles";
import { useState } from "react";

export default function HomeScreen() {
    // Styling (theme)
    const style = useThemedStyles(styles);
    // Camera
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    
    if(!permission || !permission.granted){
        requestCameraPermissionsAsync;
    }

    // Function to toggle the type of the camera
    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    return (
        <View style={style.body}>
            <Text style={style.text}>Camera</Text>
            {/* Camera */}
            {permission
                ? permission.granted 
                    ? <Camera style={style.camera} type={type}>
                          <View style={style.cameraButtonContainer}>
                          <TouchableOpacity style={style.cameraButton} onPress={toggleCameraType}>
                              <Text style={style.cameraButtonText}>Flip Camera</Text>               
                          </TouchableOpacity>
                          </View>
                      </Camera>
                    : <Text>Permissions not granted</Text>
                : <Text>No permissions</Text>
            }
            
        </View>
    );
}