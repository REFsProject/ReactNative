import {MessageProps, PrivateMessageProps} from "~/app/pages/[...user]";
import {LoggedUser} from "~/app/login/SignIn";
import {defaultAvatar} from "~/utils/Utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {router} from "expo-router";

type BaseUserProps = {
    internalId: number,
    username: string,
    password: string,
    avatarUri: string
}

export type BaseFriendsProps =
    {
        username: string,
        since: string,
        profilePicture: {
            uri: string,
        },
        lastMessage: string
        id: number,
    }[]


let user: UserHandler = null

export const useActualUser = (): UserHandler =>
{
    if(user === null) throw new Error("user is not registered and trying to be accessed")

    return user;
}

class UserHandler {

    private _actualUser: BaseUserProps|null = null;

    private _friends: BaseFriendsProps[]|null = null;

    private _id: number | null = null;

    constructor(props: BaseUserProps) {
        if(this._actualUser === null)
        {
            this.actualUser = props;
            user = this;
        }
        this.friends = require("data/friends.json");
    }

    get id(): number | null {
        return this._id;
    }

    set id(value: number | null) {
        this._id = value;
    }

    get friends(): BaseFriendsProps[] | null {
        return this._friends;
    }

    set friends(value: BaseFriendsProps[] | null) {
        this._friends = value;
    }

    getMessageWith(id: number, messageList: PrivateMessageProps[]): PrivateMessageProps
    {
        for (let key in messageList)
        {
            if(messageList[key]["id"] === id) return messageList[key];
        }
    }

    getLastMessage(messages: PrivateMessageProps, message: MessageProps): MessageProps
    {
        let list = messages.messages
        for(let key in list)
        {
            if(list[key] === message)
            {
                let keyValue = parseInt(Object.keys(list).find(((key) => list[key] === message)));
                return list[keyValue === 0 ? 0 : keyValue - 1];
            }
        }
        return message;
    }

    get actualUser(): BaseUserProps
    {
        return this._actualUser;
    }

    set actualUser(user: BaseUserProps) {
        this._actualUser = user;
    }

    getIdFromUsername(username: string): null|number {
        let data = require("data/global/users.json")
        for (const key in data) {
            if (data[key] === username) {
                return parseInt(key);
            }
        }
        return null;
    }
}



export function createUser(props: LoggedUser): void
{
    let userInfo: LoggedUser =  {username: props.username, password: props.password, id: 0, email: 'test@test.com'};
    setInterval(async () => {
        AsyncStorage.setItem("loginEntry", JSON.stringify(userInfo)).then(() => {
            AsyncStorage.setItem("isLogged", 'true').then(async () =>  {
                new UserHandler({username: props.username, internalId: props.id, password: props.password, avatarUri: defaultAvatar});
                router.replace("/(tabs)/Main");
                console.log("logged succesfully");
            })
        });
    })
}

export function generateId(): number
{
    let ids = Object.keys(require("data/global/users.json"));
    return ids.length + 1;
}

export default UserHandler;