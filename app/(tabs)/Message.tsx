import {Animated, SafeAreaView, ScrollView, View} from "react-native";
import React, {useRef} from "react";
import MessageCard from "~/components/common/MessageCard";

const data = [
    {
        username: "AliceDubois",
        profilePicture: {
            uri: "https://picsum.photos/200/200?image=0"
        },
        lastMessage: "Hey, tu as vu le nouveau projet ? 😄"
    },
    {
        username: "BobMartin",
        profilePicture: {
            uri: "https://picsum.photos/200/200?image=1"
        },
        lastMessage: "On se retrouve à 15h devant le café !"
    },
    {
        username: "CharlieNguyen",
        profilePicture: {
            uri: "https://picsum.photos/200/200?image=2"
        },
        lastMessage: "Je t'envoie le dossier ce soir 📁"
    },
    {
        username: "DanaCohen",
        profilePicture: {
            uri: "https://picsum.photos/200/200?image=3"
        },
        lastMessage: "Merci pour ton aide hier ! 🙌"
    },
    {
        username: "EvaLeroy",
        profilePicture: {
            uri: "https://picsum.photos/200/200?image=4"
        },
        lastMessage: "Ça te dit un déjeuner demain ?"
    }
];

export const useFriendListRef = () => {
    const FriendRef = useRef([]);
    FriendRef.current = data;
    return FriendRef;
}

function renderMessage({item, index}): React.JSX.Element
{
    return(
            <MessageCard
                username={item.username}
                lastMessage = {item.lastMessage}
                profilePicture = {item.profilePicture}
            />
    )
}

export default function Message()
{
    const flatListRef = useRef(null);
    return(
        <SafeAreaView className={'bg-gray-700 h-full'}>
            <View style={{top: 120}}>
                <Animated.FlatList
                    renderItem={renderMessage}
                    data={data}
                />
            </View>
        </SafeAreaView>
    )
}