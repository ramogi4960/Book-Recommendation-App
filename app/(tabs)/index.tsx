import { ScrollView, Text } from "react-native";
import BookCard from "../components/bookCard";

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      <Text>BookTator</Text>
      <BookCard
        userName="John Doe"
        userPhoto="https://media.istockphoto.com/id/1316947194/vector/messenger-profile-icon-on-white-isolated-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=1iQ926GXQTJkopoZAdYXgU17NCDJIRUzx6bhzgLm9ps="
        bookTitle="48 Laws of Power"
        bookRating="Rating"
        bookCaption="Caption or details"
        bookImage="https://savanisbookcentre.co.ke/wp-content/uploads/2024/03/48-laws-of-power.jpg"
      />
    </ScrollView>
  );
}