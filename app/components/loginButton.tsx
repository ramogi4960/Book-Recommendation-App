import { loginStyles } from "@/assets/styles/loginStyles";
import { Pressable, Text } from "react-native";

export default function LoginButton() {
    return (
        <Pressable style={loginStyles.loginButtonContainer}>
            <Text style={loginStyles.loginButtontext}>Login</Text>
        </Pressable>
    );
}