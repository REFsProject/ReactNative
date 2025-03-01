import React, {MutableRefObject, useRef, useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import MainScreenInteractionButton from "~/components/buttons/MainScreenInteractionButton";
import VideoDescription from "~/components/video/VideoDescription";
import {useContainerHeightRef} from "~/components/common/RefsContentWrapper";

type RefsVideoProps = {
    likes: number,
    comments: number,
    heightRef: MutableRefObject<number>
    description?: string,
}

export default function RefsVideo(props: RefsVideoProps): React.JSX.Element {
    const focusRef = useRef("");
    const [isPaused, setIsPaused] = useState(false);
    const [likes, setLikes] = useState(props.likes);
    const [focus, setFocus] = useState("");
    const height = props.heightRef.current;

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
        <View className={"h-full w-full border-2 bg-black"}>
            <Text className={"text-gray-700 flex-1 pl-7 mx-5"}>dzqdqzdzd</Text>

            <View className={"border justify-center"} style={{ marginBottom: height / 8, marginLeft: 'auto', marginRight: 0, height: height * 0.5, paddingVertical: 40}}>

                <MainScreenInteractionButton componentName={"user"} onPress={handleRetweet} focusState={{focus, setFocus}}/>
                <MainScreenInteractionButton componentName={"retweet"} onPress={handleRetweet} data={"Retweet"} focusState={{focus, setFocus}}/>
                <MainScreenInteractionButton componentName={"hearto"} onPress={handleLikePress} data={props.likes} focusState={{focus, setFocus}}/>
                <MainScreenInteractionButton componentName={"message1"} onPress={handleComment} data={props.comments} focusState={{focus, setFocus}}/>

            </View>

            <View className={"absolute border"} style={{bottom: 0, }}>
                <VideoDescription text={props.description ?? "fesfesfsef"}/>
            </View>

        </View>
    );
};
