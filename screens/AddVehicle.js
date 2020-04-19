import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

import NavigationOptions from '../constants/NavigationOptions';

class AddVehicle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            make: "",
            model: "",
            vehicleNo: "",
        }
    }

    static navigationOptions = (navData) => NavigationOptions.Back(navData);

    inputHandler = (e, name) => {
        this.setState({
            [name]: e.nativeEvent.text
        })
    }

    saveVehicleData = () => {
        console.log('Data Saved');
    }

    render() {
        return(
            <KeyboardAvoidingView 
                style={styles.container}
                behavior="padding" 
                enabled
                keyboardVerticalOffset={100}
                >
                <ScrollView keyboardShouldPersistTaps='handled'>
                    <View style={styles.image}>
                        <Ionicons 
                            name="ios-image"
                            size={40}
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={styles.inputName}>Make</Text>
                        <TextInput 
                            style={styles.inputField}
                            //placeholder="Add vehicle name"
                            onChange={(e) => this.inputHandler(e, "make")}
                            value={this.state.make}
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={styles.inputName}>Model</Text>
                        <TextInput 
                            style={styles.inputField}
                            //placeholder="Add vehicle name"
                            onChange={(e) => this.inputHandler(e, "model")}
                            value={this.state.model}
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={styles.inputName}>Vehicle Number</Text>
                        <TextInput 
                            style={styles.inputField}
                            //placeholder="Add vehicle number"
                            onChange={(e) => this.inputHandler(e, "vehicleNo")}
                            value={this.state.vehicleNo}
                        />
                    </View>
                </ScrollView>
                <TouchableOpacity 
                    activeOpacity={0.8} 
                    onPress={this.saveVehicleData} 
                    style={styles.saveButton}>
                    <Ionicons 
                        name="ios-checkmark" 
                        color={Colors.gold} 
                        size={38} 
                    />
                    <Text style={styles.saveButtonText}>    Save</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
};

styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
        flexDirection: 'column',
        //backgroundColor: 'green'
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        borderColor: '#AAA',
        borderWidth: 0.6,
        borderRadius: 15,
        margin: 10,
        marginBottom: 20,
        padding: 0
    },
    inputBox: {
        paddingHorizontal: 5,
        paddingTop: 5,
        marginVertical: 10,
        backgroundColor: "#E8E8E8",
    },
    inputName: {
        fontSize: 14,
        color: '#555'
    },
    inputField: {
        borderBottomWidth: 1.2,
        borderColor: Colors.black,
        fontSize: 18
    },
    saveButton: {
        position: 'absolute',
        bottom: 30,
        right: 15,
        backgroundColor: Colors.black,
        paddingHorizontal: 20,
        paddingVertical: 2,
        borderRadius: 22,
        flexDirection: 'row',
        alignItems: 'center'
    },
    saveButtonText: {
        fontSize: 16,
        color: Colors.gold
    }
})

export default AddVehicle;