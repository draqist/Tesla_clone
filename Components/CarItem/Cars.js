import React from 'react'
import {View, Text, ImageBackground} from 'react-native'
import styles from './styles'
import StyledButton from '../Buttons/index'

const Cars = (props) =>{
    const {name, tagline, taglineCTA, image} = props.car
    return(
        <View style = {styles.carContainer} >
            <ImageBackground 
            source = {image}
             style = {styles.image}      />
            
            < View style = {styles.titles} >
                <Text style = {styles.title}> {name} </Text>
                <Text style  = {styles.subtitle}> {tagline} {''}
                    <Text style = {styles.subtitleCTA}> {taglineCTA} </Text>                
                 </Text>
            </View>
            <View style = {styles.buttonContainer}>
            <StyledButton type =  'primary' content = 'Custom Inventory'
             onPress ={ () => {console.warn('Custom Inventory was pressed')}} />
            <StyledButton type = 'secondary' content = 'Existing Inventory'
             onPress ={ () => {console.warn('Existing Inventory was pressed')}}/>
            </View>
            
        </View>
    )
}

export default Cars