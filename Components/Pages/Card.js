// import { View, Text, Dimensions ,SafeAreaView,FlatList} from 'react-native'
// import React, { useEffect } from 'react'
// import Header from '../Header'
// import Data from '../Data'

// const { height, width } = Dimensions.get('window')


// function Card(props){
//     return (
//         <SafeAreaView>
//         <View>

//             <Header />

//             <Text style={{ color: 'black', fontSize: 30 }}>Card</Text>


//             <View style={{ justifyContent: 'center', alignSelf: 'center', width: width * 0.9, backgroundColor: 'blue', height: 150, elevation: 5, flexDirection: 'row' }}>

//                 <View style={{ width: width * 0.60, backgroundColor: 'black', height: 150}}>

//                 <Text style={{fontSize:30,paddingLeft:100,marginTop:15}}>Name:</Text>
//                 <Text style={{fontSize:24,paddingLeft:100,marginTop:3}}>description:</Text>
//                 <Text style={{fontSize:18,paddingLeft:100,marginTop:2}}>Price:</Text>
//                 <Text style={{fontSize:14,paddingLeft:100,marginTop:3}}>status:</Text>
//                 </View>

//                 <View style={{ width: width * 0.30, backgroundColor: 'red', height: 150, alignItems: 'center', justifyContent: 'center' }}><Text>bhsbhsdbhfs</Text></View>

//             </View>
//         </View>
// </SafeAreaView>

//     )
// }






// export default Card


import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
  Image
} from 'react-native';
import Data from '../Data';
import { useEffect, useState } from 'react';
import Header from '../Header';
import Home from './Home';
import NumericInput from 'react-native-numeric-input'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { set } from 'react-native-reanimated';
import { useFocusEffect } from '@react-navigation/native';
import dinner from '../Images/dinner.png'

const { height, width } = Dimensions.get('window')

const ProductItem = ({item,props,setRefresh,refresh}) => {
  // console.log('reduxxx propssss--->',props)
  const [getQty, setQty] = useState(0)
  

  var dispatch = useDispatch();
  const handleChange = (value,item) => {
    // console.log("Reduxx dataaaa---->",item.id)
if(value==0){
  setQty(value)
  item.qtydemand = value;
  dispatch({ type: "REMOVE_ITEM", payload:item.id })
  setRefresh(!refresh)
}else{
    setQty(value)
    item.qtydemand = value;
    dispatch({ type: "ADD_ITEM", payload:[item.id,item] })
    setRefresh(!refresh)
    //  props.navigation.setParams({ x: '' })
  }
}


  console.log("dddaattttaaa====>",item.id)

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }} >
      <View style={{ margin: 3 }}>
        <View style={{ justifyContent: 'center', alignSelf: 'center', width: width * 0.9, backgroundColor: 'white', height: 140, elevation: 5, flexDirection: 'row', borderRadius: 12 }}>
          <View style={{ width: width * 0.60, backgroundColor: 'white', height: 140, borderRadius: 15 }}>

<View style={{position:'absolute',marginVertical:25,elevation:5,backgroundColor: 'white'}}>
<Image source={dinner} style={{width: 80, height: 80}} />
</View>
            <Text style={{ fontSize: 22, paddingLeft: 100, marginTop: 18, color: 'black' }}>{item.name}</Text>
            <Text style={{ fontSize: 18, paddingLeft: 100, marginTop: 3, color: 'black' }}>{item.description}</Text>
            <Text style={{ fontSize: 18, paddingLeft: 100, marginTop: 2, color: 'black' }}>{'\u20B9'}{item.price}</Text>
            <Text style={{ fontSize: 15, paddingLeft: 100, marginTop: 3, color: 'black' }}>{item.status}</Text>
          </View>
          <View style={{ width: width * 0.30, backgroundColor: 'white', height: 140, alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}>
            <NumericInput minValue={0} maxValue={10} iconStyle={{ color: 'white' }}
              rightButtonBackgroundColor='#EA3788'
              leftButtonBackgroundColor='#E56B70'
              rounded
              totalWidth={100}
              //  onChange={value => handleChange(value, item)}
              value={getQty} onChange={value => handleChange(value,item)}
            />
          </View>

        </View>
      </View>
    </SafeAreaView>

  );
};



