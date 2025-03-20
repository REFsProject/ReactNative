import AsyncStorage from "@react-native-async-storage/async-storage";
import {router} from "expo-router";
import UserHandler, {useActualUser} from "~/handler/UserHandler";
import {LoggedUser} from "~/app/login/SignIn";


async function processLogin()
    {
        return new Promise((resolve, reject) =>
        {
            setInterval( async () => {
                try {
                    const preLogged = await AsyncStorage.getItem("isLogged");
                    if (preLogged === "true") {
                        resolve(true);
                        return;
                    }
                    resolve(false);
                } catch (err: any) {
                    reject(err);
                }
            }, 300)
        })
}
    export default function ConnexionHandler() {
    processLogin()
        .then(async (isLogged: boolean) => {
            if (isLogged) {

                try {
                    let userData: LoggedUser = JSON.parse(await AsyncStorage.getItem("loginEntry"));
                    new UserHandler({username: userData.username, internalId: userData.id, password: userData.password});
                    let user = useActualUser();
                    router.replace("/(tabs)/Main");

                }catch (e) {
                    router.replace("/login/SignIn");
                }
                return;
            }
            router.replace("/login/SignIn");
        })
        .catch((err: any) => console.log(err));
}
