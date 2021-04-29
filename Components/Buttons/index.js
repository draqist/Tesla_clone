import React from 'react'
import {View,Text, Pressable} from 'react-native'
import style from './styles'

const StyledButton = ({type, content, onPress}) => {

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6'
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20'
    return (
        <View style = {style.container}>
            <Pressable style={[style.button, {backgroundColor:backgroundColor}]} onPress = {() => onPress()} >
                <Text style = {[style.text, {color:textColor}]} > {content} </Text>
            </Pressable>
        </View>
)
}
export default StyledButton