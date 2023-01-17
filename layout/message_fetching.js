import { Text, StyleSheet, View  } from 'react-native';

// Theme
import useThemedStyles from "../styles/theme/useThemedStyles";
import { styles } from "../styles/styles";

export default function Fetching() {
  // Styling (theme)
  let style = useThemedStyles(styles);
  return (
    <View style={style.body}>
      <Text style={[style.loading, style.text]}>Fetching data...</Text>
    </View>
  );
};