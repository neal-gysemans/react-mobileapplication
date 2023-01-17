import { Text, Pressable } from 'react-native';
import { Icon } from 'react-native-elements';

//theme
import useThemedStyles from "../../styles/theme/useThemedStyles";
import { styles } from "../../styles/styles";


export default function FarmItem({ item, onPress }) {
  const style = useThemedStyles(styles);

  console.log('farm: ', item);
  return (
    <Pressable style={[style.list]} onPress={() => onPress(item)}>
      <Text style={[style.circle, style.name]}>
        <Icon name='home'/></Text>
      <Text style={style.listItem}>
        {item.name}</Text>
    </Pressable>
  );
};