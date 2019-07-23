import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import App from './src';
import { name as appName } from './app.json';

import { Provider } from 'react-redux';
import storeConfig from './src/store/storeConfig';

// import firebaseConnect from './src/services/FirebaseConnect';


import axios from 'axios';
axios.defaults.baseURL = 'https://malwar-88a56.firebaseio.com';

const store = storeConfig();

export default class Redux extends Component {

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}


AppRegistry.registerComponent(appName, () => Redux);
