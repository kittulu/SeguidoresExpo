import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export interface Props {
  userName: string;
  url: string;
  onSelectUser:(userName:String)=>void;

}

export function UserItem({ userName, url, onSelectUser }: Props) {

  return (

    <TouchableOpacity
     style={styles.container} 
    onPress={()=>{console.log('Clicou em '+userName);onSelectUser(userName)}}>
      <Image source={{ uri: url }} style={styles.avatar} />

      <View style={styles.textContainer}>
        <Text style={styles.text}>{userName}</Text>
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
