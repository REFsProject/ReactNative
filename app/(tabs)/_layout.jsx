import {Slot, Tabs} from "expo-router";
import "~/global.css";
import {AntDesign, Feather, MaterialCommunityIcons, Octicons} from "@expo/vector-icons";


export default function Layout()
{
    return(
        <Tabs options={{
            tabBarStyle: {
                borderRadius: 2,
                opacity: 0.5
            }
        }}>
            <Tabs.Screen name={"Profile"} options={{
                title: "",
                tabBarIcon: ({focused, color}) => (
                    <MaterialCommunityIcons name="account-circle-outline" size={24} color={focused ? "orange" : "white"} />
                )
            }}/>

            <Tabs.Screen name={"Main"} options={{title: "", headerShown: false,
                tabBarIcon: ({focused, color}) => (
                    <Feather name="home" size={24} color={focused ? "orange" : "white"} />
                )}} />

            <Tabs.Screen name={"Message"} options={{title: "", headerShown: false,
                tabBarIcon: ({focused, color}) => (
                    <AntDesign name="message1" size={24} color={focused ? "orange" : "white"}/>
                )}}/>

            <Tabs.Screen name={"Reward"} options={{title: "", tabBarIcon: ({focused, color}) => (
                    <Octicons name="gift" size={24} color={focused ? "orange" : "white"} />
                )}}/>
        </Tabs>
    )
}