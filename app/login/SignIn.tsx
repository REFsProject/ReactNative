import {Image, KeyboardType, KeyboardTypeOptions, SafeAreaView, View} from "react-native";
import {Button} from "~/lib/components/ui/button";
import {Input} from "~/lib/components/ui/input";
import {MutableRefObject, useRef, useState,} from "react";
import {Text} from "~/lib/components/ui/text";
import {Checkbox} from "~/lib/components/ui/checkbox";
import {router} from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

type LoginUserEntry = {
    email: string;
    password: string;
    aggredConditions: boolean
}


export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreed, setAgreed] = useState(false);
    const errorRef = useRef(false);

    return (
        <SafeAreaView>
            <View className={"justify-center"}>
                <View
                    className={"bg-clip-padding bg-gray-700 size-full flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 p-8 md:p-10 2xl:p-12 3xl:p-14  shadow-xl"}>
                    <View className={"mb-2 flex-row justify-center"}>
                        <Text className={"text-orange-300 font-semibold text-8xl"}> REFS </Text>
                        <Image
                            className={"h-20 w-20 bg-transparent p-1"}
                            source={require("~/assets/images/logo.jpg")
                            }/>
                    </View>
                    <View className={"mb-6"}>
                        <Input
                            placeholder={"email"}
                            value={email}
                            onChangeText={(text: string) => setEmail(text)}
                        />
                    </View>

                    <View className={"mb-6"}>
                        <Input
                            placeholder={"password"}
                            value={password}
                            onChangeText={(text: string) => setPassword(text)}
                        />
                    </View>

                    {errorRef.current ?
                        <Text className={"text-red-100"}>Une erreur est survenue lors de la connexion</Text> : null}

                    <View className={"h-px my-8 bg-gray-300 border-0 dark:bg-gray-500"}/>
                    <View className={'flex-row mb-16 justify-center'}>
                        <Button
                            className={"text-white justify-start flex-row bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50  font-medium rounded-lg dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 "}>
                            <Image
                                className={"bg-white w-5 h-5"}
                                source={require('~/assets/images/apple.png')}
                            />
                            <Text className={"text-white mb-0.5"}> Sign in with Apple </Text>
                        </Button>

                        <Button
                            className={"text-white justify-start flex-row bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg py-2.5 dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 "}>
                            <Image
                                className={"w-8 h-8"}
                                source={require('~/assets/images/google.png')}
                            />
                            <Text className={"text-white "}> Sign in with Google </Text>
                        </Button>
                    </View>

                    <View className={"flex-row"}>
                        <Checkbox checked={agreed} onCheckedChange={setAgreed}
                                  className={"me-2 border-gray-300 dark:border-gray-500 border-2 mb-8"}
                        />
                        <Text className={"text-gray-300 dark:text-gray-500 "}>Accept Terms and Conditions</Text>
                    </View>

                    <View className={'mb-0.5'}>
                        <Button
                            className={"text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"}
                            onPress={() => attempLogin({
                                email: email,
                                password: password,
                                aggredConditions: agreed
                            }, errorRef)}
                        >
                            <Text className={"text-gray-600"}>Confirm</Text>
                        </Button>
                    </View>
                </View>
            </View>
        </SafeAreaView>

    );
}

function attempLogin(props: LoginUserEntry, ref: MutableRefObject<boolean>): void
{
    if(props.email === "" || props.password === "" || props.aggredConditions === false)
    {
        ref.current = true;

    }

    router.push('/(tabs)/Main');
    AsyncStorage.setItem("isLogged", 'true').then(() => console.log("loged succesfully"));
}

