import React, { useEffect, useRef, useState } from 'react'
import {View, Text, SafeAreaView, StyleSheet, ActivityIndicator, Animated} from  'react-native'
import { COLORS, GlobalStyles, METRICS } from '../styles/theme';
import { API_URL } from '../utils/constants';
import { useFetchBanks } from '../hooks/useFetchBanks';
import { List } from '../components/list';
import { Loader } from '../components/loader';
import { Header } from '../components/header';
import { SearchBar } from '../components/searchBar';


const H_MAX_HEIGHT = 100;
const H_MIN_HEIGHT = 70;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;


export const ListScreen = () => {

    const [searchValue,setSearchValue] = useState<string>('')
    const scrollOffsetY = useRef(new Animated.Value(0)).current;
    const headerScrollHeight = scrollOffsetY.interpolate({
        inputRange: [0, H_SCROLL_DISTANCE],
        outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
        extrapolate: "clamp"
    });

    const headerOpacity = scrollOffsetY.interpolate({
        inputRange: [0, H_SCROLL_DISTANCE],
        outputRange: [1, 0],
        extrapolate: "clamp"
    });

  const {data,isLoading} = useFetchBanks()

  const onSearchChange = (value:string) => setSearchValue(value)
  
  const filteredData = data.filter(bank => bank.bankName.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <View style={styles.container}>
        <Header 
            title='Bank list' 
            height={headerScrollHeight} 
            opacity={headerOpacity}>
            <SearchBar onChange={onSearchChange} value={searchValue}/>
        </Header>
        {
            isLoading ?
            <Loader/>
            :
            <List bankList={filteredData} scrollOffsetY={scrollOffsetY}/>
        }
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.primary
    },
    header:{
        backgroundColor:COLORS.secondary,
        width:METRICS.width,
        justifyContent:'center',
        alignItems:'center',
        overflow: 'hidden',
        position:'absolute',
        zIndex: 999,
        
    },
    content:{
        flex:1,
    },
})
