import {useState} from "react";
import {PrivateMessageProps} from "~/app/pages/[...user]";

type BaseUserProps = {
    internalId: number,
    username: string,
    password: string,

}

type BaseFriendsProps =
    {
        friends:
            {
                username: string,
                since: string,
                id: number,
            }[]

    }

class UserHandler {


    private actualUser: BaseUserProps|null = null;

    private _friends: BaseFriendsProps|null = null;

    constructor(props: BaseUserProps) {
        if(this.actualUser === null)
        {
            this.setUser(props);
        }
    }

    get friends(): BaseFriendsProps | null {
        return this._friends;
    }

    set friends(value: BaseFriendsProps | null) {
        this._friends = value;
    }

    getMessageWith(id: number, messageList: PrivateMessageProps): string[]
    {
        for (let i = 0; i < messageList.data.length; i += 1)
        {
            if (messageList.data[i].id === id)
            {
                return messageList.data[i].messages;
            }
        }
        return []
    }

    getUser(): BaseUserProps
    {
        return this.actualUser;
    }

    setUser(user: BaseUserProps): void {
        this.actualUser = user;
    }
}