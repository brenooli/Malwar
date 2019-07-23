import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { connect } from 'react-redux';
import { login } from '../store/actions/userLogin';

class Login extends Component {

    static navigationOptions = {
        header: () => null,
        tabBarvisible: false
    }

    state = {
        email: null,
        senha: null
    }

    _login = () => {        

        this.props.onLogin({ ...this.state })
        this.props.navigation.navigate('Home');
    }


    render() {
        return (
            <LinearGradient style={{ flex: 1 }} colors={['#4CAF50', '#012a15']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} >

                <View style={styles.container}>
                    <View >

                        <Text style={styles.textNomeCampo}>ENDEREÇO DE E-MAIL</Text>
                        <TextInput style={styles.input}
                            placeholderTextColor='#FFF'
                            underlineColorAndroid='#FFF'
                            keyboardType="email-address"
                            selectionColor={'#2f4f4f'}
                            value={this.state.email}
                            
                            onChangeText={ email => this.setState({ email }) } />
 
                        <Text style={styles.textNomeCampo}>SENHA</Text>
                        <TextInput style={styles.input}
                            placeholderTextColor='#FFF'
                            underlineColorAndroid='#FFF'
                            selectionColor='#FFF'
                            value={this.state.senha}
                            secureTextEntry
                            onChangeText={ senha => this.setState({ senha }) } />

                    </View>

                    <View>
                        <TouchableOpacity style={styles.button} activeOpacity={0.4} onPress={this._login}  >
                            <Text style={styles.textButton}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.linkCadastro} activeOpacity={0.85} onPress={() => { this.props.navigation.navigate('CadastroDadosPessoais') }}>
                            <Text style={styles.textSemCadastro}>Ainda não tem cadastro? Cadastre-se aqui</Text>                         
                        </TouchableOpacity>
                    </View>

                </View>
            </LinearGradient >
        )
    }
}

const mapDispatchToProps = dispatch => {
    console.log('Estou no Map Dispacht')
    return {
        onLogin: user => dispatch(login(user))
    }
}

export default connect(null, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },

    linhaInput: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        margin: 10,
        borderRadius: 30,
        borderColor: '#FFF',
        borderWidth: 1,
        backgroundColor: 'transparent',
        height: 45,
        width: 330,
        justifyContent: 'center',
        alignItems: 'center',
    },

    input: {
        height: 40,
        width: 350,
        color: '#FFF'
    },

    textNomeCampo: {
        marginLeft: 2,
        color: '#FFF',
        paddingTop: 10,
        fontSize: 14
    },

    textButton: {
        color: '#FFF',
        fontSize: 15
    },
    linkCadastro: {
        marginTop: 20
    },
    textSemCadastro: {
        color: '#FFF',
        fontSize: 14,
    }
})