import { ocean } from "@/assets/colors/colors";
import { loginStyles } from "@/assets/styles/loginStyles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Text, TextInput, View } from "react-native";

export default function EmailInput() {
    return (
        <View style={loginStyles.inputContainer}>
            <Text style={loginStyles.inputLabel}>Email</Text>
            <View style={loginStyles.inputBox}>
                <FontAwesome
                    name="envelope-o"
                    size={28}
                    style={loginStyles.icon}
                />
                <TextInput
                inputMode="email"
                placeholder="Enter email"
                placeholderTextColor={ocean.placeholderText}
                style={loginStyles.input}
                autoCapitalize="none"
                />
            </View>
        </View>
    );
}