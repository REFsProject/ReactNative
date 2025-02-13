export interface RefsUserInfo  {
    name: string,
    avatarUrl: string,
    internalId: string,
    email: string,
    phone: string,
    logOut: () => Promise<void>,
    isLogged: boolean,
    notification: boolean,
}