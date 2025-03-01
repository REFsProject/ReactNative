import {StyleSheet, TextInput, View} from "react-native";
import {Input} from "~/lib/components/ui/input";
import { useState} from "react";

type SearchBarProps = {
    data: Array<any>,
    placeholder: string,
    onChangeText: (text: string) => void,
    entryValue: string,
    color?: "black" | "white",
}


export default function SearchBar(props: SearchBarProps)
{
    return(
        <View>
            <Input
                placeholder={props.placeholder}
                value={props.entryValue}
                onChangeText={props.onChangeText}
                aria-labelledby='inputLabel'
                aria-errormessage='inputError'
            />
        </View>
    )
}

const styles = StyleSheet.create({
   container:
       {}
});