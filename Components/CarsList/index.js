import React from 'react'
import {View, FlatList, Dimensions} from 'react-native'
import cars from './cars'
import Cars from '../CarItem/Cars'
import styles from './styles'

const CarsList = () => {
return (
    <View style = {styles.container}>
        <FlatList  data = {cars} 
            keyExtractor = {carz => carz.name}
            renderItem = {({item}) => <Cars car = {item} />}  
            snapToAlignment = {'start'}
            decelerationRate = {'fast'}
            snapToInterval = {Dimensions.get('window').height}  
         />
    </View>
)
}

export default CarsList