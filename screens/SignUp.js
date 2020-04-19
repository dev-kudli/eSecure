import React from 'react';
import { 
    StyleSheet, 
    View, 
    TextInput,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import WithAuth from '../containers/Authentication/WithAuth';

class SignUp extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        let inputs = 
                <View style={this.props.styles.inputContainer}>
                    <TextInput 
                        style={this.props.styles.input}
                        placeholder="Email"
                        value={this.props.email}
                        onChangeText={this.props.emailInputHandler}/>
                    <TextInput 
                        style={this.props.styles.input}
                        placeholder="Password"
                        value={this.props.password}
                        onChangeText={this.props.passwordInputHandler}/>
                    <TextInput 
                        style={this.props.styles.input}
                        placeholder="Confirm Password"
                        value={this.props.confirmPassword}
                        onChangeText={this.props.confirmPasswordInputHandler}/>
                    <View style={this.props.styles.buttonContainer}>
                        <TouchableOpacity 
                            activeOpacity={0.6}
                            onPress={() => {this.props.signUp()}}
                            style={this.props.styles.button}>
                                <Text style={{fontSize: 18}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={this.props.styles.footer}>
                        <Text>Already have an account? </Text>
                        <Text style={this.props.styles.link} onPress={() => navigate('Login')}>
                            Login
                        </Text>
                    </View>
                </View>

        return(
            <View style={this.props.styles.screen}>
                <View style={this.props.styles.logoContainer}>
                    <Image 
                        style={this.props.styles.logo}
                        source={require('../Logo.jpg')}/>
                </View>
                {inputs}
            </View>
        )
    }
};

export default WithAuth(SignUp);