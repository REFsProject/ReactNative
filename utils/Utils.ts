const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export const defaultAvatar =  ""

export const sliceString = (string: string, maxChar: number) => {
    return string.length > maxChar ?  string.slice(0, maxChar) + "..." : string;
}

//TODO: Implement all preferences
export type Preferences = {
    notifications: {
        base: true,
        messages: true,
        default: true
    },
}

