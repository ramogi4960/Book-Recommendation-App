import BookStyles from "@/assets/styles/bookCardStyles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View } from "react-native";

interface BookRatingProps {
    rating: number
}

export default function BookRating({ rating }: BookRatingProps) {
    return (
        <View
            style={BookStyles.bookRatingContainer}
        >
            {
                [1, 2, 3, 4, 5].map(item => (
                    <FontAwesome
                        name="star"
                        size={24}
                        color={item <= rating ? "gold" : "grey"}
                    />
                ))
            }
        </View>
    );
}