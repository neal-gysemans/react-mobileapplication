import { Text, View, Switch } from "react-native";

// Theme
import useThemedStyles from "../styles/theme/useThemedStyles";
import { styles } from "../styles/styles";
// Toggle for theme
import useTheme from "../styles/theme/useTheme";

// Authentication (get user)
import { useAuthentication } from "../hooks/use_authentication";

export default function AccountScreen() {
    // Styling (theme)
    const theme = useTheme();
    let style = useThemedStyles(styles);

    const { user } = useAuthentication();

    return (
        <View style={style.body}>
            <Text style={style.text}>{user?.firstname} {user?.lastname}</Text>
            <Text style={style.text}>{user?.country} - {user?.city}</Text>
            <Switch onValueChange={theme.toggleTheme} value={theme.isLightTheme} />
        </View>
    )
}