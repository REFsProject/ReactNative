import {Animated, SafeAreaView, View, StyleSheet} from "react-native";
import React, {MutableRefObject, useRef, useState} from "react";
import MessageCard, {MessageCardProps} from "~/components/card/MessageCard";
import SearchBar from "~/components/navbar/SearchBar";

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
] as MessageCardProps[];

export const useFriendListRef = (): MutableRefObject<MessageCardProps[]> => {
    return useRef(data);
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
    const [value, setValue] = React.useState("");
    const [matchedResult, setMatchedResult] = useState([] as MessageCardProps[]);
    const friendList = useFriendListRef();

    const onChangeText = (text: string)=>
    {
        let result = [];

        for (let i = 0; i < friendList.current.length ; i++)
        {
            if(friendList.current[i].username.slice(0, text.length) === text)
            {
                result[i] = friendList.current[i];
            }
        }
        setValue(text);
        setMatchedResult(result);
    }

    return(
        <SafeAreaView className={'bg-black h-full'}>
            <View style={styles.searchBar}>
                <SearchBar data={useFriendListRef().current} placeholder={"Rechercher"} onChangeText={onChangeText} entryValue={value}/>

            </View>
            <View style={{top: 120}}>
                <Animated.FlatList
                    renderItem={renderMessage}
                    data={data}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        paddingHorizontal: 20,
        top: 50
    }
})