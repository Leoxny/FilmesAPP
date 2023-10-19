import { Platform, StyleSheet } from 'react-native';

export const colors = {
    text: "#000",
    white: "#fff",
    primary: '#20242c',
    second: '#b94b2c',
    tab: '#232b3b'
}

export const theme = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingBottom: Platform.OS === "android" ? 0 : 20,
    },
    title: {
        color: colors.second,
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    cardMovie: {
        width: '43%',
        height: 120,
        marginHorizontal: 14,
        marginTop: 10,
        borderRadius: 10,
    },
    textMovie: {
        fontSize: 28,
        color: colors.second,
        fontWeight: 'bold'
    },
    cardImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        opacity: 0.6
    },
    textCard: {
        fontSize: 20,
        color: colors.white,
        fontWeight: 'bold',
        zIndex: 9999
    },
    viewTextCard: {
        position: 'absolute',
        bottom: 50,
        left: 60
    }
})