import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';


class Home extends Component {
    render() {
        console.log('cheguei aqui na Página HOME')
        return (
            <View>
                <Text>Bem Vindo</Text>
                <Text>{this.props.nome}</Text>
                <Text>{this.props.cpf}</Text>
                <Text>{this.props.telefone}</Text>
                <Text>{this.props.email}</Text>
                <Text>{this.props.senha}</Text>
            </View>
        )
    }
}

const mapStateToProps = ({ user, cadastro }) => ({

    email: cadastro.email,
    senha: cadastro.senha,
    nome: cadastro.nome,
    cpf: cadastro.cpf,
    telefone: cadastro.telefone
  
});

export default connect(mapStateToProps, null)(Home)