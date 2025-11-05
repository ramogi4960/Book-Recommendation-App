import { StyleSheet } from "react-native";
import { ocean } from "../colors/colors";

export const RegisterStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ocean.background,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    text: {
        color: ocean.primary
    },
    headingContainer: {
        flexDirection: "row"
    },
    headingText: {
        color: ocean.primary,
        fontSize: 30
    },
    formContainer: {
        height: "70%",
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 35,
        boxShadow: `0 0 15px ${ocean.primary}`
    },
    inputContainer: {
        width: "90%",
        height: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    inputLabel: {
        color: ocean.textPrimary,
        width: "95%",
        marginVertical: 8,
        paddingHorizontal: 5,
        fontSize: 16
    },
    inputBox: {
        width: "95%",
        height: "40%",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        width: "10%",
        textAlign: "center",
        textAlignVertical: "center"
    },
    input: {
        padding: 10,
        width: "90%",
        height: "100%",
        borderBottomWidth: 1
    },
    passwordInput: {
        padding: 10,
        width: "80%",
        height: "100%",
        borderBottomWidth: 1
    },
    loginButtonContainer: {
        width: "80%",
        height: 60,
        marginVertical: 15,
        borderRadius: 30,
        padding: 10,
        backgroundColor: ocean.primary,
        boxShadow: `0 0 10px ${ocean.primary}`
    },
    loginButtontext: {
        color: ocean.white,
        fontSize: 30,
        textAlign: "center"
    },
    linkContainer: {
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: 50
    },
    signUpText: {
        color: ocean.textDark,
        fontSize: 18
    },
    signUpLink: {
        color: ocean.textSecondary,
        fontSize: 20
    }
});