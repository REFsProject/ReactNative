import React from "react";
import {View, StyleSheet, ScrollView, ViewStyle, Text, Animated} from "react-native";

type PanelProps = {
    list: [],
    renderComponent: (item: any) => React.JSX.Element,
    showPanel: boolean,
    contentStyle?: ViewStyle,
}

export default function Panel(props: PanelProps): React.JSX.Element
{
    return (
        <View style={props.contentStyle}>
            {renderItems(props.list, props.renderComponent)}
        </View>
    )
}

function renderItems(list: [], renderComponent: (item: any) => React.JSX.Element): React.JSX.Element
{
    return list.length === 0 ?
        <View><Text>Oups, il semblerait que rien ne corresponde a voter recherche</Text></View> :
        <Animated.FlatList renderItem={renderComponent} data={list} />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 40,
        borderRadius: 10,
    }
})
