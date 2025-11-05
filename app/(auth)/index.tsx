import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>This is the home page</Text>
            <Link href={"/login"}>Login</Link>
            <Link href={"/register"}>Register</Link>
        </View>
    );
}