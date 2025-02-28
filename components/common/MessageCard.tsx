import React from "react";
import {View, Text, Button, TouchableOpacity} from "react-native";
import {Avatar, AvatarFallback, AvatarImage} from "~/lib/components/ui/avatar";
import {AntDesign} from "@expo/vector-icons";
import {sliceString} from "~/utils/Utils";


export type MessageCardProps =
    {
        username: string,
        profilePicture: {
            uri: string
        },
        lastMessage: string,
    }

const maxChar = 50;

function supressConversation(index: number)
{

}

export default function MessageCard(props: MessageCardProps): React.JSX.Element
{
    return (
        <View>
            <Text className={'absolute font-bold text-white'} style={{left: 65, top: 10}}>{props.username}</Text>
            <View className={"flex flex-row"} style={{paddingHorizontal: 10, paddingVertical: 10, marginVertical: 10}}>
                <Avatar alt={props.username} style={{marginRight: 20}}>
                    <AvatarImage source={{uri: "https://static.vecteezy.com/system/resources/previews/024/183/502/non_2x/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg"}}/>
                </Avatar>
                <Text className={"text-gray-500"} style={{top: 10}}>
                    {sliceString(props.lastMessage, 50)}
                </Text>

                <TouchableOpacity style={{marginRight: 0, marginLeft:"auto"}}>
                    <AntDesign name={"closecircleo"} size={24} color={"black"}/>
                </TouchableOpacity>

            </View>
            <View className={"bg-black border h-px"}/>
        </View>

);
}