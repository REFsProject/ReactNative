//TODO: Add/make a video librairies

import React, { useState, useRef } from 'react';
import {View, Dimensions} from 'react-native';
import Animated from "react-native-reanimated";
import VideoItem from "~/components/video/RefsVideo";

const { height, width } = Dimensions.get('window');

type RefsData = {
    id: string;
    videoUrl: string;
    likes: number;
    additionalData?: any;
}

export default function RefsContentWrapper() {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);

    const videoData  = [
        {
            id: '1',
            videoUrl: 'https://youtu.be/K4TOrB7at0Y?si=bZddJ8Ib0Rwxl3aD',
            likes: 100,
        },
        {
            id: '2',
            videoUrl: 'https://youtu.be/K4TOrB7at0Y?si=bZddJ8Ib0Rwxl3aD',
            likes: 200,
        },
        {
            id: '3',
            videoUrl: 'https://youtu.be/K4TOrB7at0Y?si=bZddJ8Ib0Rwxl3aD',
            likes: 100,
        },
        {
            id: '4',
            videoUrl: 'https://youtu.be/K4TOrB7at0Y?si=bZddJ8Ib0Rwxl3aD',
            likes: 200,
        },
        {
            id: '5',
            videoUrl: 'https://youtu.be/K4TOrB7at0Y?si=bZddJ8Ib0Rwxl3aD',
            likes: 100,
        },
        {
            id: '6',
            videoUrl: 'https://youtu.be/K4TOrB7at0Y?si=bZddJ8Ib0Rwxl3aD',
            likes: 200,
        },

    ] as RefsData[];

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index);
        }
    });


    const viewabilityConfig = {
        itemVisiblePercentThreshold: 50,
    };

    const renderItem = ({ item, index }) => {
        return (
        <View style={{height: height , width: width}}>
            <VideoItem
                item={item}
            />
        </View>
        )
    }

    return (
        <View className={"w-full h-full"}>
            <Animated.FlatList
                ref={flatListRef}
                data={videoData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                pagingEnabled={true}
                className={"bg-black"}
                contentContainerClassName={""}
                showsVerticalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged.current}
                viewabilityConfig={viewabilityConfig}
                snapToAlignment="start"
                decelerationRate="fast"
            />
        </View>
    );
};