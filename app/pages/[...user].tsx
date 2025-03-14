import {
    Animated,
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet, DimensionValue
} from 'react-native';
import {router, useLocalSearchParams} from 'expo-router';
import {Feather, Ionicons} from "@expo/vector-icons";
import React, {useEffect, useRef, useState} from "react";
import FlatList = Animated.FlatList;
import {Avatar, AvatarImage} from "~/lib/components/ui/avatar";
import Colors from "~/constants/Colors";

export type MessageProps = {
    messages: {
        from: string;
        to: string;
        message: string;
        lastMessageAuthor?: string|null;
    }[]
    internalId: number;
}

const defaultAvatarUri: string = "https://picsum.photos/200/200?image=4";

export default function Route() {
    const params = useLocalSearchParams<{ user: string, avatarUri: string }>();
    const [messages, setMessages] = useState<MessageProps>(queryMessage);
    const valueRef = useRef<string>("");

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                              style={{ flex: 1, overflow: "hidden"}}>
            <View style={{padding: 20, borderBottomWidth: 1, borderBottomColor: "gray", top: 30, height: 80,flexDirection: "row"}}>

                <TouchableOpacity style={{}} onPress={() => router.back()}>
                    <Ionicons name={"chevron-back"} color={"white"} size={24}/>
                </TouchableOpacity>

                <View style={{justifyContent: "center"}}>
                    <View style={{flex: 1, flexDirection: "row" , justifyContent:"center"}}>
                        <Avatar alt={params.user[0]} style={{ marginRight: 5, height: 34, width:34}}>
                            <AvatarImage source={{ uri: defaultAvatarUri }}/>
                        </Avatar>

                        <Text style={{color: "white", fontSize: 16, fontWeight:"bold", alignSelf: "center"}}>{params.user}</Text>
                    </View>
                </View>

            </View>

            <View style={{flex: 1, top: 30}}>
                <MessageContainer messages={messages} user={params.user} />
            </View>

            <View className={"border-2"} style={{height: 70, flexDirection: "row", borderColor: Colors.white, borderRadius: 40, marginHorizontal: 5, bottom: 20}}>
                <TextInput className={"text-white"} style={{borderColor: "white", borderCurve: "circular", flex: 1, marginHorizontal: 20}}
                           placeholder={"Ecrivez quelque chose..."}
                           value={valueRef.current}
                           cursorColor={Colors.white}
                           onChangeText={(value: string) => valueRef.current = value}
                />
                <TouchableOpacity style={{marginHorizontal: 40, marginVertical: 20}}>
                    <Feather name="send" size={24} color="white" style={{alignSelf: "center"}}/>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const MessageContainer = ({messages, user}): React.JSX.Element =>
    {
        return (
            <View style={{ flex: 1 , top: 5}}>
                <FlatList data={messages.messages} renderItem={({item, index}) => {
                    return (
                        <View style={{...getStyleFromMessage(item, user[0]),  ...styles.messageContainer}}>
                            <Text style={{fontFamily: 'Arial', fontSize: 16, color: '#333', lineHeight: 24}}> {item.message} </Text>
                        </View>
                    )}}
                />
            </View>
        )
    }

function getStyleFromMessage(data: MessageProps["messages"][0], user: string)
{
    let {marginRight, marginLeft} = data.from === user ? {marginRight: 0, marginLeft: "auto"} : {marginRight: "auto", marginLeft: 0} as {
        marginRight: DimensionValue,
        marginLeft: DimensionValue
    };
    let margin = data.lastMessageAuthor === user ? 30 : 2;
    return {marginRight, marginLeft, marginBottom: margin};
}

function queryMessage(): MessageProps
{
    return {
        messages: [
            {
                from: "AliceDubois",
                to: "Bob",
                message: "Salut Bob, ça va ?",
                lastMessageAuthor: null
            },
            {
                from: "AliceDubois",
                to: "Bob",
                message: "Salut Bob, ça va ?",
                lastMessageAuthor: "AliceDubois",
            },
            {
                from: "Bob",
                to: "AliceDubois",
                message: "Oui, ça va bien, merci ! Et toi ?",
                lastMessageAuthor: "AliceDubois",
            },
            {
                from: "AliceDubois",
                to: "Bob",
                message: "Tout va bien aussi, merci ! On se voit ce soir ?",
                lastMessageAuthor: "Bob"
            }
        ],
        internalId: 12345
    }
}

function sendMessage(message: MessageProps) {}

const styles = StyleSheet.create({
    messageContainer: {
        maxWidth: 400,
        padding: 10,
        marginHorizontal: 'auto',
        borderRadius: 20,
        backgroundColor: '#e9eff5',
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2
    }
});