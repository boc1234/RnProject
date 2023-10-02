import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, Button ,Dimensions, Platform, TouchableOpacity} from 'react-native';

import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
export default function CameraScreen({navigation}) {
    const [{cameraRef},{takePicture}] = useCamera();

    useLayoutEffect(()=>{
        navigation.setOptions({headerShown:false})
    })
    const captureHandle = async()=>{
      // const option = { quatity: 1, base64: true, skipProcessing: true };
        const data = await takePicture();
        console.log(data)
    }
    return (
        <View style={{ flex: 1 }}>
            <RNCamera
                ref={cameraRef}
                type={RNCamera.Constants.Type.back}
                style={{ flex: 1, alignItems: 'center' }}
            >

            </RNCamera>
            <TouchableOpacity onPress={captureHandle}>
                <Text>takePicture</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({

})
