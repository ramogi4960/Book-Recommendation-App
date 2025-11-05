import { ocean } from "@/assets/colors/colors";
import { loginStyles } from "@/assets/styles/loginStyles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { InputModeOptions, Text, TextInput, View } from "react-native";

interface EmailInputProps {
    type: InputModeOptions;
    label: string
}

export default function EmailInput({ type, label }: EmailInputProps) {
    return (
        <View style={loginStyles.inputContainer}>
            <Text style={loginStyles.inputLabel}>{ label }</Text>
            <View style={loginStyles.inputBox}>
                <FontAwesome
                    name="envelope-o"
                    size={28}
                    style={loginStyles.icon}
                />
                <TextInput
                inputMode={type}
                placeholder="Enter email"
                placeholderTextColor={ocean.placeholderText}
                style={loginStyles.input}
                autoCapitalize="none"
                />
            </View>
        </View>
    );
}