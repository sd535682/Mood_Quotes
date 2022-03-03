import { StyleSheet, View } from 'react-native'
import React from 'react'
import HomeScreen from './screens/homescreen'
import RNBootSplash from "react-native-bootsplash"

const App = () => {

React.useEffect(()=>{
  RNBootSplash.hide({ fade: true });
}, [])  

  return (
    <View style={styles.appScreen}>
      <HomeScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  appScreen:{
    flex:1
  }
})