import {SafeAreaView} from "react-native";
import {useRootNavigationState} from "expo-router";
import ConnexionHandler from "../handler/ConnexionHandler";
import {Text} from "~/lib/components/ui/text";
import '../global.css';
import {verifyInstallation} from "nativewind";

export default function Index()
{
    const rootNavigationState = useRootNavigationState();

    if(!rootNavigationState?.key) {
        return null;
    }
    return (
        <SafeAreaView>
            <Text>test</Text>
        </SafeAreaView>
    )
}
