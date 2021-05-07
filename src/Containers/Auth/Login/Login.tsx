import React, {useRef, useState} from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import styles from './Style';
import {TextField} from 'react-native-material-textfield';
import Colors from '../../../Theme/Colors';
import Images from '../../../Theme/Images';
import {emailRegex, normalize} from '../../../Utils/Utility';
import alert from '../../../Utils/Alerts';
import {navigateToMain} from '../../../Navigation/AppNavigator';

const Login = () => {
  const [email, setEmail] = useState('reactnative@imaginato.com');
  const [password, setPassword] = useState('imaginato@123');
  const passRef = useRef<TextField | null>(null);
  const [secureText, setSetSecureText] = useState(true);

  const _onSecureText = (): void => {
    setSetSecureText(!secureText);
  };

  const onPressLogin = () => {
    if (email.length <= 0) {
      alert.show('please enter email');
      return;
    }
    if (!emailRegex.test(email)) {
      alert.show('please enter valid email');
      return;
    }
    if (password.length <= 0) {
      alert.show('please enter password');
      return;
    }

    if (email === 'reactnative@imaginato.com' && password === 'imaginato@123') {
      navigateToMain();
    } else {
      alert.show('Email and password are incorrect.');
    }
  };

  return (
    <View style={styles.container}>
      <TextField
        label={'Email Address'}
        returnKeyType="next"
        keyboardType="email-address"
        onSubmitEditing={() => {
          passRef.current?.focus();
        }}
        blurOnSubmit={false}
        value={email}
        onChangeText={val => setEmail(val.replace(/\s/g, ''))}
        containerStyle={styles.input}
        labelTextStyle={styles.hintText}
        style={styles.inputText}
        baseColor={Colors.textPlaceholder}
        tintColor={Colors.primary}
      />
      <TextField
        ref={passRef}
        label={'Password'}
        secureTextEntry={secureText}
        renderRightAccessory={() => (
          <Pressable onPress={_onSecureText}>
            {secureText ? (
              <Image
                source={Images.PasswordVisible}
                style={{width: normalize(20), height: normalize(20)}}
              />
            ) : (
              <Image
                source={Images.PasswordHide}
                style={{width: normalize(20), height: normalize(20)}}
              />
            )}
          </Pressable>
        )}
        value={password}
        onChangeText={val => setPassword(val.replace(/\s/g, ''))}
        containerStyle={styles.input}
        labelTextStyle={styles.hintText}
        style={styles.inputText}
        baseColor={Colors.textPlaceholder}
        tintColor={Colors.primary}
      />
      <Pressable onPress={() => onPressLogin()}>
        <View style={styles.buttonBackground}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Login;
