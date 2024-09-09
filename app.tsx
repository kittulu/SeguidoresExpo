import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { UserCurrent } from "./components/user-current";
import { FollowerList } from "./components/follower-list";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>GitHub Followers App</Text>
        <UserCurrent userName="DeividFrancis" />
        <FollowerList userName="DeividFrancis" />
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0d1117",
    flex: 1,
  },
  title: {
    color: "#f1f1f1",
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
});
