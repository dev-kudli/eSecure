import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from '../screens/axios-init';
import { Ionicons } from '@expo/vector-icons';
import { Left } from 'native-base';
import * as firebase from 'firebase';
import 'firebase/firestore';

// const fire1 = firebase.initializeApp({
//   apiKey: "AIzaSyAAAQ3AuknBA1zvFQtER_lMIl02y7PO2zw",
//   authDomain: "fir-96f6c.firebaseapp.com",
//   projectId: "fir-96f6c",
// });
var logs = firebase.firestore();

class VehicleInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myId: this.props.navigation.state.params.id,
            vehicle: {}
        }
    }
    componentDidMount() {
        // axios.get(`/vehicles/${this.state.myId}.json`)
        //     .then((res) => {
        //         let data = res.data;
        //         this.setState({vehicle: data});
        //     })
        // logs.collection('vehiclelogs').get().then(function(snapshot) {
        //     snapshot.forEach(function(doc) {
        //         console.log(doc.id, "=>", doc.data());
        //     })
        // })
        // logs.collection('vehiclelogs').doc('kudli').collection('mydata').get().then(function(snapshot) {
        //     snapshot.forEach(function(doc) {
        //         console.log(doc.id, "=>", doc.data());
        //     })
        // })
    }
    render() {
        return (
            <TouchableOpacity onPress={() => {
                this.props.navigation.push('VehicleGallery', {data: this.props.navigation.state.params.data});
            }}>
                <View style={styles.list} >
                    <Text style={styles.text}>Gallery</Text>
                    <Ionicons 
                        name="ios-arrow-forward" 
                        size={24} 
                        color="black" 
                    />
                </View>
            </TouchableOpacity>
        )
    }
};

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        justifyContent: 'flex-start',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.8
    },
    text: {
        width: '90%',
        fontSize: 20,
    }
})

export default VehicleInfo;