import { Dimensions, StyleSheet } from "react-native"

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const GlobalFontFamily = {
    black:'Lato-Black',
    black_italic:'Lato-Black-Italic',
    bold:'Lato-Bold',
    bold_italic:'Lato-BoldItalic',
    italic:'Lato-Italic',
    light:'Lato-Light',
    light_italic:'Lato-LightItalic',
    regular:'Lato-Regular',
    thin:'Lato-Hairline',
    thin_italic:'Lato-HairlineItalic',

}

export const METRICS = {
    width,
    height
}

export const COLORS = {
    primary:'#ffffff',
    secondary:'#245D4F',
    accent:'#18B3F8',
    danger:'#E04400',
    danger_ligth:'#FEE5DC',
    success:'#389B69',
    success_ligth:'#D6F9D3',
    warnign:'#E8BC36',
    warnign_ligth:'#FFF3D1',
    black:'#000000',
    placeholder:'#A3B0B4'
}

export const GlobalStyles = StyleSheet.create({
    title:{
        fontSize:20,
        color:COLORS.black,
        fontFamily:GlobalFontFamily.bold
    },
    subtitle:{
        fontSize:15,
        color:COLORS.black,
        fontFamily:GlobalFontFamily.bold,
        marginVertical:5
    },
    text:{
        fontSize:12,
        color:COLORS.black,
        fontFamily:GlobalFontFamily.italic,
        marginVertical:5,
        textAlign:'justify'
    },
    info:{
        fontSize:10,
        color:COLORS.black,
        fontFamily:GlobalFontFamily.regular,
        marginVertical:5
    },
    container:{
        flex:1,
        backgroundColor:COLORS.primary,
        padding:5,
    },
    
})