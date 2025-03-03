import {ActivityIndicator, SafeAreaView, StyleSheet, View} from "react-native";
import {Avatar, AvatarImage} from "~/lib/components/ui/avatar";

type FriendsCardProps = {
    username: string,
    avatar: {
        uri: string
    }
}

export default function FriendsCard(props: FriendsCardProps)
{
    return (
        <View style={styles.container}>
            <Avatar alt={props.username}>
                <AvatarImage source={props.avatar}/>
            </Avatar>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 0,
        paddingVertical: 10,
        borderRadius: 2
    }
})