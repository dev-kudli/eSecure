import React from 'react';
import { 
    View, 
    TextInput,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import WithAuth from '../containers/Authentication/WithAuth';

class Login extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
            let inputs =
            <View style={this.props.styles.inputContainer}>
                <TextInput 
                    style={this.props.styles.input}
                    placeholder="Email"
                    placeholderTextColor="#fff"
                    value={this.props.email}
                    onChangeText={this.props.emailInputHandler}/>
                <TextInput 
                    style={[this.props.styles.input, styles.input]}
                    placeholder="Password"
                    placeholderTextColor="#fff"
                    value={this.props.password}
                    onChangeText={this.props.passwordInputHandler}/>
                <View style={styles.forgotPasswordContainer}>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </View>
                <View style={this.props.styles.buttonContainer}>
                    <TouchableOpacity 
                        activeOpacity={0.6}
                        onPress={() => {this.props.login()}}
                        style={this.props.styles.button}>
                            <Text style={{fontSize: 18}}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View style={this.props.styles.footer}>
                    <Text style={{color: '#fff'}}>Don't have an account yet? </Text>
                    <Text style={this.props.styles.link} onPress={() => navigate('SignUp')}>
                        Sign Up
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

styles = StyleSheet.create({
    forgotPasswordContainer: {
        paddingVertical: 10,
        marginTop: 5,
        alignItems: 'flex-end'
    },
    forgotPassword: {
        color: '#DFAF37'
    }
})

export default WithAuth(Login);