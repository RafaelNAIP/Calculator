import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

export default function Buttons() {
   return (
      <View style={{ width: '100%', height:375 }}>
         <View style={style.btns_num_inside}>
            <TouchableOpacity style={style.btn_single}>
               <Text style={{ fontSize: 30 }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btn_single}>
               <Text style={{ fontSize: 30 }}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btn_single}>
               <Text style={{ fontSize: 30 }}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btn_single}>
               <Text style={{ fontSize: 30 }}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btn_single} >
               <Text style={{ fontSize: 30 }}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btn_single}>
               <Text style={{ fontSize: 30 }}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btn_single}>
               <Text style={{ fontSize: 30 }}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btn_single}>
               <Text style={{ fontSize: 30 }}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btn_single}>
               <Text style={{ fontSize: 30 }}>9</Text>
            </TouchableOpacity>
         </View>
         <View style={{ width: '100%', borderWidth: 1, height: 100, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{height:'100%', width:'100%', justifyContent: 'center', alignItems: 'center'}}>
               <Text style={{ fontSize: 30 }}>0</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}

const style = StyleSheet.create({
   btns_num_inside: {
      flexWrap: "wrap",
      width: '100%',
      height: 300,
   },
   btn_single: {
      borderWidth: 1,
      width: '33.5%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center'
   },
   btn_simb: {
      borderWidth: 1,
      width: '25%',
      height: 45,
      justifyContent: 'center',
      alignItems: 'center'
   }
})