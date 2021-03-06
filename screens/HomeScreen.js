import React from "react"
import {SafeAreaView,StyleSheet} from 'react-native'
import Header from "../components/home/Header"
import Stories from "../components/home/Stories"

const HombreScreen = () => {
    return (
        <SafeAreaView style = {styles.container}>
           <Header/> 
           <Stories/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : { 
        backgroundColor : 'white',
        flex:1
    },
})

export default HombreScreen