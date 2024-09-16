import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors.js";
import { DimensionValue } from "react-native";

const Input = (placeHolder, value, callback) =>
  <TextInput keyboardAppearance={'dark'} autoCapitalize={'none'} keyboardType={'email-address'} onChangeText={callback} style={styles.input} placeholderTextColor={'gray'} placeholder={placeHolder}
                                                  value={value} />;

export default function Login(){
  const [user, onChangeUser] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  return <View style={styles.container}>
    <Text style={styles.title}>Connexion</Text>
    {Input("E-mail ou Numéro de téléphone", user, onChangeUser)}
    {Input("Mot de passe", password, onChangePassword)}
    <Text style={styles.forgot}>Mot de passe oublié ?</Text>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    marginTop: "50%"
  },
  title: {
    color: Colors.white,
    textTransform: 'uppercase',
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
    letterSpacing: 3,
    marginBottom: "5%",
  },
  input: {
    color: Colors.white,
    borderWidth: 1,
    borderRadius: 12.5,
    borderColor: Colors.white,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    //shadowColor: Colors.white,
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: {width: 1, height: 1},
    elevation: 2,
  },
  forgot: {
    textDecorationLine: "underline",
    textAlign: 'center',
    color: 'gray',

  }
});
