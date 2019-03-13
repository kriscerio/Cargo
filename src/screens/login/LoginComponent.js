import React, { Component } from "react";
import { Text, View } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

const LoginComponent = () => {
  return (
    <View style={styles.containerStyle}>
      <Input
        placeholder="Username"
        leftIcon={<Icon name="user" size={24} color="black" />}
      />
      <Input
        placeholder="Password"
        leftIcon={<Icon name="lock" size={24} color="black" />}
      />
      <Button title="Login" type="solid" />
    </View>
  );
};

export default LoginComponent;
