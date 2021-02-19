import React from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity, Image, View } from 'react-native';

export default function Produtos() {
  return (
    <ScrollView style={styles.container}>
      <Text>produtos</Text>

      <TouchableOpacity style={styles.cardArtigos} >
        <Image style={styles.imgArtigos} source={require('../../assets/produtos/ps5.png')} />
        <Text style={styles.textArtigos}>Playstation 5</Text>
        <View style={styles.line} />
        <Text style={styles.textArtigosP}>R$4600</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardArtigos} >
        <Image style={styles.imgArtigos} source={require('../../assets/produtos/ps4.png')} />
        <Text style={styles.textArtigos}>Playstation 4</Text>
        <View style={styles.line} />
        <Text style={styles.textArtigosP}>R$2400</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardArtigos} >
        <Image style={styles.imgArtigos} source={require('../../assets/produtos/seriesX.png')} />
        <Text style={styles.textArtigos}>Xbox series X</Text>
        <View style={styles.line} />
        <Text style={styles.textArtigosP}>R$4990</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardArtigos} >
        <Image style={styles.imgArtigos} source={require('../../assets/produtos/seriesS.png')} />
        <Text style={styles.textArtigos}>Xbox series S</Text>
        <View style={styles.line} />
        <Text style={styles.textArtigosP}>R$2990</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardArtigos} >
        <Image style={styles.imgArtigos} source={require('../../assets/produtos/one.png')} />
        <Text style={styles.textArtigos}>Xbox one</Text>
        <View style={styles.line} />
        <Text style={styles.textArtigosP}>R$2400</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardArtigos} >
        <Image style={styles.imgArtigos} source={require('../../assets/produtos/controlePs5.png')} />
        <Text style={styles.textArtigos}>Controle ps5</Text>
        <View style={styles.line} />
        <Text style={styles.textArtigosP}>R$499</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardArtigos} >
        <Image style={styles.imgArtigos} source={require('../../assets/produtos/controleXboxSeries.png')} />
        <Text style={styles.textArtigos}>Controle xbox</Text>
        <View style={styles.line} />
        <Text style={styles.textArtigosP}>R$499</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardArtigos} >
        <Image style={styles.imgArtigos} source={require('../../assets/produtos/headsetPs5.png')} />
        <Text style={styles.textArtigos}>Headeset ps5</Text>
        <View style={styles.line} />
        <Text style={styles.textArtigosP}>R$599</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardArtigos} >
        <Image style={styles.imgArtigos} source={require('../../assets/produtos/spPs5.png')} />
        <Text style={styles.textArtigos}>Spiderman ps5</Text>
        <View style={styles.line} />
        <Text style={styles.textArtigosP}>R$349</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardArtigos} >
        <Image style={styles.imgArtigos} source={require('../../assets/produtos/scPs5.png')} />
        <Text style={styles.textArtigos}>Sackboy ps5</Text>
        <View style={styles.line} />
        <Text style={styles.textArtigosP}>R$299</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardArtigos} >
        <Image style={styles.imgArtigos} source={require('../../assets/produtos/dsPs5.png')} />
        <Text style={styles.textArtigos}>Demon souls ps5</Text>
        <View style={styles.line} />
        <Text style={styles.textArtigosP}>R$349</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardArtigos} >
        <Image style={styles.imgArtigos} source={require('../../assets/produtos/cyPs4.png')} />
        <Text style={styles.textArtigos}>Cyberpunk 2077 ps4</Text>
        <View style={styles.line} />
        <Text style={styles.textArtigosP}>R$249</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardArtigos} >
        <Image style={styles.imgArtigos} source={require('../../assets/produtos/pc3Xbox.png')} />
        <Text style={styles.textArtigos}>Project cars xbox</Text>
        <View style={styles.line} />
        <Text style={styles.textArtigosP}>R$169</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardArtigos} >
        <Image style={styles.imgArtigos} source={require('../../assets/produtos/rd2Xbox.png')} />
        <Text style={styles.textArtigos}>Red dead 2 xbox</Text>
        <View style={styles.line} />
        <Text style={styles.textArtigosP}>R$149</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardArtigos} >
        <Image style={styles.imgArtigos} source={require('../../assets/produtos/ngamer.png')} />
        <Text style={styles.textArtigos}>Notebook gamer</Text>
        <View style={styles.line} />
        <Text style={styles.textArtigosP}>R$4990</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardArtigos} >
        <Image style={styles.imgArtigos} source={require('../../assets/produtos/pcgamer.png')} />
        <Text style={styles.textArtigos}>Pc gamer</Text>
        <View style={styles.line} />
        <Text style={styles.textArtigosP}>R$6790</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    cardArtigos: {
      marginTop: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: '#7de3ff',
      width: 340,
      height: 450,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    imgArtigos: {
      width: 300,
      height: 300,
    },
    textArtigos: {
      fontSize: 28,
      fontWeight: 'bold',
    },
    textArtigosP: {
      fontSize: 23,
      fontWeight: 'bold',
    },
    line:{
      width: '90%',
      height: 3,
      backgroundColor: 'black',
    }
  });