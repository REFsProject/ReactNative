import {Image, Pressable, SafeAreaView, View} from "react-native";

type NavButtonParam = {
    imageSource: string,
    redirectRoute: string,

}

export default function NavBarButton(props: NavButtonParam)
{

    return(
        <SafeAreaView>
            <View className={"h-auto mx-6 align-middle"}>
                <Pressable>
                    <Image
                        source={require(props.imageSource)}
                        className={""}
                    />
                </Pressable>
            </View>
        </SafeAreaView>
    )

}