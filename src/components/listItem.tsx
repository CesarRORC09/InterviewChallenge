import { View, Text, StyleSheet, Image } from "react-native"
import { BankObject } from "../interfaces/BankObject.interface"
import { COLORS, GlobalStyles } from "../styles/theme"

interface ListItemProps {
    bank:BankObject
}

export const ListItem = ({bank}:ListItemProps) => {
    return (
    <View style={[styles.container,styles.shadow]}>
        <Image source={{uri:bank.url}} style={styles.image} />
        <View style={styles.content}>
            <Text style={GlobalStyles.subtitle}> {bank.bankName}</Text>
            <Text style={GlobalStyles.text}> {bank.description}</Text>
            <Text style={GlobalStyles.info}> Años desde su fundación: {bank.age.toString()}</Text>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLORS.primary,
        marginVertical:5,
        paddingHorizontal:20,
        paddingVertical:20,
        flexDirection:'row',
        marginHorizontal:5,
        borderRadius:10
    },
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.7,
        elevation: 5,
    },
    image:{
        height:80, 
        width:80,
        resizeMode:'stretch',
        borderRadius:5
    },
    content:{
        flex:1, 
        paddingHorizontal:5,
        marginLeft:15
    }
})