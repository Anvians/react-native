import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Card</Text>
      <View style={styles.mainCard}>
        <View style={[styles.card1, styles.card]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card2, styles.card]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card3, styles.card]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card1, styles.card]}>
            <Text>Red</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize : 24,
        fontWeight:'bold',
        marginLeft:10,
    },
    mainCard:{
        flex:1,
        flexDirection:'row',
        padding:8,
    },
    card:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        height:100,
        width:'20000%',
        margin:5,
        borderRadius:5
    },
    card1:{
        backgroundColor:'red',
    },
    card2:{
        backgroundColor:'blue',
    },
    card3:{
        backgroundColor:'green',
    }
})