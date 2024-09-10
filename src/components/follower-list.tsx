import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { UserItem } from './user-item';

export interface Props {
  userName: string;
  onSelectUser:(userName:string)=>void;
}

export function FollowerList({ userName, onSelectUser }: Props) {
  const [followers, setFollowers] = useState<any[]>([]);

  useEffect(() => {
    fetchFollowers(userName);
  }, [userName]);
  async function fetchFollowers(userName: string) {
    const res = await fetch(`https://api.github.com/users/${userName}/followers`, {
        headers: {
          Authorization: "token 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"
        }
      });
    const data = await res.json();
    setFollowers(data);
  }

  const renderItem = ({ item }: { item: any }) => (
    <UserItem userName={item.login}
     url={item.avatar_url}
     onSelectUser={onSelectUser} 
     />



  );

  return (
    <FlatList
      data={followers}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    marginVertical: 16,
  },
});
