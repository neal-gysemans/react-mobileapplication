import { useState } from 'react';

import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Input, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

// Theme
import useThemedStyles from "../../styles/theme/useThemedStyles";
import { styles } from "../../styles/styles";

import '../../config/firebase';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

export default function SignInScreen({ navigation }) {
  // Styling (theme)
  let style = useThemedStyles(styles);

  const [value, setValue] = useState({ email: '', password: '', error: '' })

  async function signIn() {
    if (value.email === '' || value.password === '') { 
      setValue({ ...value, error: 'Email and password are mandatory.' })
      return;
    }

    try {
      // console.log(auth);
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({ ...value, error: error.message, })
    }
  }

  return (
    <View style={style.body}>
      {!!value.error && <Text style={style.error}>{value.error}</Text>}

      <Input placeholder='Email' style={[style.control, {margin: 0, padding: 0}]} value={value.email} onChangeText={(text) => setValue({ ...value, email: text })} leftIcon={<Icon name='envelope' style={style.text} size={16} />} />
      <Input placeholder='Password' style={style.control} value={value.password} onChangeText={(text) => setValue({ ...value, password: text })} secureTextEntry={true} leftIcon={<Icon name='key' style={style.text} size={16} />} />
      <Pressable style={style.largeButton} onPress={signIn}><Text style={[style.textBG_COLOR, style.textLargeButton]}>Sign in</Text></Pressable>
      <Text style={[{marginTop: 20}, style.text]}>Dont have an account yet?</Text>
      <Pressable style={style.largeButton} onPress={() => navigation.navigate('Sign Up')}><Text style={[style.textBG_COLOR, style.textLargeButton]}>Sign up</Text></Pressable>
    </View>
  );
}
