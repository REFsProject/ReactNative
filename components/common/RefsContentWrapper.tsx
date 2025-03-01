//TODO: Add/make a video librairies

import React, {useState, useRef, MutableRefObject} from 'react';
import {View, Dimensions} from 'react-native';
import Animated from "react-native-reanimated";
import RefsVideo from "~/components/video/RefsVideo";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';


type RefsData = {
    id: string;
    videoUrl: string;
    likes: number;
    comments: number;
    additionalData?: any;
}

const { height, width } = Dimensions.get('window');

export const useContainerHeightRef = () =>
{
    let TabBarHeight = useBottomTabBarHeight();
    let ContainerHeightRef = useRef(0);
    ContainerHeightRef.current = height - TabBarHeight;
    return ContainerHeightRef;
}

const videoData  = [
    {
        id: '1',
        videoUrl: 'https://youtu.be/K4TOrB7at0Y?si=bZddJ8Ib0Rwxl3aD',
        likes: 100,
        comments: 1400
    },
    {
        id: '2',
        videoUrl: 'https://youtu.be/K4TOrB7at0Y?si=bZddJ8Ib0Rwxl3aD',
        likes: 200,
        comments: 1400
    },
    {
        id: '3',
        videoUrl: 'https://youtu.be/K4TOrB7at0Y?si=bZddJ8Ib0Rwxl3aD',
        likes: 100,
        comments: 1400
    },
    {
        id: '4',
        videoUrl: 'https://youtu.be/K4TOrB7at0Y?si=bZddJ8Ib0Rwxl3aD',
        likes: 200,
        comments: 1400
    },
    {
        id: '5',
        videoUrl: 'https://youtu.be/K4TOrB7at0Y?si=bZddJ8Ib0Rwxl3aD',
        likes: 100,
        comments: 1400
    },
    {
        id: '6',
        videoUrl: 'https://youtu.be/K4TOrB7at0Y?si=bZddJ8Ib0Rwxl3aD',
        likes: 200,
        comments: 1400
    },

] as RefsData[];

export default function RefsContentWrapper() {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);
    const containerHeightRef = useContainerHeightRef();

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
        <View style={{height: containerHeightRef.current , width: width}}>
            <RefsVideo
                likes={item.likes}
                comments={item.comments}
                heightRef={containerHeightRef}
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
                showsVerticalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged.current}
                viewabilityConfig={viewabilityConfig}
                snapToAlignment="start"
                decelerationRate="fast"
            />
        </View>
    );
};