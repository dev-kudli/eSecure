import React from 'react';

import Colors from '../constants/Colors';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

export default NavigationOptions = {
    Menu: function(navData) {
        return {
            headerStyle: { backgroundColor: Colors.black },
            headerTitleStyle: { 
              color: 'white', 
              flex: 1, 
              textAlign: "center"
            },
            headerLeft: () => {
                return(
                  <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                      title="Favorite"
                      iconName="ios-menu"
                      color={Colors.gold}
                      onPress={() => { navData.navigation.toggleDrawer(); }}
                    />
                </HeaderButtons>
                )}
        }
    },
    Back: function(navData) {
        return {
            headerStyle: { backgroundColor: Colors.black },
            headerTitleStyle: { 
              color: 'white', 
              flex: 1, 
              textAlign: "center"
            },
            headerLeft: () => {
                return(
                  <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                      title="Favorite"
                      iconName="ios-arrow-back"
                      color={Colors.gold}
                      onPress={() => { navData.navigation.goBack(); }}
                    />
                </HeaderButtons>
                )}
        }
    }
}
export const NavigationOptionsMenu = (navData) => {
    return {
        headerStyle: { backgroundColor: Colors.black },
        headerTitleStyle: { 
          color: 'white', 
          flex: 1, 
          textAlign: "center"
        },
        headerLeft: () => {
            return(
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Favorite"
                  iconName="ios-menu"
                  color={Colors.gold}
                  onPress={() => { navData.navigation.toggleDrawer(); }}
                />
            </HeaderButtons>
            )}
    }
};

export const NavigationOptionsBack = (navData) => {
    return {
        headerStyle: { backgroundColor: Colors.black },
        headerTitleStyle: { 
          color: 'white', 
          flex: 1, 
          textAlign: "center"
        },
        headerLeft: () => {
            return(
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Favorite"
                  iconName="ios-arrow-back"
                  color={Colors.gold}
                  onPress={() => { navData.navigation.toggleDrawer(); }}
                />
            </HeaderButtons>
            )}
    }
};

