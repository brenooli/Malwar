import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

export function IconBack(props, navigation) {

    return (
        <TouchableOpacity style={styles.IconArrowBack}>
            <IconMaterial name='arrow-back' color="#FFF" size={30} onPress={() => navigation('Login')} />
        </TouchableOpacity>
    )
}

export function IconForward(props) {

    return (
        <TouchableOpacity>
            <IconMaterial name='arrow-back' color="#FFF" size={30} onPress={() => this.props.navigation.navigate(props.paginaAterior)} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    IconArrowBack: {
        marginTop: 20,
        marginLeft: 25
    },
})
