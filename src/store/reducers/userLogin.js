import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actions/actionsType';

const INITIAL_STATE = {

    email: null,
    senha: null,
}

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type){

        case USER_LOGGED_IN:
            return {
                ...state,
                email: action.payload.email,
                senha: action.payload.senha
            }            

        case USER_LOGGED_OUT:
            return {
                ...state,
                email: null,
                senha: null
            }
        default:
            return state;
    }
}

export default reducer;