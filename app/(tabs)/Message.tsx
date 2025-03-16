import {Animated, SafeAreaView, View, StyleSheet, TouchableOpacity} from "react-native";
import React, {MutableRefObject, useRef, useState} from "react";
import MessageCard, {MessageCardProps} from "~/components/card/MessageCard";
import SearchBar from "~/components/navbar/SearchBar";
import Panel from "~/components/list/Panel";
import FriendsCard from "~/components/card/FriendsCard";
import {useContainerHeightRef} from "~/components/common/RefsContentWrapper";
import {router} from "expo-router";

const data = require("data/friends.json") as MessageCardProps[];

//TODO: Reload system when slidding to the botttom

export const useFriendListRef = (): MutableRefObject<MessageCardProps[]> => {
    //API update
    return useRef(data);
}

//TODO: Trouver un système pour transferer differentes info de manière opti en utilisant la navigation dynamique si possible

function renderMessage({item, index}): React.JSX.Element
{
    return(
        <TouchableOpacity onPress={() => router.push("/pages/" + item.username)}>
            <MessageCard
                username={item.username}
                lastMessage = {item.lastMessage}
                profilePicture = {item.profilePicture}
            />
        </TouchableOpacity>
    )
}

export default function Message()
{
    const [value, setValue] = React.useState("");
    const [matchedResult, setMatchedResult] = useState([] as MessageCardProps[]);
    const friendList: MessageCardProps[] = useFriendListRef().current;
    const [isPanelRender, setPanelRender] = useState(false);

    const onChangeText = (text: string)=>
    {
        if(text === "") {
            setPanelRender(false);
            setValue(text);
            return;
        }

        let result = [];

        for (let i = 0; i <= friendList.length - 1 ; i++)
        {
            if(friendList[i].username.slice(0, text.length) === text)
            {
                result[result.length] = friendList[i];
            }
        }

        setPanelRender(true);
        setValue(text);
        setMatchedResult(result);
    }

    const renderComponent = ({item, index}): React.JSX.Element => {
        return <FriendsCard username={item.username} avatar={item.profilePicture}/>
    }

    return(
        <SafeAreaView className={'bg-black h-full'}>
            <View style={styles.searchBar}>
                <SearchBar data={useFriendListRef().current} placeholder={"Rechercher"} onChangeText={onChangeText} entryValue={value}/>
                <View style={{display: isPanelRender ? "flex" : "none"}}>
                    <Panel list={matchedResult as []} renderComponent={renderComponent} showPanel={isPanelRender} contentStyle={styles.panel}/>
                </View>
            </View>
            <View style={{top: 120, display: isPanelRender ? "none" : "flex", flex: 1}}>
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
    },

    panel: {
        top: 10,
        borderRadius: 5,
        backgroundColor: "gray",
        marginHorizontal: 10,
    }
})