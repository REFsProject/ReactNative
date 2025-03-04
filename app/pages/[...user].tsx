import {
    Animated,
    Dimensions,
    Keyboard,
    KeyboardEvent,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import {Feather} from "@expo/vector-icons";
import React, {Fragment, useEffect, useState} from "react";
import FlatList = Animated.FlatList;
import {Avatar, AvatarImage} from "~/lib/components/ui/avatar";
import Colors from "~/constants/Colors";

type MessageViewProps = {
    messages: string[];
    from: string;
    to: string;
}

export type MessageProps = {
    messages: {
        from: string;
        to: string;
        message: string;
    }[]
    internalId: number;
}


export default function Route() {
    const params = useLocalSearchParams<{ user: string, avatarUri: string }>();
    const [messages, setMessages] = useState<MessageProps>(queryMessage);
    const [value, setValue] = useState<string>("");
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [keyboardHeight, setKeyboardHeight] = useState<number>(0);

    //TODO: animation / mouvement plus rapide
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            (event: KeyboardEvent) => {
                setKeyboardVisible(true);
                setKeyboardHeight(event.endCoordinates.height);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
                setKeyboardHeight(0);
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    console.log(params);
    return (
        <SafeAreaView style={{ flex: 1, overflow: "hidden"}}>
            <View style={{paddingBottom: 20, borderBottomWidth: 1, borderBottomColor: "gray", top: 30}}>
                <Avatar alt={params.user}>
                    <AvatarImage source={{ uri: params.avatarUri }} />
                </Avatar>

                <Text style={{color: "white", alignSelf: "center"}}>{params.user}</Text>
            </View>

            <View style={{flex: 1}}>
                <MessageContainer messages={messages} user={params.user} />
            </View>
            <View className={"border-2"} style={{height: 70, flexDirection: "row", borderColor: Colors.white, borderRadius: 40, marginHorizontal: 5, bottom: keyboardHeight === 0 ? 0 : keyboardHeight }}>
                <TextInput className={"text-white"} style={{borderColor: "white", borderCurve: "circular", flex: 1, marginHorizontal: 20}}
                           placeholder={"Ecrivez quelque chose..."}
                           value={value}
                           cursorColor={Colors.white}
                           onChangeText={(value: string) => setValue(value)}
                />
                <TouchableOpacity style={{marginHorizontal: 40, marginVertical: 20}}>
                    <Feather name="send" size={24} color="white" style={{alignSelf: "center"}}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const MessageContainer = ({messages, user}): React.JSX.Element =>
    {
        return (
            <View style={{ flex: 1 }}>
                <FlatList data={messages.messages} renderItem={({item, index}) => {
                    console.log(item)
                    return (
                        <View style={{alignSelf: item.from === user ? "flex-end" : "flex-end", backgroundColor: "white", height: 60, paddingVertical: 60}}>
                            <Text className={"text-white"}> {item.message} </Text>
                        </View>
                    )}}
                />
            </View>
        )
    }

function queryMessage(): MessageProps
{
    return {
        messages: [
            {
                from: "Alice",
                to: "Bob",
                message: "Salut Bob, ça va ?"
            },
            {
                from: "Bob",
                to: "Alice",
                message: "Oui, ça va bien, merci ! Et toi ?"
            },
            {
                from: "Alice",
                to: "Bob",
                message: "Tout va bien aussi, merci ! On se voit ce soir ?"
            }
        ],
        internalId: 12345
    }
}

function sendMessage(message: MessageProps) {}