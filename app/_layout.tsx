import '../global.css';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Theme, ThemeProvider } from '@react-navigation/native';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform } from 'react-native';
import { NAV_THEME } from '~/lib/constants';
import { useColorScheme } from '~/lib/useColorScheme';
import {verifyInstallation} from "nativewind";
import ConnexionHandler from "~/handler/ConnexionHandler";
import {useState} from "react";

const LIGHT_THEME = {
    dark: false,
    colors: NAV_THEME.light,
};
const DARK_THEME = {
    dark: true,
    colors: NAV_THEME.dark,
    fonts: {
        regular: {
            fontFamily: "arial",
            fontWeight: "normal",
        },
        medium: {
            fontFamily: "arial",
            fontWeight: 'normal',
        },
        bold: {
            fontFamily: "arial",
            fontWeight: 'normal',
        },
        heavy: {
            fontFamily: "arial",
            fontWeight: 'normal',
        },
    }
} as Theme;

export {
    ErrorBoundary,
} from 'expo-router';

SplashScreen.preventAutoHideAsync();


function RootLayout() {
    const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
    const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

    React.useEffect(() => {
        (async () => {
            const theme = await AsyncStorage.getItem('theme');
            if (Platform.OS === 'web') {
                document.documentElement.classList.add('bg-background');
            }
            if (!theme) {
                await AsyncStorage.setItem('theme', colorScheme);
                setIsColorSchemeLoaded(true);
                return;
            }
            const colorTheme = theme === 'dark' ? 'dark' : 'light';
            if (colorTheme !== colorScheme) {
               setColorScheme('dark');


                setIsColorSchemeLoaded(true);
                return;
            }
            setIsColorSchemeLoaded(true);
        })().finally(() => {
            SplashScreen.hideAsync();
        });
    }, []);

    if (!isColorSchemeLoaded) {
       return null;
    }
    ConnexionHandler();

    verifyInstallation();

    return (
        <ThemeProvider value={DARK_THEME}>
            <StatusBar style={'dark'} />
            <Stack screenOptions={{headerShown: false}}>
                <Stack.Screen name={"(tabs)"}/>
                <Stack.Screen name={"pages"}/>
                <Stack.Screen name={"+not-found"}/>
            </Stack>
        </ThemeProvider>
    );
}

export default RootLayout;