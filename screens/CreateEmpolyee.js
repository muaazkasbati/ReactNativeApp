import React, { useState } from "react";
import { StyleSheet, Modal, Text, View, Image, FlatList } from 'react-native';
import { Card,TextInput,Button,IconButton } from 'react-native-paper';
import *as ImagePicker from "expo-image-picker";
import *as Permissions from "expo-permissions";


export default function CreateEmployee() {

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Position, setPosition] = useState("");
  const [Salary, setSalary] = useState("");
  const [Picture, setPicture] = useState("");
  const [VModal, setModal] = useState("false");
   const pickFromCamera = async() =>{
     const { granted } = await Permissions.askAsync(Permissions.CAMERA);

     if(granted){

      let data = await ImagePicker.launchCameraAsync({
        mediaTypes:ImagePicker.MediaTypeOptions.Images,
        allowsEditing:true,
        aspect:[1,1],
        quality:1,
      })
      if(!data.cancelled){

        let newfile = {
          uri: data.uri ,
          type: `test/${data.uri.split(".")[1]}`,
          name: `test${data.uri.split(".")[1]}`,

        }
        handleupload(newfile);

      } else {
        Alert.alert("Error")
      }
     }
   }

   const pickFromGallery = async() =>{
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if(granted){

     let data = await ImagePicker.launchImageLibraryAsync({
       mediaTypes:ImagePicker.MediaTypeOptions.Images,
       allowsEditing:true,
       aspect:[1,1],
       quality:1,
     })
     if(!data.cancelled){

      let newfile = {
        uri: data.uri ,
        type: `test/${data.uri.split(".")[1]}`,
        name: `test${data.uri.split(".")[1]}`,

      }
      handleupload(newfile);

    } else {
      Alert.alert("Error")
    }
    }
  }

  const handleupload = (image)=> {

    const data = new FormData();

    data.append("file", image);
    data.append("upload_preset", "app1mwf");
    data.append("cloud_name", "muaazkasbati")

    fetch("https://api.cloudinary.com/v1_1/muaazkasbati/image/upload",{

        method: "post",
        body: data,
      }
      )
      .then((res) => res.json())

      .then((data)=>{
        setPicture(data.url);
        setModal(false);
        console.log(data);
      })
      .catch((err) => {
        Alert.alert("error while uploading");
      });

  }

  
  return (
    
      
      
          <View style={styles.container}>

              <View style={styles.formsection}>
              <TextInput
                 label="Name"
                 style={styles.inputs}
                 value={Name}
                 theme={theme}
                 mode="outlined"
                 onChangeText={text => setName(text)}
              />
              <TextInput
                 label="Email"
                 style={styles.inputs}
                 value={Email}
                 theme={theme}
                 mode="outlined"
                 onChangeText={text => setEmail(text)}
              />
              <TextInput
                 label="Position"
                 style={styles.inputs}
                 value={Position}
                 theme={theme}
                 mode="outlined"
                 onChangeText={text => setPosition(text)}
              />
              <TextInput
                 label="Salary"
                 style={styles.inputs}
                 value={Salary}
                 theme={theme}
                 mode="outlined"
                 onChangeText={text => setSalary(text)}
              />
              
              <Button style={styles.btn} theme={theme} icon="upload" mode="contained" onPress={() => setModal(true)}>
                Upload Image
              </Button>
              <Button style={styles.btn} theme={theme} icon="content-save-settings-outline" mode="contained" onPress={() => console.log('Pressed')}>
                Submit
              </Button>  
               </View> 

               <Modal
               animationType="slide"
               transparent={true}
               visible={VModal}
               onRequestClose={() => {
                 setModal(false);
               }}
               >
                 
                 <View style={styles.modalview}>
                 <View style={{  flexDirection:"row",justifyContent:"space-evenly"}}>
                 <Button style={styles.mbtn} theme={theme} icon="camera-plus" mode="contained" onPress={() => pickFromCamera() }>
                    Camera
                  </Button>
                  <Button style={styles.mbtn} theme={theme} icon="image-multiple" mode="contained" onPress={() => pickFromGallery() }>
                    Gallery
                  </Button> 
                 </View>
                 <View style={{alignItems:"center"}}>
                 
                 <IconButton
                      style={styles.cbtn}
                      icon="alpha-x"
                      theme={{ colors:{primary:'#505b5c'} }}
                      size={20}
                      onPress={() => setModal(false)}
                 /> 
                 </View>

                 </View>

               </Modal>




                    </View>
                 




)
      }
      


const theme = {
  colors:{
  primary: '#bacecf',
  accent: '#505b5c',
  }
}

  


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  formsection:{
      margin:10,
      padding:8,
  },
  inputs:{
      margin:5,
  },
  btn:{
      marginTop:20,
  },
  modalview:{
   
    position: "absolute",
    bottom: -30,
    width: "100%",
    height: "18%",
    backgroundColor: "white",
    
  },
  mbtn:{
    margin:10,
    padding: 3,
  },
  cbtn:{
    margin:0,
    width:320,
    justifyContent:"center",
  }

  
});