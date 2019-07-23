import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import { cadastro } from '../store/actions/userCadastro';
import { connect } from 'react-redux';



class CadastroEmaileSenha extends Component {

    static navigationOptions = {}

    state = {
        nome: this.props.navigation.getParam('nome'),
        cpf: this.props.navigation.getParam('cpf'),
        telefone: this.props.navigation.getParam('telefone'),
        email: null,
        senha: null,
    }

    _cadastro = () => {       
        this.props.onLogin({...this.state})
        this.props.navigation.navigate('Login')
    }

    render() {
        console.log(this.props)
        return (
            <LinearGradient style={{ flex: 1 }} colors={['#4CAF50', '#012a15']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} >
                <TouchableOpacity style={styles.IconArrow} activeOpacity={0.5} onPress={() => this.props.navigation.navigate('CadastroDadosPessoais')} >
                    <IconMaterial name='arrow-back' color="#FFF" size={30} />
                </TouchableOpacity>

                <View style={styles.container}>
                    <View>

                        <Text style={styles.textNomeCampo}>ENDEREÇO DE EMAIL</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor='#FFF'
                            underlineColorAndroid='#FFF'
                            selectionColor='#FFF'
                            value={this.state.email}
                            onChangeText={email => { this.setState({ email }) }} />


                        <Text style={styles.textNomeCampo}>SENHA</Text>
                        <TextInput style={styles.input}
                            placeholderTextColor='#FFF'
                            underlineColorAndroid='#FFF'
                            selectionColor='#FFF'
                            secureTextEntry={true}
                            value={this.state.senha}
                            onChangeText={senha => { this.setState({ senha }) }} />

                    </View>      

                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity style={styles.button} onPress={this._cadastro} >
                            <Text style={styles.textButton}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}

const mapDispatchToProps = dispatch => {

    return {
        onLogin: user => dispatch(cadastro(user))
    }
}

export default connect(null, mapDispatchToProps)(CadastroEmaileSenha);

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },

    IconArrow: {
        marginTop: 20,
        marginLeft: 25
    },

    button: {
        margin: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FFF',
        backgroundColor: 'transparent',
        height: 40,
        width: 320,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: '#FFF',
        fontSize: 15
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
    }

})
