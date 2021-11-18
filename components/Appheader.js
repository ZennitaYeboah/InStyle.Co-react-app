import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import cardItemList  from '../Consts/cardItemList';


const Appheader = ({ navigator }) =>
{

    return (
        <View style={{backgroundColor: '#fff'}}>
          <SafeAreaView style={{backgroundColor: "#fff"}}>
              <View style={{backgroundColor: "#fff", flexDirection: 'row', marginTop: 10}}>
                  
                  <Text style={{fontWeight: "bold", fontSize: 24, color: "#000", fontFamily: 'Montserrat_600SemiBold_Italic', backgroundColor: '#fff', marginRight: 10}}>Trending</Text>
                  <Text style={{fontWeight: "bold", fontSize: 24, color: "#fff", marginRight: 10, marginLeft: 8, fontFamily: 'Montserrat_600SemiBold_Italic', backgroundColor: '#000'}}>Hot Sales</Text>
                  <Text style={{fontWeight: "bold", fontSize: 24, color: "#000", fontFamily: 'Montserrat_600SemiBold_Italic', backgroundColor: '#fff'}}>Promos</Text>   
              </View>
    
              <View style={{backgroundColor: "#000"}}>
                  <View style={styles.header}>
                <FontAwesome name="navicon" size={24} color="gray" />
                <View style={{flexDirection:'row', alignItems:'flex-start'}}>
                <Text style={{
                  fontSize: 23,
                  color: '#fff',
                  fontFamily: 'Poppins_700Bold_Italic',
                  letterSpacing: -1.8,
                  paddingLeft: 15,
                }}>
                  InStyle.Co
                </Text>
                
                <AntDesign name="trademark" size={10} color="rgb(235,235,235)" />
                </View>
                                  
              <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity onPress={()=>navigator('LoginPage')}>
                      <AntDesign name="user" size={24} color="white" style={{ marginRight: 10 }} />
                  </TouchableOpacity>
                      <TouchableOpacity onPress={()=>navigator('Bag')}>
                        <FontAwesome name="shopping-bag" size={24} color="white" />
                      </TouchableOpacity>
                    </View>              
                  </View>            
                </View>
              </SafeAreaView>
        </View>
                
    );
}
const styles = StyleSheet.create({
    header: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingBottom: 15
      },
})


export default Appheader;
