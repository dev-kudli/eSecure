import React from 'react';

import { Text, View } from 'react-native';
import Colors from '../constants/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';


const Notifications = () => {
    return(
        <View 
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Text>Notification</Text>
        </View>
    )
};

export default Notifications;