export default function Card (props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [alldata, setallData] = useState([])
  const [getmain, setMainData] = useState('')
  const [getdessert, setDessertData] = useState('');
  const [getdrinks, setDrinksData] = useState('');
  const [getstarter, setStarterData] = useState('');
  
  const [allmodal, setAllModal] = useState(true);
  
  const [starterdefualt, setStarterdefualt] = useState(true)
  
  const [mainstatus, setMainstatus] = useState(false)
  const [dessertstatus, setDessertstatus] = useState();
  const [drinksstatus, setDrinksstatus] = useState();
  const [starterstatus, setStarterstatus] = useState(false);
  // const [flatdata, setFlatdata] = useState(starter);
  const [title, setTitle] = useState('Starter')
  const [length,setLength]=useState(0)
const[refresh,setRefresh]=useState(false)

// console.log('ghhghgh',starter)
  

  var cart = useSelector(state => state.cart);
  var keys = Object.keys(cart);
  console.log('keys', keys.length);
  
  

  // useFocusEffect(
  //   React.useCallback(()=>{
     
  //   },[])
  // )


useEffect(()=>{
  setLength(keys.length);
},[refresh])
  
  const FullData = () => {
    setallData(Data)
    
  }

  useEffect(() => {
    FullData();
    mainCourse();
    Dessert();
    Drinks();
    Starter();
  
    // setAllModal(true)
  }, [])


  function Starter(props) {
    const starterData = Data.filter((ele1) => {
      return ele1.type == 1;
    })
    setStarterData(starterData);
  }

  function mainCourse() {
    const mainCourseData = Data.filter((ele2) => {
      return ele2.type == 2;
    })
    setMainData(mainCourseData);
  }


  function Dessert() {
    const DessertData = Data.filter((ele3) => {
      return ele3.type == 3;
    })
    setDessertData(DessertData);
  }

  function Drinks() {
    const DrinksData = Data.filter((ele) => {
      return ele.type == 4;
    })
    setDrinksData(DrinksData);
  }

  return (
    <>
      <Home />

      <View style={{ marginTop: 150 }}>
        <View><Text style={{ color: 'black', fontSize: 28, marginLeft: 20, fontFamily: 'serlin' }}>{title}</Text></View>

        {
          starterdefualt && <FlatList
            style={{ margin: 9 }}
            data={getstarter}

            renderItem={({ item }) => <ProductItem item={item} props={props}  setRefresh={setRefresh} refresh={refresh} />}
            keyExtractor={item => item.id}
            ListFooterComponent={<View style={{ height: 340 }}></View>}
          />
        }
        {
          starterstatus && <FlatList
            style={{ margin: 9 }}
            data={getstarter}

            renderItem={({ item }) => <ProductItem item={item}  setRefresh={setRefresh} refresh={refresh} />}
            keyExtractor={item => item.id}
            ListFooterComponent={<View style={{ height: 340 }}></View>}
          />
        }
        {
          mainstatus && <FlatList
            style={{ margin: 9 }}
            data={getmain}

            renderItem={({ item }) => <ProductItem item={item} setRefresh={setRefresh} refresh={refresh} />}
            keyExtractor={item => item.id}
            ListFooterComponent={<View style={{ height: 340 }}></View>}
          />
        }
        {
          dessertstatus && <FlatList
            style={{ margin: 9 }}
            data={getdessert}

            renderItem={({ item }) => <ProductItem item={item} setRefresh={setRefresh} refresh={refresh} />}
            keyExtractor={item => item.id}
            ListFooterComponent={<View style={{ height: 340 }}></View>}
          />
        }
        {
          drinksstatus && <FlatList
            style={{ margin: 9 }}
            data={getdrinks}

            renderItem={({ item }) => <ProductItem item={item}  setRefresh={setRefresh} refresh={refresh} />}
            keyExtractor={item => item.id}
            ListFooterComponent={<View style={{ height: 340 }}></View>}
          />
        }
      </View>

      <View style={styles.centeredView} >
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {/* <Text style={styles.modalText}>Hello World!</Text> */}
              {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              > */}

              <TouchableOpacity
                onPress={() => { setModalVisible(!modalVisible); setDessertstatus(false); setDrinksstatus(false); setMainstatus(false); setStarterdefualt(false); setStarterstatus(true); setTitle('Starter') }}
              >
                <Text style={{ color: 'black', fontSize: 24, padding: 4, marginLeft: -54 }}>Starter( {getstarter.length} )</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => { setModalVisible(!modalVisible); setDessertstatus(false); setStarterstatus(false); setDrinksstatus(false); setStarterdefualt(false); setMainstatus(true); setTitle('Main Course') }}
              >
                <Text style={{ color: 'black', fontSize: 24, padding: 4 }}>Main Course ( {getmain.length} )</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { setModalVisible(!modalVisible); setStarterstatus(false); setDrinksstatus(false); setMainstatus(false); setStarterdefualt(false); setDessertstatus(true); setTitle('Dessert') }}>
                <Text style={{ color: 'black', fontSize: 24, padding: 4, marginLeft: -44 }}>Dessert ( {getdessert.length} )</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { setModalVisible(!modalVisible); setStarterstatus(false); setMainstatus(false); setDessertstatus(false); setStarterdefualt(false); setDrinksstatus(true); setTitle('Drinks') }} >
                <Text style={{ color: 'black', fontSize: 24, marginLeft: -55, padding: 4 }}>Drinks ( {getdrinks.length} )</Text>
              </TouchableOpacity>

            </View>

          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>🍽 Manu</Text>
        </Pressable>

      </View>

      <View style={{ backgroundColor: '#111', justifyContent: 'center', alignSelf: 'center', position: 'absolute', marginVertical: 800 }}>
        <View style={{ width: width * 10, backgroundColor: '#192a56', alignSelf: 'center', padding: 15, borderRadius: 7, height: height * 0.1 }}>
          
          <TouchableOpacity onPress={()=>{props.navigation.navigate("ShowCart")}}>
          <Text style={{ color: '#FFF', fontSize: 25, fontWeight: 'bold', letterSpacing: 2, alignSelf: 'center', marginVertical: 5 }}>🛒VIEW CART ({length})</Text>
          </TouchableOpacity>
        
        </View>

      </View>
    </>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    position: 'absolute',
    top: 740
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",

    width: width * 0.5,
    height: height * 0.2,
    position: 'absolute',
    bottom: -60,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 16,
    width: width * 0.3,
    elevation: 2,
    height: 40, justifyContent: 'center'
  },
  buttonOpen: {
    backgroundColor: "#rgb(245, 205, 121)",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 28
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});


