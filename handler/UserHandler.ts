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

export const useActualUser = () =>
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

    getMessageWith(id: number, messageList: PrivateMessageProps[]): MessageProps[]
    {
        for (let i = 0; i < messageList.length; i += 1)
        {
            if (messageList[i].id === id)
            {
                return messageList[i].messages;
            }
        }
        return []
    }

    get actualUser(): BaseUserProps
    {
        return this._actualUser;
    }

    set actualUser(user: BaseUserProps) {
        this._actualUser = user;
    }
}

export function createFromId(): void
{

}

export default UserHandler;