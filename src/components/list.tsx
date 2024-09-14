import React from 'react'
import { Animated, FlatList, ScrollView, Text, View } from 'react-native'
import { BankObject} from '../interfaces/BankObject.interface'
import { ListItem } from './listItem'

interface ListProps  {
    bankList:BankObject[],
    scrollOffsetY:Animated.Value
}

export const List = ({bankList,scrollOffsetY}:ListProps) => {
  return (
    bankList.length < 1 ?
    <Text>There are no banks to show</Text>
    :
    <FlatList
        data={bankList}
        contentContainerStyle={{paddingTop:110}}
        renderItem={(item)=><ListItem bank={item.item}/>}
        keyExtractor={item => item.description}
        onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: scrollOffsetY } } }
          ],)}
        scrollEventThrottle={16}
      />
  )
}

