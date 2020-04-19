import React from 'react';

import { 
    View, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    Button, 
    ScrollView, 
    Image, 
    Dimensions, 
    Animated
} from 'react-native';

import MapView from 'react-native-maps';

const CARD_HEIGHT = Dimensions.get("window").height;
const CARD_WIDTH = Dimensions.get("window").width;

class MapFullView extends React.Component {
    animation = new Animated.Value(0);
    constructor() {
        super()
        this.state = {
            markers: [{
              color: "Yellow",
              id: "KA05JX7838",
              latitude: 37.7982,
              longitude: -122.4314,
              make: "Bajaj",
              model: "RS200",
            },
            {
              color: "Yellow",
              id: "KA05JX7838",
              latitude: 37.7992,
              longitude: -122.4314,
              make: "Bajaj",
              model: "RS200",
            },
            {
              color: "Yellow",
              id: "KA05JX7838",
              latitude: 37.7962,
              longitude: -122.4314,
              make: "Bajaj",
              model: "RS200",
            },
            {
              color: "Yellow",
              id: "KA05JX7838",
              latitude: 37.7952,
              longitude: -122.4314,
              make: "Bajaj",
              model: "RS200",
            }],
            initialRegion: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            },
        }
    }

    toggleDrawer = () => {
      this.props.navigation.toggleDrawer();
    }

    componentDidMount() {
        this.index = 0;
    }

    render() {
        const interpolations = this.state.markers.map((marker, index) => {
            const inputRange = [
                ( index - 1 ) * CARD_WIDTH,
                index * CARD_WIDTH,
                ( index + 1 ) * CARD_WIDTH,
            ];
            const scale = this.animation.interpolate({
                inputRange,
                outputRange: [1, 2.5, 1],
                extrapolate: "clamp"
            });
            const opacity = this.animation.interpolate({
                inputRange,
                outputRange: [0.35, 1, 0.35],
                extrapolate: "clamp"
            });
            return{ scale, opacity }
        })
        return(
            <View style={styles.container}>
                <MapView
                    ref={map => this.map = map}
                    initialRegion={this.state.initialRegion}
                    style={styles.container}
                    >
                    {this.state.markers.map((marker, index) => {
                        const scaleStyle = {
                            transform: [
                              {
                                scale: interpolations[index].scale,
                              },
                            ],
                          };
                          const opacityStyle = {
                            opacity: interpolations[index].opacity,
                          };
                        return (
                          <MapView.Marker 
                              key={index} 
                              coordinate={{latitude: marker.latitude, longitude: marker.longitude}}>
                              <Animated.View style={[styles.markerWrap, opacityStyle]}>
                                  <Animated.View style={[styles.ring, scaleStyle]} />
                                  <Animated.View style={styles.marker} />
                              </Animated.View>
                          </MapView.Marker>
                          );
                    })}
                </MapView>
                <Animated.ScrollView
                    horizontal
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        x: this.animation,
                                    },
                                },
                            },
                        ],
                        { useNativeDriver: true }
                    )}
                    style={styles.scrollView}
                    contentContainerStyle={styles.endPadding}
                    >
                    {this.state.markers.map((marker, index) => (
                        <View style={styles.card} key={index}>
                            <View style={styles.textContent}>
                                <Text numberOfLines={1} style={styles.cardtitle}>{marker.model}</Text>
                            </View>
                        </View>
                    ))}
                </Animated.ScrollView>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      position: "absolute",
      bottom: 30,
      left: 0,
      right: 0,
      paddingVertical: 10,
    },
    endPadding: {
      paddingRight: 10,
    },
    card: {
      padding: 10,
      elevation: 2,
      backgroundColor: "#FFF",
      marginHorizontal: 10,
      shadowColor: "#000",
      shadowRadius: 5,
      shadowOpacity: 0.3,
      shadowOffset: { x: 2, y: -2 },
      height: CARD_HEIGHT/4,
      width: CARD_WIDTH - 30,
      overflow: "hidden",
    },
    cardImage: {
      flex: 3,
      width: "100%",
      height: "100%",
      alignSelf: "center",
    },
    textContent: {
      flex: 1,
    },
    cardtitle: {
      fontSize: 12,
      marginTop: 5,
      fontWeight: "bold",
    },
    cardDescription: {
      fontSize: 12,
      color: "#444",
    },
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
  });

export default MapFullView;