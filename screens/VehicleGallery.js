import React from 'react';
import VehicleCard from '../components/VehicleCard';
import axios from './axios-init';
import { 
    View, 
    Text, 
    Image, 
    ScrollView, 
    StyleSheet, 
    FlatList, 
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Loader from '../components/Loader/Loader';

const IMG_WIDTH = (Dimensions.get("window").width - 50)/2;

class VehicleGallery extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            images: []
        }
    }
    componentDidMount() {
        axios.get(`/vehicles/${this.props.navigation.state.params.data.id}/images.json`)
          .then(res => {
            var tempArray = [];
            var keys = Object.keys(res.data);
            keys.forEach(function(key){
                tempArray.push(res.data[key]);
            });
            this.setState({
                images: tempArray
            });
          })
          .catch(e => {
                console.log(e);
          })
    }

    render() {
        const renderItem = (itemData) => {
            return (
                <TouchableOpacity>
                    <Image style={styles.image} source={{uri: `data:image/jpeg;base64,${itemData.item.base64}`}}/>
                </TouchableOpacity>
            )
        }
        if(this.state.images.length>0)
        {
            return (
                <FlatList
                    style={styles.container}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    data={this.state.images}
                    renderItem={renderItem}
                 />
            )
        }
        else {
            return (
                <Loader />
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    image: {
        width: IMG_WIDTH, 
        height: IMG_WIDTH, 
        margin: 10,
        overflow: 'hidden'
    }
})

export default VehicleGallery;
