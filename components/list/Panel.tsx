import React from "react";
import {View, StyleSheet, ScrollView, ViewStyle} from "react-native";

type PanelProps = {
    list: [],
    renderComponent: () => React.JSX.Element,
    contentStyle?: ViewStyle
}

export default function Panel(props: PanelProps): React.JSX.Element
{
    return (
        <View style={styles.container}>
            <ScrollView style={props.contentStyle}>
                {props.renderComponent()}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 40,
        borderRadius: 10,
    }
})
