import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Home() {

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Bem-vindo ao app</Text>
                <Text style={styles.text}>Esse é um app de exemplo para o artigo sobre React Native</Text>
                <Text style={styles.textoBotao}>Clique aqui</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3772FF',
        flex: 1,
    },
    text: {
        color: "white",
        textAlign: 'center',
        fontSize: 16,
    },
    title: {
        fontSize: 26,
        fontWeight: '500',
    },
    contentContainer: {
        paddingLeft: 56,
        paddingRight: 56,
        paddingTop: 150,
        gap: 32,
    },
    imagem: {
        alignSelf: 'center',
    },

    button: {
        borderRadius: 8,
        backgroundColor: '#FC7071', // Pode ser ajustado conforme necessário
        shadowColor: 'rgba(0, 0, 0, 0.12)',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4, // Adiciona a elevação para sombra no Android
        padding: 10, // Pode ser ajustado conforme necessário
        width: 200,
        alignSelf: 'center',
    },
    textoBotao: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
});
