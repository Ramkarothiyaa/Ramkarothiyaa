import { View, Text, Dimensions, Image, } from 'react-native'
import React from 'react'
import Ficon from 'react-native-vector-icons/FontAwesome'
// import food from '../Images/Food.png'

const { height, width } = Dimensions.get('window')

const Header = () => {

    return (
        <>
            <View style={{ opacity: 0.75, backgroundColor: '#111', elevation: 3, shadowOffset: { height: 5, width: 5 }, shadowColor: 'red' }} >
                <Image source={require('./Images/Food.png')} resizeMode='contain' style={{ height: height * 0.3, width: width, borderWidth: 10 }} />
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', width: width * 0.9, flex: 1, position: 'absolute', }}>
                    <Ficon name='user' size={20} color='black' />
                    {/* <Text style={{ color: 'black', backgroundColor: '#111' }}>Icon</Text> */}
                </View>

            </View>

        </>
    )
}

export default Header