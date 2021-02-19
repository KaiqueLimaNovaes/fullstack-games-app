import React from 'react';
import { StyleSheet, Text, ScrollView, TextInput, TouchableOpacity, View } from 'react-native';

export default function Contatos() {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.card} >
        <Text style={styles.title}>Contato</Text>

        <View style={styles.container2}>
          <Text style={styles.cont}>Email:</Text>
          <Text style={styles.cont}>contato@fullstackgames.com</Text>
        </View>

        <View style={styles.container2}>
          <Text style={styles.cont}>Telefone:</Text>
          <Text style={styles.cont}>(11)986634923</Text>
        </View>

        <Text style={styles.label}>Nome:</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Email:</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Mensagem:</Text>
        <TextInput style={styles.input2} />

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.label2}>Enviar</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    container2: {
      marginTop: 20,
      marginBottom: 10,
      height: 50,
    },
    title: {
      marginTop: 20,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    label: {
      marginTop: 20,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    label2: {
      marginTop: 'auto',
      marginBottom: 'auto',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    cont: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    input: {
      width: '90%',
      height: 40,
      borderColor: 'gray', 
      borderWidth: 1,
      marginBottom: 20,
      borderRadius: 5,
      backgroundColor: 'white',
    },
    input2: {
      width: '90%',
      height: 120,
      borderColor: 'gray', 
      borderWidth: 1,
      marginBottom: 20,
      borderRadius: 5,
      backgroundColor: 'white',
    },
    card: {
      marginTop: 50,
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: '#7de3ff',
      width: '95%',
      height: 650,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    btn: {
      marginBottom: 20,
      width: 100,
      height: 40,
      borderRadius: 5,
      backgroundColor: '#24C0EB',
      borderColor: 'gray', 
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });