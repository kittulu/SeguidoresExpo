import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { UserItem } from './user-item';

export interface Props {
  userName: string;
}

export function FollowerList({ userName }: Props) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchGit(userName);
  }, [userName]);

  async function fetchGit(userName: string) {
    const res = await fetch(`https://api.github.com/users/${userName}/followers`,
  {
    headers:{
        Authorization:"token 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"
    }
    });
    
    const data = await res.json();
    setData(data);
  }

  const renderItem = ({ item }: { item: any }) => (
    <UserItem userName={item.login} />
  );


  return (
    <FlatList
      data={data}
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
