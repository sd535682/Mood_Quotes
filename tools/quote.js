import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faQuoteLeft, faQuoteRight, faVolumeHigh, faFeather, faCircle } from '@fortawesome/free-solid-svg-icons'
import Tts from 'react-native-tts'

Tts.setDefaultLanguage('en-GB');
Tts.setDefaultRate(0.3);
Tts.setDefaultPitch(1.1);

const QuoteBox = () => {
//API req
  const [Quote, setQuote] = useState('Loading...');
  const [Author, setAuthor] = useState('Loading...');
//API fetch
  const randomQuote = ()=>{
    fetch('https://api.quotable.io/random').then(res => res.json()).then(result =>{
    console.log(result.content);
    setQuote(result.content);
    setAuthor(result.author);
    })
  }

  useEffect(()=>{
    randomQuote();
  }, [])
// Text to Speech
  const textSpeech = ()=>{
      Tts.stop();
      Tts.speak(Quote + ' by the Author ' + Author)
  }

  return (
    //Gradient
    <LinearGradient colors={["#f1cbe7","#dccef8"]} style={styles.quoteContainer}>
    <View style={styles.threedots}>
        <FontAwesomeIcon icon={faCircle} style={styles.dots}/>
        <FontAwesomeIcon icon={faCircle} style={styles.dots}/>
        <FontAwesomeIcon icon={faCircle} style={styles.dots}/>
    </View>
    {/* Left Quote Icon*/}
        <FontAwesomeIcon icon = {faQuoteLeft} style={styles.leftQuote} size={32}/>
    {/* Fetched Quote */}
        <Text style={styles.quoteStyle} selectable={true}>
            {Quote}
        </Text>
    {/* Right Quote Icon*/}
        <FontAwesomeIcon icon = {faQuoteRight} style={styles.rightQuote} size={32}/>  
    {/* Fetched Author */}     
        <Text style={styles.authorStyle} selectable={true}>
            __ {Author}
        </Text>
    {/* NewQuote Button */}
        <TouchableOpacity style={styles.newquoteButton} onPress={randomQuote}>
            <Text style={styles.newquote}>
                Next Quote
            </Text>
        </TouchableOpacity>
    {/* Bottom Options */}
        <View style={styles.bottomTabs}>
            <TouchableOpacity>
                <FontAwesomeIcon icon={faVolumeHigh} size={25} onPress={textSpeech} color={"#240046"}/>
            </TouchableOpacity>
            <TouchableOpacity> 
                <FontAwesomeIcon icon={faFeather} size={25} color={"#240046"}/>
            </TouchableOpacity>
        </View>
    </LinearGradient>
  )
}

export default QuoteBox

// Styling Options
const styles = StyleSheet.create({
    quoteContainer:{
        width:"90%",
        borderRadius:30,
        padding:20,
        alignSelf:"center"
    },
    leftQuote:{
        alignSelf:"flex-start",
        marginBottom:-30,
        color:"#240046"
    },
    rightQuote:{
        alignSelf:"flex-end",
        marginTop:-30,
        color:"#240046"
    },
    quoteStyle:{
        color:"#4c4c4b",
        fontSize:18,
        textAlign:"center",
        margin:20,
        lineHeight:30,
        fontFamily:'JetBrainsMonoNL-ExtraBold',
        paddingHorizontal:30,
    },
    authorStyle:{
        color:"#4c4c4b",
        fontSize:18,
        textAlign:"right",
        fontFamily:'JetBrainsMono-SemiBold',
        marginTop:10,
    },
    newquoteButton:{
        backgroundColor:"#240046",
        marginVertical:20,
        borderRadius:20,
        padding:15,
    },
    newquote:{
        color:"white",
        fontSize:18,
        textAlign:"center",
        fontFamily:'JetBrainsMonoNL-ExtraBold'
    },
    bottomTabs:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    threedots:{
        flexDirection:"row",
    },
    dots:{
        marginHorizontal:2,
        marginBottom:20,
        color:"#a8a7a7"
    }
})