import React, {MutableRefObject, useRef, useState} from "react";
import {Button, Pressable, Text, TouchableOpacity, View} from "react-native";
import MainScreenInteractionButton from "~/components/buttons/MainScreenInteractionButton";
import VideoDescription from "~/components/video/VideoDescription";
import {useContainerHeightRef} from "~/components/common/RefsContentWrapper";
import VideoPlayer from "react-native-video-player/lib/typescript/module/src";
import {useVideoPlayer, VideoView} from "expo-video";
import {useEvent} from "expo";
import {FontAwesome6} from "@expo/vector-icons";
import renderIf from "~/utils/renderIf";

type RefsVideoProps = {
    likes: number,
    comments: number,
    heightRef: MutableRefObject<number>,
    videoUri: string,
    description?: string,
}

export default function RefsVideo(props: RefsVideoProps): React.JSX.Element {
    const focusRef = useRef("");
    const [isPaused, setIsPaused] = useState(false);
    const [likes, setLikes] = useState(props.likes);
    const [focus, setFocus] = useState("");
    const videoPlayer = useVideoPlayer(props.videoUri, player => {
        player.loop = true;
        player.play();
    })
    const isPlaying = useEvent(videoPlayer, 'playingChange', {isPlaying: videoPlayer.playing})
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

    const handlePause = () => {
        if (isPlaying) {
            videoPlayer.pause();
        } else {
            videoPlayer.play();
        }
    }

    console.log('rrr');

    return (
        <View style={{flex: 1}}>

            <VideoView style={{flex: 1}} player={videoPlayer} allowsFullscreen={true}>
                {
                    renderIf(isPlaying)(() =>
                        <Pressable style={{justifyContent: "center", }} onPress={handlePause}>
                            <FontAwesome6 name="play" size={24} color="black" />
                        </Pressable>
                )
            }
                <View className={"justify-center"} style={{ marginBottom: height, marginLeft: 'auto', marginRight: 0, height: height, paddingVertical: 40}}>

                    <MainScreenInteractionButton componentName={"user"} onPress={handleRetweet} focusState={{focus, setFocus}}/>
                    <MainScreenInteractionButton componentName={"retweet"} onPress={handleRetweet} data={"Retweet"} focusState={{focus, setFocus}}/>
                    <MainScreenInteractionButton componentName={"hearto"} onPress={handleLikePress} data={props.likes} focusState={{focus, setFocus}}/>
                    <MainScreenInteractionButton componentName={"message1"} onPress={handleComment} data={props.comments} focusState={{focus, setFocus}}/>

                </View>

        </VideoView>




            <View className={"absolute border"} style={{bottom: 0, }}>
                <VideoDescription text={props.description ?? "fesfesfsef"}/>
            </View>

        </View>
    );
};

