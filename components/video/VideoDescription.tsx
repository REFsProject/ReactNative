import React from "react";
import {Text, TouchableOpacity, View} from "react-native";

type VideoDescriptionProps = {
    text: string,
    tags?: Array<string>,
}

export default function VideoDescription(props: VideoDescriptionProps): React.JSX.Element
{
    const [isPressed, setPressed] = React.useState(false);
    let text = props.text
    let height = 100;
    if(props.text.length >= 100)
    {
        text = props.text.substring(0, 100) + "...";
    }


    return(
        <View className={"mb-10 border max-h-44 h-24"}>
            <TouchableOpacity className={"text-gray-500 flex-row"} onPress={() => setPressed(true)}>
                <Text>{text}</Text>
                <Text>Voir plus</Text>
            </TouchableOpacity>
        </View>
    )
}