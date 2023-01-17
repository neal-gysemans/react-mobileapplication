import { Text, View } from "react-native";
import useThemedStyles from "../styles/theme/useThemedStyles";
import { styles } from "../styles/styles";

export default function LoginScreen() {
    // Styling (theme)
    const style = useThemedStyles(styles);
    return (
        <View style={style.body}>
            <Text style={style.text}>Login</Text>
        </View>
    )
}