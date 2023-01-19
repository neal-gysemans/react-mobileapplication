import { useState } from 'react';

import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Input, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

// Theme
import useThemedStyles from "../../styles/theme/useThemedStyles";
import { styles } from "../../styles/styles";

import '../../config/firebase';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

export default function SignUpScreen() {
// Styling (theme)
let style = useThemedStyles(styles);

  const [value, setValue] = useState({ email: '', password: '', error: '' })

  async function signUp() {
    if (value.email === '' || value.password === '') { setValue({ ...value, error: 'Email and password are mandatory.' })
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({ ...value, error: error.message, })
    }
  }

  return (
    <View style={style.body}>
      {!!value.error && <Text style={style.error}>{value.error}</Text>}

      <Input placeholder='Email' containerStyle={style.control} value={value.email} onChangeText={(text) => setValue({ ...value, email: text })} leftIcon={<Icon name='envelope' size={16} />} />
      <Input placeholder='Password' containerStyle={style.control} value={value.password} onChangeText={(text) => setValue({ ...value, password: text })} secureTextEntry={true} leftIcon={<Icon name='key' size={16} />} />
      <Pressable style={style.largeButton} onPress={signUp}><Text style={[style.textBG_COLOR, style.textLargeButton]}>Sign up</Text></Pressable>
    </View>
  );
}
