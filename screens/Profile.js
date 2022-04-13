import { StyleSheet, Text, View,Image } from 'react-native';
import { Card,Title,Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons,Ionicons  } from '@expo/vector-icons'; 


export default function Profile( props ) {
  const {
    id,
    name,
    picture,
    salary,
    email,
    phone,
    position,
  } = props.route.params.item;
  return (
    <View style={styles.container}>
       <LinearGradient
        // Background Linear Gradient
        colors={['#3299a8', '#a3b3b5']}
        style={styles.background}
      />
      <View style={{ alignItems: 'center' }}>

      <Image 
      style={styles.img}
      
      />
      </View>

<View style={styles.title}>

<Title style={{fontSize:22}}>{name}</Title>
<Text style={{fontSize:14,fontWeight:'bold'}}>{position}</Text>

</View>



      <View style={styles.body}> 


          <Card style={styles.cards}  onPress={()=>{ console.log('PressedEmail') }} >
            <View style={styles.cardview}>
              <MaterialIcons  name="email" size={28} color="#3299a8" />
              <Text style={styles.cardtext} > Email: </Text>
              <Text style={{fontSize:15,fontWeight:"400"}} 
              > 
              {email}
              </Text>
            </View>
          </Card>
          <Card style={styles.cards}  onPress={()=>{ console.log('PressedPhone') }} >
            <View style={styles.cardview}>
            <Ionicons name="ios-phone-portrait" size={28} color="#3299a8" />             
              <Text style={styles.cardtext} > Phone: </Text>
              <Text style={{fontSize:20,fontWeight:"400"}} 
              > 
               {phone}
              </Text>
            </View>
          </Card>
          <Card style={styles.cards}  onPress={()=>{ console.log('PressedPhone') }} >
            <View style={styles.cardview}>
            <MaterialIcons name="attach-money" size={28} color="#3299a8" />
                       
              <Text style={styles.cardtext} > Salary: </Text>
              <Text style={{fontSize:20,fontWeight:"400"}} 
              > 
               {salary}
              </Text>
            </View>
          </Card>

            <View>
          

          <View style={styles.buttonpanel}>
              <Button style={styles.btn} icon="camera" theme={theme} mode="contained" onPress={()=>{ console.log('PressedPhone') }}>
              Edit Employee
              </Button>
              <Button style={styles.btn} icon="camera" theme={theme} mode="contained" onPress={()=>{ console.log('PressedPhone') }}>
              Fire Employee
              </Button>
          </View>
              
          </View>
          
          


      </View>



    </View>


  );
}

const theme = {
    colors:{
    primary: '#a3b3b5',
    accent: '#3299a8',
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
  background:{
    height:200,
    width:800,
    position: 'absolute',
  },
  img:{
    height:200,
    width:200,
    borderRadius:200/2,
    borderWidth:5,
    borderColor:"#3299a8",
    marginTop:100,
    
  },
  body:{
    marginTop:30
  },
  cards:{
    marginLeft:30,
    marginRight:30,
    marginTop:12,
    borderRadius:18,
    borderWidth:2,
    borderColor:"#3299a8",
   
  },
  title:{
    alignItems:"center",
    marginTop:10,
    
  },
  cardview:{
    margin:8,
    flexDirection:"row",
    marginLeft:15

  },
  cardtext:{
    
    fontWeight:'bold',
    fontSize:20
  },
  buttonpanel:{

    marginTop:35,
    flexDirection:"row",
    justifyContent:"space-evenly"
  },
  btn:{
      margin:8,
      borderRadius:10,

  }
});