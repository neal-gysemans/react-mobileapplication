import { useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';
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

  const [value, setValue] = useState({
    email: '',
    password: '',
    error: ''
  })

  async function signIn() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      })
      return;
    }

    try {
      console.log(auth);
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      })
    }
  }

  return (
    <View style={style.body}>
      {!!value.error && <Text style={style.error}>{value.error}</Text>}

      <Input
        placeholder='Email'
        containerStyle={style.control}
        value={value.email}
        onChangeText={(text) => setValue({ ...value, email: text })}
        leftIcon={<Icon
          name='envelope'
          size={16}
        />}
      />
      <Input
        placeholder='Password'
        containerStyle={style.control}
        value={value.password}
        onChangeText={(text) => setValue({ ...value, password: text })}
        secureTextEntry={true}
        leftIcon={<Icon
          name='key'
          size={16}
        />}
      />
      <Button title="Sign in" buttonStyle={style.authenticationButton} onPress={signIn} />
      <Text style={{marginTop: 20}}>Dont have an account yet?</Text>
      <Button title="Sign up" buttonStyle={style.authenticationButton} onPress={() => navigation.navigate('Sign Up')} />
    </View>
  );
}
