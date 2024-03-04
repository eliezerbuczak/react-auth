import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ButtonDefault from '../../components/buttons/buttonDefault';
import InputText from '../../components/inputs/inputText';

export default function Home() {
    const handleLogin = () => {
            navigation.navigate('Login')
    };
    return (<>
           <InputText text="Home" />
           <ButtonDefault text="Home" onPress={handleLogin}/>
           <ButtonDefault text="Home" onPress={handleLogin}/></>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fffr',
        flex: 1,
    },
    contentContainer: {
        paddingLeft: 56,
        paddingRight: 56,
        paddingTop: 150,
        gap: 32,
    }
});
