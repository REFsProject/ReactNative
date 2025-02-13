import React, {useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";

export default function VideoItem({ item, }): React.JSX.Element {
    const [isPaused, setIsPaused] = useState(false);
    const [likes, setLikes] = useState(item.likes);

    const handleVideoPress = () => {
        setIsPaused(!isPaused);
    };

    const handleLikePress = () => {
        setLikes((prev: number) => prev + 1);
    };

    return (
        <View className={"h-full w-full border-2 justify-center bg-gray-700"}>

            <Text className={"text-black flex-1 mx-5"}>dzqdqzdzd</Text>

            <TouchableOpacity
                className={"justify-end content-center border-2"}
                onPress={handleVideoPress}
                activeOpacity={0.9}
            >
                <View className={""}>
                    <TouchableOpacity onPress={handleLikePress} className={"p-8"}>
                        <Text className={"text-white font-normal size-2"}>❤️ {likes}</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
    );
};
