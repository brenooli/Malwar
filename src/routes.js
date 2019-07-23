import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Login from '../src/pages/Login';
import CadastroDadosPessoais from '../src/pages/CadastroDadosPessoais';
import CadastroEmaileSenha from '../src/pages/CadastroEmaileSenha';
import Home from '../src/pages/Home';


export default AppNavigator = createAppContainer(createStackNavigator({

    Login,
    CadastroDadosPessoais,
    CadastroEmaileSenha,
    Home,

}, {
        headerLayoutPreset: 'center',
        defaultNavigationOptions: {
            header: () => null,
            tabBarvisible: false

        },
        initialRouteName: 'Login',
        mode: 'modal',
    }
));
