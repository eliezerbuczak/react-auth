import React from 'react';
import { TouchableOpacity, Text , View} from 'react-native';

export default function ButtonDefault({ text, onPress }) {
    return (
        <TouchableOpacity className="bg-gray-800 p-4 w-10/12 rounded-lg" onPress={onPress}>
            <Text className="text-white font-bold text-center">{text}</Text>
        </TouchableOpacity>
    );
}

