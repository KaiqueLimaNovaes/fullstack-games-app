import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Cometarios() {
  return (
    <View style={styles.container}>
      <Text>Comentarios</Text>
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