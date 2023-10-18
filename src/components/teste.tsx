import { StyleSheet, Text, View } from 'react-native';

export function Teste() {
    return (
        <View style={styles.container}>
            <Text>Olá, React Native</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});