import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';

export default function Lojas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lojas</Text>
      <SectionList
          sections={[
            {title: 'Loja 1', data: ['São Paulo', 'Rua kaique, 2500', 'Centro', '11 2525-2525']},
            {title: 'Loja 2', data: ['Guarulhos', 'Rua Lima, 2500', 'Centro', '11 2827-2827']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    title: {
      marginTop: 20,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    sectionHeader: {
      marginTop: 20,
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 18,
      fontWeight: 'bold',
      backgroundColor: 'rgba(36, 192, 235, 1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });