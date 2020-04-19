import React from 'react';
import { StyleSheet, Animated, TouchableOpacity, View, Text } from 'react-native'
import MapView, { AnimatedRegion } from 'react-native-maps';
import axios from '../screens/axios-init';
import { Ionicons } from '@expo/vector-icons';

class TrackVehicle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            markers: [{
                latitude: 37.77825,
                longitude: -122.4324,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            }],
            initialRegion: {
                latitude: 37.77825,
                longitude: -122.4324,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            },
            freeRegion: {
                latitude: 37.77825,
                longitude: -122.4324,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
            },
            autoFocus: true
        }
    }

    updateState = () => {
        axios.get('/vehicles/KA05JX7838.json')
            .then(res => {
                const myData = res.data
                //console.log(Object.keys(myData));
                const tempArray = []
                const myObj = {
                    latitude: myData.location.latitude,
                    longitude: myData.location.longitude,
                    latitudeDelta: 0.2,
                    longitudeDelta: 0.2,
                }
                tempArray.push(myObj);
                this.setState({
                    markers: tempArray,
                    initialRegion: {
                        latitude: 37.77825,
                        longitude: -122.4324,
                        latitudeDelta: 0.2,
                        longitudeDelta: 0.2,
                    }
                })
                console.log('from firebase:', myData[Object.keys(myData)[4]]);
            })
            .catch(error => {
                console.log(error);
            })
    }

    componentDidMount() {
        this.interval = setInterval(() => {this.updateState()}, 4000)
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getMapRegion = () => {
        console.log("rendering getMapRegion()...");
        //return this.state.markers[0]
        if (this.state.autoFocus) {
            return this.state.markers[0]
        } else {
            return this.state.freeRegion
        }
    }

    regionChange = (region) => {
        if (this.state.markers[0].latitude==region.latitude && this.state.markers[0].longitude==region.longitude) {
            this.setState({
                freeRegion: region
            })
        }
    }

    recenter = () => {
        console.log("rendering recenter()...");
        this.setState(prevState => ({
            freeRegion: prevState.markers[0],
            autoFocus: true
        }))
    }

    render() {
        console.log(this.state.autoFocus);
        return (
            <View style={{flex: 1}}>
                <MapView 
                    style={{flex: 1}}
                    ref={map => this.map = map}
                    initialRegion={this.state.initialRegion}
                    region={this.getMapRegion()}
                    onRegionChangeComplete={(region) => this.regionChange(region)}
                >
                    {this.state.markers.map((marker, index) => {
                        return (
                          <MapView.Marker 
                            key={index}
                              coordinate={{latitude: marker.latitude, longitude: marker.longitude}}>
                              <Animated.View style={styles.markerWrap}>
                                  <Animated.View style={styles.ring} />
                                  <Animated.View style={styles.marker} />
                              </Animated.View>
                          </MapView.Marker>
                          );
                    })}
                </MapView>
                <TouchableOpacity onPress={this.recenter} activeOpacity={0.6} style={styles.recenterButton}>
                    <Ionicons
                        name="md-locate"
                        color="blue"
                        size={30}
                    />
                </TouchableOpacity>
                </View>
            )
    }
};

const styles = StyleSheet.create({
    markerWrap: {
        alignItems: "center",
        justifyContent: "center",
        width: 70,
        height: 70
    },
    marker: {
      width: 15,
      height: 15,
      borderRadius: 8,
      backgroundColor: "rgba(0,4,150, 0.9)",
    },
    ring: {
        width: 24,
        height: 24,
        borderRadius: 25,
        backgroundColor: "rgba(130,4,150, 0.3)",
        position: "absolute",
        borderWidth: 1,
        borderColor: "rgba(130,4,150, 0.5)",
    },
    recenterButton: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        borderRadius: 20,
        backgroundColor: "#f2f2f2",
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default TrackVehicle;