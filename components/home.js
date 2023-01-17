import { Text, View, TouchableOpacity } from "react-native";

// Theme
import useThemedStyles from "../styles/theme/useThemedStyles";
import { styles } from "../styles/styles";

// Icons
import { Icon } from "@react-native-material/core";

export default function HomeScreen({ navigation }) {
    // Styling (theme)
    const style = useThemedStyles(styles);

    const size = 40;
    return (
        <View style={style.body}>
            <TouchableOpacity style={style.homeScreenCameraButton} onPress={() => {navigation.navigate('Camera')}}>
                <Icon name="camera-iris" size={size} style={style.cameraButtonText}/>
            </TouchableOpacity>
        </View>
    );
}