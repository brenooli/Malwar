import { USER_CADASTRO } from '../actions/actionsType';
import axios from 'axios';

const authBaseURL = "https://www.googleapis.com/identitytoolkit/v3/relyingparty";
const API_KEY = 'AIzaSyDafo1DwJAYWsiZ-uYekrtojkIRUwL7cww';

export const cadastro = user => {

    return dispatch => {

        axios.post(`${authBaseURL}/signupNewUser?key=${API_KEY}`, {
            email: user.email,
            password: user.senha,
            returnSecureToken: true 
        })
            .catch(erro => console.log('Erro no primeiro post'+ erro.message))
            .then(res => {
                if (res.data.localId) {
                    axios.put(`/users/${res.data.localId}.json`, {
                        nome: user.nome,
                        telefone: user.telefone,
                        cpf: user.cpf
                    })
                        .then(res => {
                            return console.log('Usuário criado com sucesso!!!')
                        })
                        .catch(erro => console.log(erro))
                }
            })
    }


    return {
        type: USER_CADASTRO,
        payload: user
    }
}

const cadastroUsuarioSucesso = () => {
    alert('Usuário Cadastrado com sucesso!');

}

const cadastroUsuarioErro = (erro) => {
    if (erro == 'The email address is already in use by another account.') {
        alert('E-mail já cadastrado no sistema. Favor cadastrar outro e-mail')
    }

}