import React from 'react'
import {View,Text, Pressable} from 'react-native'
import style from './styles'

const StyledButton = () => {
    return (
        <View style = {style.container}>
            <Pressable style={style.button}  onPress ={ () => {console.warn('Button was pressed')}} >
                <Text style = {style.text}> Custom Order </Text>
            </Pressable>
        </View>
)
}
export default StyledButton