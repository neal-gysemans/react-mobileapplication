import { Text, View, Switch, Button, Pressable } from "react-native";

import { getAuth, signOut } from 'firebase/auth';

// Theme
import useThemedStyles from "../styles/theme/useThemedStyles";
import { styles } from "../styles/styles";

// Toggle for theme
import useTheme from "../styles/theme/useTheme";

import { useAuthentication } from "../hooks/use_authentication";

const auth = getAuth();

export default function AccountScreen() {
    // Styling (theme)
    let style = useThemedStyles(styles);
    const theme = useTheme();

    const {user} = useAuthentication();
    console.log('user: ', user)

    return (
        <View style={style.body}>
            <Text style={style.text}>{user?.email}</Text>
            <Text style={style.text}>{user?.uid}</Text>
            <Switch onValueChange={theme.toggleTheme} value={theme.isLightTheme} />
            <Pressable style={style.largeButton} onPress={() => signOut(auth)}>
                <Text style={style.textLargeButton}>Sign Out</Text>
            </Pressable>
        </View>
    )
}