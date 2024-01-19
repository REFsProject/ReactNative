import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import homePage from "./pages/HomePage";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName= "home">
              <Stack.Screen name="home" component={homePage}/>
          </Stack.Navigator>
          <View style={styles.container}>
              <Text>Open up App.js to start working on your app! </Text>
              <StatusBar style="auto" />
          </View>
      </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
