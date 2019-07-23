import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';

export default class CadastroDadosPessoais extends Component {

    static navigationOptions = {}

    state = {
        nome: '',
        cpf: '',
        telefone: '',
    }

    cadastro = () => {
        this.props.navigation.navigate('CadastroEmaileSenha', { nome: this.state.nome, cpf: this.state.cpf, telefone: this.state.telefone })
    }

    render() {
        console.log(this.props)
        return (
            <LinearGradient style={{ flex: 1 }} colors={['#4CAF50', '#012a15']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} >

                <TouchableOpacity style={styles.IconArrow} activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Login')} >
                    <IconMaterial name='arrow-back' color="#FFF" size={30} />
                </TouchableOpacity>

                <View style={styles.formulario}>
                    <View>

                        <Text style={styles.textNomeCampo}>NOME</Text>
                        <TextInput
                            style={styles.input}
                            value={this.state.nome}
                            placeholderTextColor='#FFF'
                            underlineColorAndroid='#FFF'
                            selectionColor={'red'}
                            onChangeText={ nome => { this.setState({ nome }) }} />

                        <Text style={styles.textNomeCampo}>CPF</Text>
                        <TextInputMask
                            style={styles.input}
                            type={'cpf'}
                            placeholderTextColor='#FFF'
                            underlineColorAndroid='#FFF'
                            selectionColor='#FFF'
                            value={this.state.cpf}
                            onChangeText={cpf => { this.setState({ cpf }) }} />

                        <Text style={styles.textNomeCampo}>TELEFONE</Text>
                        <TextInputMask
                            style={styles.input}
                            type={'cel-phone'}
                            placeholderTextColor='#FFF'
                            underlineColorAndroid='#FFF'
                            value={this.state.telefone}
                            onChangeText={telefone => { this.setState({ telefone }) }} />
                    </View>
                </View>

                <TouchableOpacity style={styles.IconForward} activeOpacity={0.5}>
                    <IconAnt name='rightcircle' size={40} color="#DDD" onPress={this.cadastro} />
                </TouchableOpacity>

            </LinearGradient>
        )
    }
}


const styles = StyleSheet.create({

    IconArrow: {
        marginTop: 20,
        marginLeft: 25
    },

    IconForward: {
        marginTop: 30,
        marginLeft: 342
    },

    container: {
        flex: 1,
    },


    formulario: {
        alignItems: 'center',
        marginTop: 30
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
        fontSize: 14,

    }

})
