import React from 'react';
import { StyleSheet, View } from 'react-native';
import fire from '../../config/Fire';

const WithAuth = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                email: '',
                password: '',
                confirmPassword: '',
                loggedIn: true,
            };
        }

        componentDidMount() {
            if(this.state.loggedIn) {
                this.props.navigation.replace('Main')
            }
        }
    
        loginHandler = () => {
            console.log('Logging in...')
            fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                .then((res) => {
                    console.log(res)
                    this.setState({ loggedIn: true })
                    this.props.navigation.replace('Main')
                })
                .catch((e) => console.log(e))
        };
    
        signUpHandler = () => {
            if(this.state.password===this.state.confirmPassword) {
                fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then((res) => console.log(res))
                .catch((e) => console.log(e))
            }
            else {
                console.log('Passwords do not match');
            }
        };
    
        emailInputHandler = (e) => {
            this.setState({ email: e });
        };
    
        passwordInputHandler = (e) => {
            this.setState({ password: e });
        };
    
        confirmPasswordInputHandler = (e) => {
            this.setState({ confirmPassword: e });
        };
    
        render() {
            return(
                <View style={styles.container}>
                    <WrappedComponent 
                        login={this.loginHandler}
                        signUp={this.signUpHandler}
                        loggedIn={this.state.loggedIn}
                        emailInputHandler={this.emailInputHandler}
                        passwordInputHandler={this.passwordInputHandler}
                        confirmPasswordInputHandler={this.confirmPasswordInputHandler}
                        styles={styles} {...this.props}/>
                </View>
            )
        }
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#090909',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    screen: {
        flexDirection: 'column',
        padding: 30,
    },
    logoContainer: {
        alignItems: 'center'
    },
    logo: {
        alignItems: 'center',
        width: 200,
        height: 200,
        resizeMode: 'contain'
    }, 
    inputContainer: {
        padding: 10,
        justifyContent: 'center',
        marginTop: 60
    },
    input: {
        fontSize: 18,
        marginTop: 20,
        padding: 7,
        borderColor: '#9214D4',
        backgroundColor: '#9214D4',
        paddingHorizontal: 15
    },
    buttonContainer: {
        width: '100%',
        marginTop: 15,
        overflow: 'hidden'
    },
    button: {
        width: '100%',
        backgroundColor: '#DFAF37',
        paddingVertical: 10,
        alignItems: 'center',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 30,
        //backgroundColor: 'pink'
    },
    link: {
        color: '#fff'
    }
});


export default WithAuth;