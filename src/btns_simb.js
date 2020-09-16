import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

export default function Buttons(){
   return(
   <View>
          <TouchableOpacity style={style.btn_simb}>
             <Text style={{ fontSize: 30 }}>+</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={style.btn_simb}>
             <Text style={{ fontSize: 30 }}>-</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={style.btn_simb}>
             <Text style={{ fontSize: 30 }}>*</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={style.btn_simb}>
             <Text style={{ fontSize: 30 }}>/</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={style.btn_simb}>
             <Text style={{ fontSize: 30 }}>=</Text> 
          </TouchableOpacity>
  </View>
   )
}

const style = StyleSheet.create({
  btn_simb: {
    borderWidth: 1,
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
 }
})