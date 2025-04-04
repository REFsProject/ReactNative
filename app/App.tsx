/**
 * Sample ReactNative Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef} from 'react';
import {PropsWithChildren} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import Colors from "../constants/Colors";



function App() {
    const isDarkMode = useColorScheme() === 'dark';
    const userRef = useRef(null);

    const backgroundStyle = {
        backgroundColor: Colors.black,
        flex: 1,
    };

    return (
            <SafeAreaView style={backgroundStyle}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={backgroundStyle}>
                </ScrollView>
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
