import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

class Loader extends React.Component {
    render() {
      return (
        <View style={styles.container}>
            <Text>Loading...</Text>
        </View>
      );
    }
}
export default Loader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E2E2E2',
        justifyContent: 'center',
        alignItems: 'center'
    }
});