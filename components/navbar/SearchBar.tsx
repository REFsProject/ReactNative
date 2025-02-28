import {TextInput, View} from "react-native";
import {Input} from "~/lib/components/ui/input";
import {useState} from "react";
import {useFriendListRef} from "~/app/(tabs)/Message";

type SearchBarProps = {
    data: Array<any>,
    placeholder: string,
    color?: "black" | "white"
}

function onChangeText(text: string)
{
    const friendList = useFriendListRef();

}

export default function SearchBar(props: SearchBarProps)
{
    const [value, setValue] = useState("");

    return(
        <View>
            <Input
                placeholder={"Rechercher"}
                value={value}
                onChangeText={onChangeText}
                aria-labelledby='inputLabel'
                aria-errormessage='inputError'
            />
        </View>
    )
}