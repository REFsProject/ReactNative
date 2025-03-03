import AsyncStorage from "@react-native-async-storage/async-storage";
import {router} from "expo-router";


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
        .then((isLogged: boolean) =>
        {
            if(isLogged)
            {
                router.replace("/(tabs)/Main");
                return;
            }
            router.replace("/login/SignIn");
        })
        .catch((err: any) => console.log(err));
}
