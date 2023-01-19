import { Text } from "react-native";

// Theme
import useThemedStyles from "../../styles/theme/useThemedStyles";
import { styles } from "../../styles/styles";

export default function Stat_interesting(props){
    // Styling (theme)
    const style = useThemedStyles(styles);
    return (
      <>
          <Text style={style.text}>{props.label}</Text>
          <Text style={[style.largeButton, style.largeButtonText]}>{props.data}</Text>
      </>
      )
}