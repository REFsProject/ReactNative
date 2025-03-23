import {
    Animated,
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet, DimensionValue, Image, Dimensions, ViewStyle
} from 'react-native';
import {router, useLocalSearchParams} from 'expo-router';
import {Feather, Ionicons} from "@expo/vector-icons";
import React, {useEffect, useRef, useState} from "react";
import FlatList = Animated.FlatList;
import {Avatar, AvatarImage} from "~/lib/components/ui/avatar";
import Colors from "~/constants/Colors";
import UserHandler, {useActualUser} from "~/handler/UserHandler";
import {useHeaderHeight} from "react-native-screens/native-stack";
import {StyleProps} from "react-native-reanimated";

export type PrivateMessageProps = {
        id: number;
        messages: MessageProps[];
        lastMessageAuthor?: string|null;
}

export type MessageProps = {
    from: {
        id: number;
        username: string;
    }
    to: {
        id: number;
        username: string;
    }
    timestamp: number;
    content: string;
}

const { height, width } = Dimensions.get('window');


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

            <View className={"border-2"} style={{height: 60, flexDirection: "row", borderColor: Colors.white, borderRadius: 40, marginHorizontal: 5, bottom: 20, backgroundColor: "black", maxWidth: 500}}>
                <TextInput className={"text-white"} style={{borderColor: "white", borderCurve: "circular", flex: 1, marginHorizontal: 10}}
                           placeholder={"Ecrivez quelque chose..."}
                           value={value}
                           cursorColor={Colors.white}
                           editable={true}
                           onChangeText={(value: string) => {
                               setValue(value);
                           }}
                />
                <TouchableOpacity style={{marginRight: 40, marginTop: 15}}>
                    <Feather name="send" size={24} color="white" style={{alignSelf: "center"}}/>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const MessageContainer = ({messages, user}): React.JSX.Element =>
    {
        let mainUser = useActualUser();
        let userId = mainUser.getIdFromUsername(user[0]);
        let message = mainUser.getMessageWith(mainUser.getIdFromUsername(user[0]), messages);
        return (
            <View style={{ flex: 1 , top: 5}}>
                <FlatList data={message["messages"]} renderItem={({item, index}) =>
                {
                    let lastMessage = mainUser.getLastMessage(message, item);
                    let firstMessage = lastMessage === item;
                    let sameAuthor = firstMessage ? false : lastMessage["from"]["id"] === item["from"]["id"];
                    console.log(lastMessage["from"], item["from"], sameAuthor, firstMessage)
                    let messageStyle = getStyleFromMessage(item, useActualUser(), sameAuthor, firstMessage);
                    return (
                        <View >
                            <View style={{
                                flexDirection: "column",
                                marginRight: messageStyle.marginRight === 0 ? messageStyle.marginRight + 12 :messageStyle.marginRight,
                                marginLeft: messageStyle.marginLeft,
                                top: 25 }}
                            >
                                {
                                    // Je sais pas si sa rends bien en vrai
                                    //sameAuthor ? null : <Text style={{color: "gray", top: 0, fontSize: 15}}> {item["from"]["username"]}</Text>
                                }
                            </View>

                            <View style={{...messageStyle}}>
                                <View>
                                    {
                                        sameAuthor ?  null :
                                            <Avatar alt={user[0]} style={{marginHorizontal: 10, height: 35, width: 35 }}>
                                                <AvatarImage source={{ uri: defaultAvatarUri }} />
                                            </Avatar>
                                    }
                                </View>
                                <View style={{...styles.messageContainer, left: sameAuthor ? 55 : 0}}>
                                    <Text style={{fontFamily: 'Arial', fontSize: 16, color: 'white', lineHeight: 24, }}> {item.content} </Text>
                                </View>
                            </View>
                        </View>

                    )
                }}/>
            </View>
        )
    }

function getStyleFromMessage(message: MessageProps, user: UserHandler, sameAuthor: boolean, firstMessage: boolean): StyleProps
{
    let id = message["from"]["id"];
    let {marginRight, marginLeft, side} = id === user.actualUser.internalId ? {marginRight: 0, marginLeft: "auto", side: "right"} : {marginRight: "auto", marginLeft: 0, side: "left"} as {
        marginRight: DimensionValue,
        marginLeft: DimensionValue,
        side: "left" | "right";
    };
    let margin = sameAuthor ? 2 : 30;
    if(firstMessage) margin = 30;

    return {marginRight, marginLeft, marginTop: margin, flexDirection: side === "left" ? "row" : "row-reverse"};
}

function queryMessage(): PrivateMessageProps
{
    return require("data/messages.json")["data"];
}

function sendMessage(message: PrivateMessageProps) {}

const styles = StyleSheet.create({
    messageContainer: {
        maxWidth: width - 70,
        flexDirection: "row",
        padding: 10,
        marginHorizontal: 'auto',
        borderRadius: 20,
        backgroundColor: '#1a1a1a',
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
    }
});