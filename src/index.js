import React from 'react'
import { StyleSheet, View, TouchableOpacity, TextInput, Text, FlatList } from 'react-native'

import Btns_Num from './btns_num'
import Btns_Simb from './btns_simb'


export default function Calculator() {
  return(
    <View style={styles.container_total}>
      <View style={styles.result_bar}>
        <Text style={{ fontSize: 90 }}>0</Text>
      </View>
      <View style={styles.btns_total}>
        <View style={{ width:'75%' }}>
          <Btns_Num />
        </View>
        <View style={{ width:'25%' }}>
          <Btns_Simb />
        </View>
      </View>
    </View>
  )
    
}


const styles = StyleSheet.create({
  container_total: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: 'center'
  },
  result_bar: {
    height: '20%',
    marginTop: '8%',
    width: '98%',
    borderWidth: 1,
    alignItems: 'flex-end',
  },
  btns_total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }

});

