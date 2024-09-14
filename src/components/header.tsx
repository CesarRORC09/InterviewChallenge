import React, { useEffect } from 'react'
import { Animated, StyleSheet} from 'react-native';
import { COLORS, GlobalStyles, METRICS } from '../styles/theme';

interface HeaderProps  {
    title:string;
    height:Animated.AnimatedInterpolation<string | number>;
    opacity:Animated.AnimatedInterpolation<string | number>;
    children?:JSX.Element;
}

export const Header = ({title,height,children,opacity}:HeaderProps) => {
    useEffect(()=>{
        console.log(opacity)
    },[height])
    return (
        <Animated.View style={[styles.header,{height:height}]}> 
            <Animated.Text style={[GlobalStyles.title,{color:COLORS.primary,opacity:opacity}]}>{title}</Animated.Text>
            {children}
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:COLORS.secondary,
        width:METRICS.width,
        justifyContent:'center',
        alignItems:'center',
        overflow: 'hidden',
        position:'absolute',
        zIndex: 999,
        
    },
})