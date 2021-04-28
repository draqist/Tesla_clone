import React from 'react'
import {View, Text, ImageBackground} from 'react-native'
import styles from './styles'
import StyledButton from '../Buttons/index'

const Cars = () =>{
    return(
        <View style = {styles.carContainer} >
            <ImageBackground 
            source = {require('../../assets/images/ModelS.jpeg')}
             style = {styles.image}      />
            
            < View style = {styles.titles} >
                <Text style = {styles.title}> Model S </Text>
                <Text style  = {styles.subtitle}>  Starting at $69,450</Text>
            </View>

            <StyledButton />
            
        </View>
    )
}

export default Cars