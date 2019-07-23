import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'


export default function form(props) {

    if (props.mask == true) {
        return (
            <View>
                <Text style={styles.textNomeCampo}>{props.nomeCampo}</Text>
                <Text>{props.value}</Text>
                <TextInputMask style={styles.input}
                    placeholderTextColor='#FFF'
                    underlineColorAndroid='#FFF'
                    selectionColor='#FFF'
                    type={'cpf'}
                />
            </View>
        )
    }
    else {        
        return (            
            <View>
                <Text style={styles.textNomeCampo}>{props.nomeCampo}</Text>
                <Text>{props.value}</Text>
                <TextInput style={styles.input}
                    placeholderTextColor='#FFF'
                    underlineColorAndroid='#FFF'
                    selectionColor='#FFF'
                    secureTextEntry={props.security}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

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