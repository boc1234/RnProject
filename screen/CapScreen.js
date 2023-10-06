import React, { useRef, useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View, Image, PermissionsAndroid } from 'react-native'
// import { CameraRoll } from '@react-native-community/cameraroll';
import ViewShot from "react-native-view-shot";
import { captureRef } from 'react-native-view-shot';
import RNFetchBlob from "rn-fetch-blob";
import RNFS from 'react-native-fs';
import { CameraRoll } from "@react-native-camera-roll/camera-roll"
export default function CapScreen() {
    const ref = useRef();
    const viewToSnapshotRef = useRef();
    const [image, setImage] = useState();
 
    useEffect(()=>{
        const permission = async ()=>{
            try {
                const granted = await PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                  {
                    title: "Cool Photo App Camera Permission",
                    message:
                      "Your app needs permission.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                  }
                  
                );
          
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                  return true;
                } else {
                  console.log("Camera permission denied");
                  return false;
                }
              } catch (err) {
                console.warn(err);
                return false;
              }
        }
        permission()
        checkStoragePermission()
      
    },[])
    async function checkStoragePermission() {
        try {
          const hasPermission = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
          );
          console.log(hasPermission)
          return hasPermission;
        } catch (err) {
          console.warn(err);
          return false;
        }
      }
    onClick = async () => {
        // ref.current.capture().then(uri => {
        //     console.log("do something with ", uri);
        //     setImage(uri)
        //     saveImageToGallery(uri)
        // });

        const result = await captureRef(viewToSnapshotRef, {
            format: "jpg",
            quality: 0.8,

        });

        setImage(result)
        // console.log(result)
        // saveImageToGallery(result)
        save(result)
    }
    const save = async (url) => {

        try {
            const granted = await PermissionsAndroid.request(
                
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Permission to Save Image',
                    message: 'Your app needs permission to save images to the gallery.',
                    buttonPositive: 'OK',
                }
            );

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
             
                CameraRoll.save(url)
                // MyImageModule.saveImageToGallery(url, (result) => {
                //     if (result === 'success') {
                //       console.log('Image saved to gallery');
                //     } else {
                //       console.log('Error saving image to gallery');
                //     }
                //   });
                // RNFS.copyFile(url, RNFS.PicturesDirectoryPath + '/your-image.jpg')
                //     .then((res) => {
                //         console.log(res)
                //         console.log('Image saved to gallery');
                //     })
                //     .catch((error) => {
                //         console.error('Error saving image to gallery:', error);
                //     });
            } else {
                console.log('Permission denied.');
            }
        } catch (error) {
            console.error('Error saving image to gallery:', error);
        }
    }

    const saveImageToGallery = async (filePath) => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Permission to Save Image',
                    message: 'Your app needs permission to save images to the gallery.',
                    buttonPositive: 'OK',
                }
            );

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                const pathWithoutFileProtocol = filePath.replace('file://', '');
                console.log(pathWithoutFileProtocol)
                const mediaScanner = RNFetchBlob.android.actionViewIntent(
                    pathWithoutFileProtocol,
                    'image/jpeg'
                );
                mediaScanner.then((res) => {
                    console.log(res)
                    console.log('Image saved to gallery.');
                }).catch((error) => {
                    console.log(error)
                });
            } else {
                console.log('Permission denied.');
            }
        } catch (error) {
            console.error('Error saving image to gallery:', error);
        }
    };
    return (
        <View style={{ flex: 1 }}>
            {/* <ViewShot ref={ref} options={{ fileName: "screenshot", format: "jpg", quality: 0.9 }}>
        
                <Text>...Something to rasterize...</Text>
           
               

            </ViewShot> */}
            <View ref={viewToSnapshotRef} style={{ flex: 1, backgroundColor: 'red' }}>
                <View>
                    <Text style={{ fontSize: 50 }}>test</Text>
                </View>
            </View>
            <Button onPress={onClick} title="save">\</Button>
            <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }} // ปรับขนาดตามที่คุณต้องการ
            />
        </View>

    )
}

const styles = StyleSheet.create({})
