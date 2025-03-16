import {
    Animated,
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet, DimensionValue, Image
} from 'react-native';
import {router, useLocalSearchParams} from 'expo-router';
import {Feather, Ionicons} from "@expo/vector-icons";
import React, {useEffect, useRef, useState} from "react";
import FlatList = Animated.FlatList;
import {Avatar, AvatarImage} from "~/lib/components/ui/avatar";
import Colors from "~/constants/Colors";

export type PrivateMessageProps = {
    data: {
        id: number;
        messages: {
            message: string[];
        }
        lastMessageAuthor?: string|null;
    }[]
}

const defaultAvatarUri: string = "https://picsum.photos/200/200?image=4";

export default function Route() {
    const params = useLocalSearchParams<{ user: string, avatarUri: string }>();
    const [messages, setMessages] = useState<PrivateMessageProps>(queryMessage);
    const [value, setValue] = useState<string>("");

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                              style={{ flex: 1, overflow: "hidden"}}>
            <View style={{padding: 10, borderBottomWidth: 1, borderBottomColor: "gray", top: 30, height: 60, flexDirection: "row",}}>

                <TouchableOpacity style={{top: 7}} onPress={() => router.back()}>
                    <Ionicons name={"chevron-back"} color={"white"} size={24}/>
                </TouchableOpacity>

                <View style={{justifyContent: "center"}}>
                    <View style={{flexDirection: "row" , justifyContent:"center"}}>
                        <Avatar alt={params.user[0]} style={{ marginRight: 5, height: 34, width:34}}>
                            <AvatarImage source={{ uri: defaultAvatarUri }}/>
                        </Avatar>
                        <Text style={{color: "white", fontSize: 16, fontWeight:"bold", alignSelf: "center"}}>{params.user}</Text>
                    </View>
                </View>

                <View style={{marginLeft: "auto", marginRight: 5, marginBottom:"auto" , paddingHorizontal: 2, top: 7 ,flexDirection: "row", borderRadius: 20, backgroundColor: "#1f1d1e"}}>
                    <Ionicons name="call-outline" size={28} color="white" style={{marginRight: 15}}/>
                    <Ionicons name="videocam-outline" size={28} color="white" />
                </View>

            </View>

            <View style={{flex: 1, top: 30}}>
                <MessageContainer messages={messages} user={params.user} />
            </View>

            <View className={"border-2"} style={{height: 60, flexDirection: "row", borderColor: Colors.white, borderRadius: 40, marginHorizontal: 5, bottom: 20}}>
                <TextInput className={"text-white"} style={{borderColor: "white", borderCurve: "circular", flex: 1, marginHorizontal: 20}}
                           placeholder={"Ecrivez quelque chose..."}
                           value={value}
                           cursorColor={Colors.white}
                           editable={true}
                           onChangeText={(value: string) => {
                               setValue(value);
                           }}
                />
                <TouchableOpacity style={{marginHorizontal: 40, marginTop: 15}}>
                    <Feather name="send" size={24} color="white" style={{alignSelf: "center"}}/>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const MessageContainer = ({messages, user}): React.JSX.Element =>
    {
        console.log(messages.messages);
        return (
            <View style={{ flex: 1 , top: 5}}>
                <FlatList data={messages.messages} renderItem={({item, index}) => {
                    let messageStyle = getStyleFromMessage(item, user[0]);

                    return (
                        <View style={{...messageStyle}}>
                            <Avatar alt={user[0]} style={{marginHorizontal: 10}}>
                                <AvatarImage source={{ uri: defaultAvatarUri }}/>
                            </Avatar>
                            <View style={{...styles.messageContainer}}>

                                <Text style={{fontFamily: 'Arial', fontSize: 16, color: '#333', lineHeight: 24}}> {item.message} </Text>
                            </View>
                        </View>

                    )} }
                />
            </View>
        )
    }

function getStyleFromMessage(data: PrivateMessageProps["data"][0], user: string)
{
    let {marginRight, marginLeft, side} = data.from === user ? {marginRight: 0, marginLeft: "auto", side: "right"} : {marginRight: "auto", marginLeft: 0, side: "left"} as {
        marginRight: DimensionValue,
        marginLeft: DimensionValue,
        side: "left" | "right";
    };
    let margin = data.lastMessageAuthor === user ? 30 : 2;

    return {marginRight, marginLeft, marginBottom: margin, flexDirection: side === "left" ? "row" : "row-reverse"};
}

function queryMessage(): PrivateMessageProps
{
    return require("data/messages.json");
}

function sendMessage(message: PrivateMessageProps) {}

const styles = StyleSheet.create({
    messageContainer: {
        maxWidth: 400,
        flexDirection: "row",
        padding: 10,
        marginHorizontal: 'auto',
        borderRadius: 20,
        backgroundColor: '#e9eff5',
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
    }
});