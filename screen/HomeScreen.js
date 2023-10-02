import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function HomeScreen({navigation}) {
    return (
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate("CameraScreen")}>
                <Text>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("SignatureScreen")}>
                <Text>Signature</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})
