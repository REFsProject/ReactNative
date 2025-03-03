import {SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import {Feather} from "@expo/vector-icons";
import {useState} from "react";

type MessageViewProps = {
    messages: string[];
    from: string;
    to: string;
}


export default function Route() {
    const { user } = useLocalSearchParams<{ user: string[] }>();
    const [messages, setMessages] = useState(props.messages);
    console.log(useLocalSearchParams(), user);

    return (
        <SafeAreaView style={{ flex: 1}}>
            <View style={{ paddingBottom: 20, borderBottomWidth: 1, borderBottomColor: "gray", top: 30}}>
                <Text style={{color: "white", alignSelf: "center"}}>{user[0]}</Text>
            </View>

            <View style={{flex: 1}}>

            </View>
            <View style={{height: 100, flexDirection: "row"}}>
                <TextInput style={{borderColor: "white", borderRadius: 2, borderCurve: "circular", flex: 1}}
                           placeholder={"Ecrivez quelque chose"}
                />
                <TouchableOpacity>
                    <Feather name="send" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

function sendMessage(message: string) {}