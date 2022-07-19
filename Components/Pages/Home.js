import { View, Text, Image, Dimensions, Button } from 'react-native'
import React from 'react'
import food from '../Images/Food.png'
import Header from '../Header'
import { TouchableOpacity } from 'react-native-gesture-handler'

const { height, width } = Dimensions.get('window')

function Home() {

  return (

    <View>
      <Header />

      <View style={{ justifyContent: 'center', alignSelf: 'center', width: width * 0.9, backgroundColor: 'white', height: 200, elevation: 5, position: 'absolute', marginTop: 200 }}>
        <Text style={{ color: "#273c75", fontSize: 25, justifyContent: 'center', alignSelf: 'center', position: 'absolute', top: 16,fontFamily:"serif" }}>Inka Restaurant</Text>
        <Text style={{color:'#999',justifyContent: 'center', alignSelf: 'center',fontSize:20,fontFamily:"serif",marginTop:50}}>⭐ 5.0(200+) | All Days: 09:00 Am -06:00 Pm </Text>
        <Text style={{color:'#999',justifyContent: 'center', alignSelf: 'center',fontSize:20,fontFamily:"serif",marginTop:10}}>📞 Reach us at :9165615682</Text>
      
        <TouchableOpacity
        style={{alignItems: "center",
    backgroundColor: "#192a56",
    padding: 13,width:width*0.4,justifyContent:'center',alignSelf:'center',marginTop:12,borderRadius:14}}
        // onPress={onPress}
      >
        <Text style={{fontSize:22,color:'#f5f6fa',fontFamily:"serif"}}>BOOK A TABLE</Text>
      </TouchableOpacity>

      </View>

    </View>
  )
}










export default Home;