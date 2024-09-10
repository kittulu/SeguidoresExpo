import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { UserCurrent } from "./src/components/user-current";
import { FollowerList } from "./src/components/follower-list";
import { useState } from "react";

/* Mude seu userName */
export default function App() {
  const[value, setvalue] = useState<string>('kittulu');

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>GitHub Followers App</Text>
        <UserCurrent userName= {value} /> 
        <FollowerList userName={value} onSelectUser={(userName)=>{setvalue(userName);}} />
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
