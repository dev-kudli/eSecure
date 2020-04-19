import React from 'react';

import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Colors from '../constants/Colors';

import Home from '../screens/Home';
import Login from '../screens/Login';
import MapFullView from '../screens/MapFullView';
import Settings from '../screens/Settings';
import Notifications from '../screens/Notifications';
import SignUp from '../screens/SignUp';
import VehicleInfo from '../components/VehicleInfo';
import AddVehicle from '../screens/AddVehicle';
import TrackVehicle from '../screens/TrackVehicle';
import { Ionicons } from '@expo/vector-icons';
import VehicleGallery from '../screens/VehicleGallery';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import NavigationOptions from '../constants/NavigationOptions';

const HomePage = createStackNavigator({ 
    Home: Home, 
    VehicleInfo: VehicleInfo,
    AddVehicle: AddVehicle,
    TrackVehicle: TrackVehicle,
    VehicleGallery: VehicleGallery,
}, { defaultNavigationOptions: (navData) => NavigationOptions.Menu(navData) });

const MapPage = createStackNavigator({ Locate: MapFullView }, { defaultNavigationOptions: (navData) => NavigationOptions.Menu(navData) });

const SettingsPage = createStackNavigator({ Settings: Settings }, { defaultNavigationOptions: (navData) => NavigationOptions.Menu(navData) });

const NotificationsPage = createStackNavigator({ Notifications: Notifications }, { defaultNavigationOptions: (navData) => NavigationOptions.Menu(navData) });

// const CustomDrawerComponent = (props) => {
//     <Container>
//         <Header>
//             <Body>
//                 <Image source={require('../assets/Demo.jpg')}/>
//             </Body>
//         </Header>
//     </Container>
// }

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            drawerIcon: () => <Ionicons size={20} name="ios-home" color="purple"/>
        }
    }, 
    Locate: {
        screen: MapPage,
        navigationOptions: {
            drawerIcon: () => <Ionicons size={20} name="ios-pin" color="purple"/>
        }
    },
    Settings: {
        screen: SettingsPage,
        navigationOptions: {
            drawerIcon: () => <Ionicons size={20} name="ios-settings" color="purple"/>
        }
    },
    Notifications: {
        screen: NotificationsPage,
        navigationOptions: {
            drawerIcon: () => <Ionicons size={20} name="ios-notifications" color="purple"/>
        }
    },
}, {

    contentOptions: {
        activeTintColor: Colors.purple,
    }
});

const AppNavigator = createStackNavigator({
    Login: Login,
    SignUp: SignUp,
    Main: { screen: MainNavigator }, 
}, {
        defaultNavigationOptions: {
            headerShown: false,
        }
    }
);
 
export default createAppContainer(AppNavigator);