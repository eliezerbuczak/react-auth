import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function LoginForm({text}) {
    return (
        <>
            <TextInput
            placeholder={text}
            />
        </>
    );
}