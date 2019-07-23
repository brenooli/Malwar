import { USER_CADASTRO } from '../actions/actionsType';

const INITIAL_STATE = {

    nome: null,
    cpf: null,
    telefone: null,
    email: null,
    senha: null,
}

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case USER_CADASTRO: 
            return {
                ...state,
                nome: action.payload.nome,
                cpf: action.payload.cpf,
                telefone: action.payload.telefone,
                email: action.payload.email,
                senha: action.payload.senha,

            }
        
        default:
            return state;
    }

}

export default reducer;

