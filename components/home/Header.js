import React from "react"
import { View, Image , Text,StyleSheet, TouchableOpacity} from "react-native"

const Header = () => { 
    return (
        <View style = {style.container}>
        <TouchableOpacity>
        <Image style = {style.logo} source = {require('../../assets/logo.png')} />
         </TouchableOpacity>
        
        
         <View style = {style.iconsContainers}> 
            <TouchableOpacity>
            <Image style = {style.icons} source = {{uri: 'https://img.icons8.com/fluency-systems-regular/60/000000/plus-2-math.png'}} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style = {style.icons} source = {{uri: 'https://img.icons8.com/fluency-systems-regular/60/000000/like--v1.png'}} />
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={style.unreadBadge}>
                <Text style={style.unreadBadgeText}>11</Text>
            </View>
            <Image style = {style.icons} source = {{uri: 'https://img.icons8.com/fluency-systems-regular/60/000000/facebook-messenger.png'}} />
            </TouchableOpacity>
        </View>
         </View>
    )
}

const style = StyleSheet.create({
    iconsContainers:{
        flexDirection:"row",

    },
    container:{
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        marginHorizontal:20
    },
    logo:{
        width:100,
        height:50,
        resizeMode: 'contain',
        
    },
    icons:{
        width:30,
        height:30,
        marginLeft:10,
        resizeMode:'contain'
    },
    unreadBadge:{
        backgroundColor:'#FF3250',
        position:"absolute",
        left:20,
        bottom:18,
        width:25,
        height:18,
        borderRadius:9,
        alignItems:"center",
        justifyContent:"center",
        zIndex:100,
    },
    unreadBadgeText:{
        color:'white',
        fontWeight:'600',
        
    }
})

export default Header
