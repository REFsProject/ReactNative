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
            <Text className={'absolute font-bold text-white'} style={{left: 70, top: 10}}>{props.username}</Text>
            <View className={"flex flex-row"} style={{paddingHorizontal: 10, paddingVertical: 7, marginVertical: 10}}>
                <Avatar alt={props.username} style={{marginRight: 20, height: 40, width: 40}}>
                    <AvatarImage source={{uri: "https://static.vecteezy.com/system/resources/previews/024/183/502/non_2x/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg"}}/>
                </Avatar>
                <Text style={{top: 10, color: "gray"}}>
                    {sliceString(props.lastMessage, 50)}
                </Text>

                <TouchableOpacity style={{marginRight: 0, marginLeft:"auto"}}>
                    <AntDesign name={"closecircleo"} size={24} color={"white"}/>
                </TouchableOpacity>

            </View>
            <View style={{borderBottomWidth: 1, borderBottomColor: "gray"}}/>
        </View>

);
}