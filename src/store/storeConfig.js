import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../store/reducers/userLogin';
import cadastroUserReducer from '../store/reducers/userCadastro';

const reducers = combineReducers({

    user: userReducer,
    cadastro: cadastroUserReducer
})

const storeConfig = () => {

    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig;