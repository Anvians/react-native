import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
  
        <View style={[styles.card,styles.cardElevated]}>
        <Image
        source={{
            uri:'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Camelon</Text>
            <Text style={styles.cardLabel}>Cute</Text>
            <Text style={styles.cardDescription}>
                An image is a visual representation.
                An image can be two-dimensional,
                such as a drawing, painting,
                or photograph, or three-dimensional,
                such as a carving or ...
            </Text>
            <Text style={styles.cardFooter}>footer</Text>
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
    card:{
        height:350,
        width:'95%',
        borderRadius:6,
        margin:15,
        
    },
    cardElevated:{
        backgroundColor:'#FFFFFF'
    },
    cardImage:{
        height:200,
        borderTopRightRadius:5,
        borderTopLeftRadius:5
    },
    cardBody:{
        padding:10
    },
    cardTitle:{
        color:'black',
        fontWeight:'bold'
    },
    cardLabel:{
        color:'black',
    },
    cardDescription:{
        color:'black',
    },
    cardFooter:{
        color:'black',
    }
})