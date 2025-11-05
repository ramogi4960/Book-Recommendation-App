import { ocean } from "@/assets/colors/colors";
import { loginStyles } from "@/assets/styles/loginStyles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";

interface PasswordInputProps {
    label: string;
}

export default function PasswordInput({ label }: PasswordInputProps) {
    const [ isVisible, setIsVisible ] = useState<boolean>(false)
    return (
        <View style={loginStyles.inputContainer}>
            <Text style={loginStyles.inputLabel}>{ label }</Text>
            <View style={loginStyles.inputBox}>
                <FontAwesome
                    name="key"
                    size={28}
                    style={loginStyles.icon}
                />
                <TextInput
                inputMode="text"
                placeholder="Enter password"
                placeholderTextColor={ocean.placeholderText}
                style={loginStyles.passwordInput}
                secureTextEntry={!isVisible}
                />
                <FontAwesome
                    name={isVisible ? "eye" : "eye-slash"}
                    size={28}
                    style={loginStyles.icon}
                    onPress={() => setIsVisible(!isVisible)}
                />
            </View>
        </View>
    );
}