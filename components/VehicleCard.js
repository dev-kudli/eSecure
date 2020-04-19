import React from 'react';

import { 
    View, 
    StyleSheet, 
    FlatList, 
    Text, 
    TouchableOpacity, 
    Dimensions, 
    Image, 
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const CARD_WIDTH = Dimensions.get("window").width - 60;

function VehicleCard (props) {
    const fetchStatus = (vehicle) => {
      if (vehicle.status == "secured") {
        return (
          <View style={styles.status}>
            <Ionicons 
              name="ios-checkmark-circle" 
              size={22} 
              color="green"/>
            <Text> Secured</Text>
          </View>
        )
      } else {
        return (
          <View style={styles.status}>
            <Ionicons 
              name="ios-alert" 
              size={22} 
              color="orange"/>
            <Text> Alert</Text>
          </View>
        )
      }
    }
    const renderItem = (itemData) => {
        console.log(itemData);
        return(
            <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.push('VehicleInfo', {data: itemData.item})}>
                <View style={styles.card}>
                  <Image 
                    source={require('../assets/Demo.jpg')}
                    style={{ width: '100%', height: '60%' }}/>
                  <View style={styles.textContent}>
                    <View style={styles.column1}>
                      <View>
                        <Text 
                          numberOfLines={1} 
                          style={styles.cardTitle}>
                            {itemData.item.model}
                        </Text>
                        <Text 
                          numberOfLines={1} 
                          style={styles.cardDescription}>
                            {itemData.item.id}
                        </Text>
                      </View>
                      {fetchStatus(itemData.item)}
                    </View>
                    <TouchableOpacity 
                      activeOpacity={0.3} 
                      onPress={() => props.navigation.push('TrackVehicle', {id: itemData.item.id})} 
                      style={styles.column2}>
                      <Ionicons 
                        name="ios-navigate" 
                        size={35} 
                        color="blue" 
                      />
                    </TouchableOpacity>
                  </View>
                </View>
            </TouchableOpacity>
        )
    }
    return(
        <FlatList 
          style={styles.container}
          contentContainerStyle={{paddingBottom: 80}}
          data={props.data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          numColumns={2} 
          logs={props.logs}/>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    scrollView: {
      position: "absolute",
      bottom: 30,
      left: 0,
      right: 0,
      paddingVertical: 10,
    },
    card: {
      elevation: 2,
      margin: 10,
      backgroundColor: "#FFF",
      shadowColor: "#000",
      shadowRadius: 5,
      shadowOpacity: 0.4,
      shadowOffset: { x: 2, y: -2 },
      height: CARD_WIDTH/2,
      width: CARD_WIDTH/2,
      overflow: "hidden",
    },
    textContent: {
      flex: 1,
      flexDirection: 'row',
      width: '100%',
    },
    column1: {
      width: '60%',
      paddingHorizontal: 5
    },
    column2: {
      backgroundColor: '#E6E7E7',
      width: '40%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardTitle: {
      fontSize: 12,
      marginTop: 5,
      fontWeight: "bold",
    },
    cardDescription: {
      fontSize: 12,
      color: "#444",
    },
    status: {
      flexDirection: "row"
    }
  });

export default VehicleCard;