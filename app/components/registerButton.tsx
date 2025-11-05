import { RegisterStyles } from "@/assets/styles/registerStyles";
import { Pressable, Text } from "react-native";

export default function RegisterButton() {
    return (
        <Pressable style={RegisterStyles.loginButtonContainer}>
            <Text style={RegisterStyles.loginButtontext}>Register</Text>
        </Pressable>
    );
}