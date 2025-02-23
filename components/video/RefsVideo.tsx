import React, {MutableRefObject, useRef, useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import MainScreenInteractionButton from "~/components/buttons/MainScreenInteractionButton";
import VideoDescription from "~/components/video/VideoDescription";

type RefsVideoProps = {
    likes: number,
    comments: number,
    description?: string,
    heightRef?: MutableRefObject<number>
}

export default function RefsVideo(props: RefsVideoProps): React.JSX.Element {
    const focusRef = useRef("");
    const [isPaused, setIsPaused] = useState(false);
    const [likes, setLikes] = useState(props.likes);
    const [focus, setFocus] = useState("");

    const handleVideoPress = () => {
        setIsPaused(!isPaused);
    };

    const handleRetweet = (): void => {
        focusRef.current = "user"
    }

    const handleUserPress = (): void => {}

    const handleComment = (): void => {}

    const handleLikePress = () => {
        setLikes((prev: number) => prev + 1);
    };

    return (
        <View className={"h-full w-full border-2 bg-gray-700"}>
            <Text className={"text-black flex-1 pl-7 mx-5"}>dzqdqzdzd</Text>

            <View className={"border justify-center"} style={{ marginBottom: props.heightRef.current / 8, marginLeft: 'auto', marginRight: 0, height: props.heightRef.current * 0.5, paddingVertical: 40}}>

                <MainScreenInteractionButton componentName={"user"} onPress={handleRetweet} focusState={{focus, setFocus}}/>
                <MainScreenInteractionButton componentName={"retweet"} onPress={handleRetweet} data={"Retweet"} focusState={{focus, setFocus}}/>
                <MainScreenInteractionButton componentName={"like1"} onPress={handleLikePress} data={props.likes} focusState={{focus, setFocus}}/>
                <MainScreenInteractionButton componentName={"message1"} onPress={handleComment} data={props.comments} focusState={{focus, setFocus}}/>

            </View>

            <View className={"absolute border"} style={{marginBottom: 0, marginTop: "auto"}}>
                <VideoDescription text={props.description ?? "fesfesfsef"}/>
            </View>

        </View>
    );
};
