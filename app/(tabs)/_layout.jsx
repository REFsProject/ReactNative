import {Slot, Tabs} from "expo-router";
import "~/global.css";
import {Feather} from "@expo/vector-icons";


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
                    <Feather name="home" size={24} color="black" />
                )
            }}/>

            <Tabs.Screen name={"Main"} options={{title: "Main", headerShown: false}} />
            <Tabs.Screen name={"Message"} options={{title: "Message", headerShown: false}}/>
            <Tabs.Screen name={"Reward"} options={{title: "Reward"}}/>
        </Tabs>
    )
}