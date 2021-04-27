import React from 'react'
import {View,Text, Pressable} from 'react-native'
import style from './styles'

const StyledButton = () => {
    return (
        <View>
            <Pressable onPress ={ () => {console.warn('Button was pressed')}}  style={style.buttons}>
                <Text> Custom Order </Text>
            </Pressable>
        </View>
)
}
export default StyledButton