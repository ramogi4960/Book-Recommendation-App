import { loginStyles } from "@/assets/styles/loginStyles";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import EmailInput from "./components/emailInput";
import LoginButton from "./components/loginButton";
import PasswordInput from "./components/passwordInput";

export default function Login() {;
    return (
        <View style={loginStyles.container}>
            <Image
                source={require("../assets/images/books.png")}
                style={loginStyles.image}
            />
            <View style={loginStyles.formContainer}>
                <EmailInput type="email" label="Email" />
                <PasswordInput label="Password" />
                <LoginButton />
                <View style={loginStyles.linkContainer}>
                    <Text style={loginStyles.signUpText}>Don't have an acount? </Text>
                    <Link href="./register" asChild>
                        <Text style={loginStyles.signUpLink}>Sign Up</Text>
                    </Link>
                </View>
            </View>
        </View>
    )
}