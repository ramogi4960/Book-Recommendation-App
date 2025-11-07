import { StyleSheet } from "react-native";
import { ocean } from "../colors/colors";

const BookStyles = StyleSheet.create({
    container: {
        height: 400,
        width: "90%",
        backgroundColor: ocean.background,
        borderRadius: 20,
        boxShadow: `0 0 10px ${ocean.primary}`,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    header: {
        height: "10%",
        width: "90%",
        flexDirection: "row",
        alignItems: "center"
    },
    profileImage: {
        height: "90%",
        aspectRatio: 1,
        borderRadius: "50%",
    },
    headingText: {
        fontSize: 18,
        marginHorizontal: 15
    },
    image: {
        height: "50%",
        width: "85%",
        borderRadius: 20,
    },
    bookDetailsContainer: {
        height: "30%",
        width: "85%",
        borderWidth: 1
    },
    bookHeading: {
        fontSize: 20,
        marginHorizontal: 5
    },
    bookRatingContainer: {
        flexDirection: "row",
        gap: 7
    }
});

export default BookStyles;