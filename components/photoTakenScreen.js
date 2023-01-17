import { Image, Text, TouchableOpacity, View } from "react-native";

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
            <Image source={{ uri: image }} style={style.img}/>
            <TouchableOpacity style={style.newPhotoButton} onPress={() => {newPhoto();}}>
                <Icon name="camera-iris" size={size} color="#2c3e50"/>
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
        // Do things with this image
        alert(image)
    }
    
}
