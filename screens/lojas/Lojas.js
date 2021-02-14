import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Lojas() {
  return (
    <View style={styles.container}>
      <Text>lojas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });