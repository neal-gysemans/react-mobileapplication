import { Text, Pressable } from 'react-native';

//theme
import useThemedStyles from "../../styles/theme/useThemedStyles";
import { styles } from "../../styles/styles";


export default function WorkerItem({ item, onPress }) {
  const style = useThemedStyles(styles);

    //console.log('worker: ', item);
  return (
    <Pressable style={style.list} onPress={() => onPress(item.worker)}>
      <Text style={style.circle}>
        {item.worker.name.charAt(0).toUpperCase()}</Text>
      <Text style={style.listItem}>
        {item.worker.name}</Text>
    </Pressable>
  );
};