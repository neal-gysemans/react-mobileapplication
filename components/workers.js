import { Text, View } from "react-native";

// Theme
import useThemedStyles from "../styles/theme/useThemedStyles";
import { styles } from "../styles/styles";

export default function WorkersScreen() {
    // Styling (theme)
    const style = useThemedStyles(styles);
    return (
        <View style={style.body}>
            <Text style={style.text}>Workers</Text>
        </View>
    )
}