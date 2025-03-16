import React from "react";
import {View, StyleSheet, ViewStyle, Text, Animated} from "react-native";

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
    if (list.length === 0 )
    {
        return <View><Text>Oups, il semblerait que rien ne corresponde a votre recherche</Text></View>
    }

    return <Animated.FlatList renderItem={renderComponent} data={list} />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 40,
        borderRadius: 10,
    }
})