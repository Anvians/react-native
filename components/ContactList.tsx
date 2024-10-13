import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const userName =[
        {
            uid : 1,
            name : 'Ankit Sharma',
            status : 'Make world Better Place',
            imageurl : 'https://media.gettyimages.com/id/691910455/photo/smiling-businessman-with-brown-bag-walking-in-city.jpg?s=612x612&w=gi&k=20&c=SdwY4B0sF3RMCo7x6C4BluYhwtN4T4AM8iIQzMi1e_Y='
        },
        {
            uid : 2,
            name : 'Triparno Mondal',
            status : 'Make world Better Place',
            imageurl : 'https://media.gettyimages.com/id/691910455/photo/smiling-businessman-with-brown-bag-walking-in-city.jpg?s=612x612&w=gi&k=20&c=SdwY4B0sF3RMCo7x6C4BluYhwtN4T4AM8iIQzMi1e_Y='
        },
        {
            uid : 3,
            name : 'Satyashwa Sarkar',
            status : 'Make world Better Place',
            imageurl : 'https://media.gettyimages.com/id/691910455/photo/smiling-businessman-with-brown-bag-walking-in-city.jpg?s=612x612&w=gi&k=20&c=SdwY4B0sF3RMCo7x6C4BluYhwtN4T4AM8iIQzMi1e_Y='
        },
        {
            uid : 4,
            name : 'Yuvraj Singh',
            status : 'Make world Better Place',
            imageurl : 'https://media.gettyimages.com/id/691910455/photo/smiling-businessman-with-brown-bag-walking-in-city.jpg?s=612x612&w=gi&k=20&c=SdwY4B0sF3RMCo7x6C4BluYhwtN4T4AM8iIQzMi1e_Y='
        }
    ]
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {userName.map(({uid, name, status, imageurl})=>(
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri:imageurl
                }}
                style={styles.userImage}
                />
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
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
        paddingHorizontal:16,
        marginBottom:4
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:4,
        backgroundColor:'#8D3DAF',
        padding:4,
        borderRadius:8
    },
    userImage:{
        height:70,
        width:70,
        borderRadius:70/2,
        marginRight:14,
    },
    userName:{
        fontSize:16,
        color:'#FFF',
        fontWeight:'bold'
    },
    userStatus:{}
})