import {useState} from "react";
import {MessageProps, PrivateMessageProps} from "~/app/pages/[...user]";

type BaseUserProps = {
    internalId: number,
    username: string,
    password: string,

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



export function createFromId(): void
{

}

export default UserHandler;