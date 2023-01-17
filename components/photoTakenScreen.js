import { Text, TouchableOpacity, View } from "react-native";

// Theme
import useThemedStyles from "../styles/theme/useThemedStyles";
import { styles } from "../styles/styles";

// Icons
import { Icon } from "@react-native-material/core";

export default function TakePhotoScreen({ route, navigation }) {
    // Styling (theme)
    const style = useThemedStyles(styles);

    // Image (link to local image)
    const { image } = route.params;

    // Size of icon
    const size = 40;

    return (
        <View style={style.body}>
            <TouchableOpacity style={style.largeCameraButton} onPress={() => {newPhoto();}}>
                <Icon name="camera-iris" size={size} style={style.cameraButtonText}/>
            </TouchableOpacity>
            <Text style={style.text}>{image}</Text>
        </View>
    )

    function newPhoto() {
        navigation.navigate("Take picture");
    }
    
}
