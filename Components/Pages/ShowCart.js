import { View, Text, Dimensions, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import img from '../Images/backg.png'
import { useSelector } from 'react-redux'
import NumericInput from 'react-native-numeric-input'
import { useDispatch } from 'react-redux'
import { RadioButton } from 'react-native-paper';
import dinner from '../Images/dinner.png'

const { height, width } = Dimensions.get('window')
export default function ShowCart(props) {

    console.log("proppsss", props)
    const [getQty, setQty] = useState(0)
    const [refresh, setRefresh] = useState(false)
    const [length, setLength] = useState(0)
    const [checked, setChecked] = React.useState('first');


    var cart = useSelector(state => state.cart);
    var values = Object.values(cart);
    var totalamt = values.reduce(calculation, 0);

    function calculation(a, b) {
        var price = b.price * b.qtydemand;
        return a + price;
    }
    // console.log("sssss---->", totalamt)
    var dispatch = useDispatch();

    const handleChange = (value, item) => {
        //   console.log("Reduxx dataaaa---->",values)
        if (value == 0) {
            setQty(value)
            item.qtydemand = value;
            dispatch({ type: "REMOVE_ITEM", payload: item.id })
            setRefresh(!refresh)
        } else {
            setQty(value)
            item.qtydemand = value;
            dispatch({ type: "ADD_ITEM", payload: [item.id, item] })
            setRefresh(!refresh)
        }
    }

    var cart = useSelector(state => state.cart);
    var keys = Object.keys(cart);
    console.log('keys', keys.length);

    useEffect(() => {
        setLength(keys.length);
    }, [refresh])



    return (
        <>
            <View style={{ elevation: 3, shadowOffset: { height: 5, width: 5 }, shadowColor: 'red' }} >
                <Image source={img} resizeMode='contain' style={{ height: height * 0.3, width: width, borderWidth: 10 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', width: width * 0.9, flex: 1, position: 'absolute', }}>
                    <TouchableOpacity onPress={() => { props.navigation.navigate("Card") }}>
                        <Text style={{ color: '#999', fontSize: 26 }}>Back</Text>
                    </TouchableOpacity>
                </View>


                <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', width: width * 0.4, backgroundColor: '#999', height: 70, elevation: 5, position: 'absolute', marginTop: 100, borderRadius: 12 }}>
                    <Text style={{ color: 'white', fontSize: 30 }}>Total Cost</Text>
                    <Text style={{ color: 'white', fontSize: 30 }}>{'\u20B9'}{totalamt}</Text>
                </View>

                <View>
                    <Text style={{  fontSize: 38, color: '#999',marginHorizontal:20 }}>Review Order</Text>
                </View>
                <ScrollView >
                    <View>
                        {values.map((item) => {
                            return (

                                <View>
                                    <View style={{ justifyContent: 'center', alignSelf: 'center', width: width * 2, backgroundColor: 'white', height: 140, elevation: 5, flexDirection: 'row', borderRadius: 12 }} >
                                        <View style={{ width: width * 0.70, backgroundColor: 'white', height: 140, borderRadius: 15 }}>

                                            <View style={{ position: 'absolute', marginVertical: 30, elevation: 2, backgroundColor: 'white',marginHorizontal:12 }}>
                                                <Image source={dinner} style={{ width: 80, height: 80 }} />
                                            </View>


                                            <Text style={{ fontSize: 22, paddingLeft: 100, marginTop: 18, color: 'black' }}>{item.name}</Text>
                                            <Text style={{ fontSize: 18, paddingLeft: 100, marginTop: 3, color: 'black' }}>{item.description}</Text>
                                            <Text style={{ fontSize: 18, paddingLeft: 100, marginTop: 2, color: 'black' }}>{'\u20B9'}{item.price}</Text>
                                            <Text style={{ fontSize: 15, paddingLeft: 100, marginTop: 3, color: 'black' }}>{item.status}</Text>
                                        </View>
                                        <View style={{ width: width * 0.30, backgroundColor: 'white', height: 140, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                                            <NumericInput minValue={0} maxValue={10} iconStyle={{ color: 'white' }}
                                                rightButtonBackgroundColor='#EA3788'
                                                leftButtonBackgroundColor='#E56B70'
                                                rounded
                                                totalWidth={100}
                                                //  onChange={value => handleChange(value, item)}
                                                value={getQty} onChange={value => handleChange(value, item)}
                                            />
                                        </View>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>

                <View style={{ marginVertical: 10, marginHorizontal: 15 }}>
                    <Text style={{ color: 'black', fontSize: 28, alignSelf: 'center' }}>Delivery Option</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingRight: 100 }} >
                            <Text style={{ color: 'black', fontSize: 25 }}>DINE-IN</Text><RadioButton
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                            />
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ color: 'black', fontSize: 25 }}> TAKE AWAY</Text>
                            <RadioButton
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('second')}
                            />
                        </View>
                    </View>



                </View>


                <View style={{ backgroundColor: '', justifyContent: 'center', alignSelf: 'center', position: 'absolute', marginVertical: 800 }}>
                    <View style={{ width: width * 10, backgroundColor: '#192a56', alignSelf: 'center', padding: 15, borderRadius: 7, height: height * 0.1 }}>

                        <TouchableOpacity>
                            <Text style={{ color: '#FFF', fontSize: 25, fontWeight: 'bold', letterSpacing: 2, alignSelf: 'center', marginVertical: 5 }}>PLACE ORDER</Text>
                        </TouchableOpacity>

                    </View>

                </View>




            </View>

        </>
    )
}