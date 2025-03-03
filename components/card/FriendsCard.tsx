import {Text, StyleSheet, View} from "react-native";
import {Avatar, AvatarImage} from "~/lib/components/ui/avatar";
import Animated from "react-native-reanimated";
import Colors from "~/constants/Colors";

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
            <Text>{props.username}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 0,
        paddingVertical: 10,
        borderRadius: 2,
        borderColor: Colors.black
    }
})