import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Navigator = createStackNavigator({
    Login: Login,
    SignUp: SignUp
});

const AuthNavigator = createAppContainer(Navigator);

export default AuthNavigator