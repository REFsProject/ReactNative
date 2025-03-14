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
                title: "Profile",
                tabBarIcon: ({focused, color}) => (
                    <MaterialCommunityIcons name="account-circle-outline" size={24} color="white" />
                )
            }}/>

            <Tabs.Screen name={"Main"} options={{title: "Main", headerShown: false,
                tabBarIcon: ({focused, color}) => (
                    <Feather name="home" size={24} color="white" />
                )}} />

            <Tabs.Screen name={"Message"} options={{title: "Message", headerShown: false,
                tabBarIcon: ({focused, color}) => (
                    <AntDesign name="message1" size={24} color="white" />
                )}}/>

            <Tabs.Screen name={"Reward"} options={{title: "Reward", tabBarIcon: ({focused, color}) => (
                    <Octicons name="gift" size={24} color="white" />
                )}}/>
        </Tabs>
    )
}