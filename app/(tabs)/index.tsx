import { Text, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
export default function HomeScreen() {
  return (
    <View>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
      <Link href="/Profile" style={{ color: "blue" }}>
        Go to profile
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
