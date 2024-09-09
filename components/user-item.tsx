import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export interface Props {
  userName: string;
}

export function UserItem({ userName }: Props) {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    fetchGitUser(userName);
  }, [userName]);

  async function fetchGitUser(userName: string) {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    setUserData(data);
  }

  if (!userData) return null;

  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: userData.avatar_url }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{userData.login}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161b22',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    color: '#f1f1f1',
    fontSize: 16,
  },
});
