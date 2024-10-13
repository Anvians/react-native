import { Image, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Action Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerElement}>What's new in javaScript</Text>
        </View>
        <Image
        source={{
            uri:'data:image/jpeg;base64,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'
        }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                It looks like the app is launching on
                the emulator, but the connection to the
                development server (Metro bundler)
                is not stable, or it has stopped.Here are
                some steps to resolve this issue:
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity 
            onPress={() => openWebsite('https://google.com')}
            >
                <Text style={styles.socialLink}>Read More</Text>
            </TouchableOpacity>
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
        width:'95%',
        height:340,
        borderRadius:4,
        marginVertical:12,
        marginHorizontal:16
        },
    elevatedCard:{
        backgroundColor:'#154c79',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:'#333',
        shadowOpacity:0.5
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center'
    },
    headerElement:{
        fontSize:16,
        fontWeight:'600'
    },
    cardImage:{
        height:200,
    },
    bodyContainer:{
        padding:10
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    socialLink:{
        fontSize:16,
        
    },
})