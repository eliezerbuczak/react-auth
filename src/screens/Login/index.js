import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ButtonDefault from '../../components/buttons/buttonDefault';
import InputText from '../../components/inputs/inputText';

export default function Home({ navigation }) {
    const handleLogin = () => {
            navigation.navigate('Other')
    };
    return (<View className="flex flex-col justify-center bg-gray-200 h-full w-full items-center space-y-4">
            <ButtonDefault text="Login" onPress={handleLogin}/>
            <ButtonDefault text="Criar Conta" onPress={handleLogin}/>
           </View>
    );
}
