import React from 'react';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import axios from './axios-init';
import VehicleCard from '../components/VehicleCard';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import firebaseConfig from '../config/Fire';
import Loader from '../components/Loader/Loader';
import * as firebase from 'firebase';

import { 
    View, 
    Alert,
    Image,
    ScrollView, 
    StyleSheet, 
    FlatList, 
    Text, 
    TouchableOpacity, 
    Dimensions, 
    Animated
} from 'react-native';

const fire = firebase.initializeApp(firebaseConfig);
var db = fire.database();

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            firebaseData: [{
              color: "Yellow",
              id: "KA05JX7838",
              latitude: 37.7982,
              longitude: -122.4314,
              make: "Bajaj",
              model: "RS200",
              status: "secured"
            }, {
              color: "Yellow",
              id: "KA05JX7838",
              latitude: 37.7982,
              longitude: -122.4314,
              make: "Bajaj",
              model: "RS200",
              status: "alert"
            }],
            pushData: {
              color: "Yellow",
              id: "KA05JX7839",
              latitude: 37.7982,
              longitude: -122.4314,
              make: "Bajaj",
              model: "RS200",
              status: "alert"
            },
            image: ''
          }
    }

    componentDidMount() {
      this.checkPermission();
      this.messageListener();
      // axios.get('/vehicles.json')
      //     .then(res => {
      //         var tempArray = [];
      //         var keys = Object.keys(res.data);
      //         keys.forEach(function(key){
      //             tempArray.push(res.data[key]);
      //         });
      //         this.setState({ firebaseData: tempArray });
      //         //console.log(this.state.firebaseData);
      //     })
      //     .catch(error => {
      //         console.log(error);
      //     })
    }
    
    checkPermission = async () => {
      const enabled = await firebase.messaging().hasPermission();
      if (enabled) {
          this.getFcmToken();
      } else {
          this.requestPermission();
      }
    }

    getFcmToken = async () => {
      const fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        console.log(fcmToken);
      } else {
          console.log("Token error");
      }
    }

    requestPermission = async () => {
      try {
        await firebase.messaging().requestPermission();
        // User has authorised
      } catch (error) {
          // User has rejected permissions
          throw error;
      }
    }

    messageListener = async () => {
      this.notificationListener = firebase.notifications().onNotification((notification) => {
        const { title, body } = notification;
        this.showAlert(title, body);
      });
     
      this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
        const { title, body } = notificationOpen.notification;
        this.showAlert(title, body);
      });
     
      const notificationOpen = await firebase.notifications().getInitialNotification();
      if (notificationOpen) {
        const { title, body } = notificationOpen.notification;
        this.showAlert(title, body);
      }
     
      this.messageListener = firebase.messaging().onMessage((message) => {
       console.log(JSON.stringify(message));
      });
     }

     showAlert = (title, message) => {
      Alert.alert(
       title,
       message,
       [
        {text: "OK", onPress: () => console.log("OK Pressed")},
       ],
       {cancelable: false},
      );
     }

    postData = (id, data) => {
      db.ref('vehicles/' + id).set(data, (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Updated successfully!");
        }
      });
    }

    render() {
      if (this.state.firebaseData.length==0) {
        return (
          <Loader />
        )
      } else {
        return (
          <View style={{ flex: 1, width: '100%', height: '100%' }}>
            <VehicleCard 
              data={this.state.firebaseData}
              navigation={this.props.navigation}
              //logs={logs}
            />
            <View style={{
                backgroundColor: 'grey', 
                height: 50, 
                width: 50, 
                position: 'absolute',
                bottom: 40,
                right: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 25
                }}
              >
              <Ionicons 
                onPress={() => this.props.navigation.push('AddVehicle')}
                name="ios-add" 
                color="black" 
                size={60} 
              />
            </View>
          </View>
        )
      }
    }
}

export default Home;