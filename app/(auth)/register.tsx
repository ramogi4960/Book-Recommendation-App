import { RegisterStyles } from "@/assets/styles/registerStyles";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import EmailInput from "../components/emailInput";
import PasswordInput from "../components/passwordInput";
import RegisterButton from "../components/registerButton";

export default function Register() {
    return (
        <View style={RegisterStyles.container}>
            <View style={RegisterStyles.headingContainer}>
                <Text style={RegisterStyles.headingText}>BookTator</Text>
            </View>
            <View style={RegisterStyles.formContainer}>
                <EmailInput type="text" label="Username"/>
                <EmailInput type="email" label="Email"/>
                <PasswordInput label="Password"/>
                <PasswordInput label="Confirm Password" />
                <RegisterButton />
                <View style={RegisterStyles.linkContainer}>
                    <Text style={RegisterStyles.signUpText}>Already have an acount? </Text>
                    <Link href="./login" asChild>
                        <Text style={RegisterStyles.signUpLink}>Login</Text>
                    </Link>
                </View>
            </View>
        </View>
    )
}