import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { users } from '../Consts/cardItemList';
import { Ionicons, SimpleLineIcons, Octicons,Entypo, FontAwesome } from '@expo/vector-icons';

const Myaccount = ({navigation}) => {
    return (
        <SafeAreaView>
            <View style={{ flexDirection: 'row', justifyContent:'space-between', paddingHorizontal:20}}>
                <TouchableOpacity onPress={()=>navigation.navigate('HomePage')}>
                    <Ionicons name="home-outline" size={24} color="black" />
                    <Text style={{ fontWeight:'700', marginLeft: -9.5, color:'rgb(70,70,70)'}}>HOME</Text>
                </TouchableOpacity>
                <View style={{justifyContent:'center'}}>
                    <Text style={{fontWeight:'500', fontSize:19, color:'#000'}}>My Account</Text>
                </View>
                <View style={{justifyContent:'center'}}><SimpleLineIcons name="logout" size={24} color="black" /></View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    inputShadow: {
        shadowColor: '#dfdfdf',
        shadowOpacity: 0.70,
        shadowRadius: 21,
        shadowOffset: {
            width: 2, height: 6,
        }
    },
    AccountList: {
        borderRadius:15,
    }
})

export default Myaccount;
