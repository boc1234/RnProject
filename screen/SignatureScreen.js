import React,{useRef,useLayoutEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import  SignatureViewRef  from 'react-native-signature-canvas';

export default function SignatureScreen({navigation}) {
    const ref = useRef();
    const webstyle = `.m-signature-pad--footer {display: none; margin: 0px;}
    .m-signature-pad {width: 100%; height: 100%; left: 0%;margin-left: 0px;margin-top: 0px;} 
        
    body,html {
        width: 100%; height: 100%; }`;
    useLayoutEffect(()=>{
        navigation.setOptions({headerShown:false})
    })
    return (
        <View style={{flex:1}}>
            
            <SignatureViewRef
            ref ={ref}
            // webStyle={webstyle}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
