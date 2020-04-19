import React from 'react';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from './HeaderButton';

const MenuButton = (props) => {
    return(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-menu"
          onPress={() => { props.navData.navigation.toggleDrawer(); }}
        />
      </HeaderButtons>
    )
}

export default MenuButton;