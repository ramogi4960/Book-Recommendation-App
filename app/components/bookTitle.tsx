import BookStyles from "@/assets/styles/bookCardStyles";
import { Text } from "react-native";

interface BookTitleProps {
    label: string;
}

export default function BookTitle({ label }: BookTitleProps) {
    return (
        <Text style={BookStyles.bookHeading} >{ label }</Text>
    );
}