import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export interface Props {
  userName: string;
}

export function UserCurrent({ userName }: Props) {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    fetchGitUser(userName);
  }, [userName]);

  async function fetchGitUser(userName: string) {
    const res = await fetch(`https://api.github.com/users/${userName}`,
    {
      headers:{
          Authorization:"token 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"
      }
      });

    const data = await res.json();
    setUserData(data);
  }

  if (!userData) return null;

  return (
    <View style={styles.container}>
      <Image source={{ uri: userData.avatar_url }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{userData.name || userName}</Text>
        <Text style={styles.textMuted}>@{userData.login}</Text>
      </View>
    </View>
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
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    color: '#f1f1f1',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textMuted: {
    color: '#f1f1f1',
    opacity: 0.7,
  },
});
