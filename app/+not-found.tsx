import {SafeAreaView, View} from "react-native";
import {Text} from "~/lib/components/ui/text";
import {Link} from "expo-router";

export default function notFound()
{
    return(
        <SafeAreaView>
            <View className={"justify-center items-center"}>
                <Text>Hey Zoro! Wrong Pass</Text>
                <Link href={"(tabs)/Main"}>
                    <Text>Redirect to main page.</Text>
                </Link>
            </View>
        </SafeAreaView>
            )
}