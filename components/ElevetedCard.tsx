import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevetedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Eleveted Card</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>more</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>😂</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize : 24,
        fontWeight:'bold',
        marginLeft:10,
    },
    container:{
        padding:8

    },
    card:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        color:'red',
        width:100,
        height:100,
        margin:5,
        borderRadius:4
    },
    cardElevated:{
        backgroundColor:'#CAD5E2',
        elevation:4,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:'red',
        shadowOpacity:1,
        shadowRadius:2
    }
})