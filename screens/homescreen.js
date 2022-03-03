import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import QuoteBox from '../tools/quote'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faFacebook, faGithub, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { TouchableOpacity } from 'react-native'
import { Linking } from 'react-native';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);

const HomeScreen = () => {
  return(
    <LinearGradient colors={["#ca309c","#6c39db"]} style={styles.backgroundGradient}>
    <StatusBar backgroundColor={"#ca309c"}/>
     <View style={styles.topBar}>
      <Text style={styles.textStyle}>Mood Quotes</Text>
      <Text style={styles.tagLine}>best quotes to make you motivated</Text>
     </View>
      <QuoteBox/>
      <View style={styles.endTools}>
        <Text style={styles.creatorName}>Made by @ SubhadeepDas</Text>
        <View style={styles.endSocial}>
          <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com/risabh.das.7')}>
            <FontAwesomeIcon icon={faFacebook} style={styles.facebook} size={25}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/sd535682')}>
            <FontAwesomeIcon icon={faGithub} style={styles.github} size={25}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.whatsapp}
          onPress={() => Linking.openURL('https://api.whatsapp.com/send/?phone=918420156446&text&app')}>
            <FontAwesomeIcon icon={faWhatsapp} size={21}/>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
 backgroundGradient:{
   flex:1,
   height:"100%",
   justifyContent:"space-between"
  },
 textStyle:{
    color:"white",
    textAlignVertical:"top",
    fontSize:40,
    marginTop:30,
    paddingBottom:10,
    fontFamily:'FredokaOne-Regular.ttf',
    textAlign:"center",
    textShadowRadius:20,
    textShadowColor:"black",
    textShadowOffset: {height: 1},
  },
  creatorName:{
    color:"white",
    fontSize:15,
    margin:30,
    fontFamily:'JetBrainsMonoNL-ExtraBold',
    textAlignVertical:"center"
  },
  endTools:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  facebook:{
    color:"#00ffb3",
    marginVertical:30,
  },
  github:{
    color:"#fae275",
    marginVertical:30,
    marginLeft:10,
    marginRight:9
  },
  whatsapp:{
    backgroundColor:"#00ff6a",
    borderRadius:20,
    borderWidth:2,
    marginVertical:30,
    marginRight:20,
    borderColor:"#95e214"
  },
  topBar:{
    flexDirection:"column",
  },
  tagLine:{
    color:"white",
    fontSize:15,
    fontFamily:'FredokaOne-Regular.ttf',
    textAlign:"center"
  },
  endSocial:{
    flexDirection:"row",
  },
})