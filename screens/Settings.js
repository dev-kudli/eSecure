import React from 'react';
import {useState} from 'react';

import { Text, View } from 'react-native';
import FlipToggle from 'react-native-flip-toggle-button';
import Colors from '../constants/Colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const Settings = () => {
    const [isActive, setisActive] = useState(false)
    return(
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <FlipToggle 
                value={isActive}
                buttonHeight={30}
                buttonWidth={60}
                buttonRadius={50}
                onToggle={() => {setisActive(!isActive)}}
            />
            <Text>Settings</Text>
        </View>
    )
};


export default Settings;