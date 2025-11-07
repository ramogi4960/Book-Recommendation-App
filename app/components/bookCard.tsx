import BookStyles from "@/assets/styles/bookCardStyles";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import BookRating from "./bookRating";
import BookTitle from "./bookTitle";

interface BookCardProps {
    userName: string;
    userPhoto: string;
    bookImage: string;
    bookTitle: string;
    bookRating: string;
    bookCaption: string;
}

export default function BookCard({
    userName, userPhoto,
    bookImage, bookTitle,
    bookRating, bookCaption
}: BookCardProps) {
    return (
        <View style={BookStyles.container}>
            <View style={BookStyles.header}>
                <Image
                    source={{
                        uri: userPhoto
                    }}
                    contentFit="cover"
                    style={BookStyles.profileImage}
                />
                <Text style={BookStyles.headingText}>{ userName }</Text>
            </View>
            <Image
                source={{
                    uri: bookImage
                }}
                contentFit="contain"
                style={BookStyles.image}
            />
            <View style={BookStyles.bookDetailsContainer}>
                <BookTitle
                    label={bookTitle}
                />
                <BookRating
                    rating={2}
                />
                <Text>{ bookCaption }</Text>
            </View>
        </View>
    )
}