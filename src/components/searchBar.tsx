import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { COLORS } from '../styles/theme';
import Icon from 'react-native-vector-icons/Ionicons'

interface SearchBarProps {
    onChange:(value:string)=>void;
    value:string
}

export const SearchBar = ({value,onChange}:SearchBarProps) => {

  return (
    <View style={styles.container}>
        <TextInput 
            style={styles.inputSearchBar}
            value={value}
            placeholder='Find by name...'
            placeholderTextColor={COLORS.placeholder}
            onChangeText={(val:string)=>{onChange(val)}}
            />
        <Icon name="search" color={COLORS.primary} size={20} style={styles.searchIcon}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        marginVertical:10,
        width:'90%',
        height:30,
        backgroundColor:COLORS.primary,
        paddingLeft:10,
        padding:2,
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center'
    },
    inputSearchBar:{
        height:40,
        width:'90%',
        color:COLORS.black
    },
    searchIcon:{
        backgroundColor:COLORS.secondary,
        padding:3,
        borderRadius:4,
        overflow: 'hidden'
    }
})