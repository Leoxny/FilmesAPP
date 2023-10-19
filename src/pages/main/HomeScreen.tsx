import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Image } from 'react-native';
import { colors, theme } from '../../theme/Theme';
import { Feather } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';

export const HomeScreen = () => {

    const [filter, setFilter] = useState('');
    const isFocused = useIsFocused()

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={theme.container}>
                <Text style={[theme.title, styles.textTitle]}>The Movie</Text>

                <View style={styles.areaInput}>
                    <View style={styles.iconContainer}>
                        <Feather name="search" size={23} color="black" />
                    </View>
                    <TextInput
                        value={filter}
                        onChangeText={(text) => setFilter(text)}
                        placeholder='Filtrar por filmes/series'
                        style={styles.input}
                    />
                </View>

                <View style={styles.areaMovie}>
                    <Text style={theme.textMovie}>Categorias</Text>
                </View>

                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <View style={theme.cardMovie}>
                        <TouchableOpacity>
                            <View style={theme.viewTextCard}>
                                <Text style={theme.textCard}>Filmes</Text>
                            </View>
                            <Image
                                style={theme.cardImage}
                                source={require('../../assets/filmes.jpeg')}
                                resizeMode='cover'
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={theme.cardMovie}>
                        <TouchableOpacity>
                            <View style={theme.viewTextCard}>
                                <Text style={theme.textCard}>Series</Text>
                            </View>
                            <Image
                                style={theme.cardImage}
                                source={require('../../assets/serie.jpg')}
                                resizeMode='cover'
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={theme.cardMovie}>
                        <TouchableOpacity>
                            <View style={theme.viewTextCard}>
                                <Text style={[theme.textCard, {left: -10}]}>Pessoas</Text>
                            </View>
                            <Image
                                style={theme.cardImage}
                                source={require('../../assets/people.jpg')}
                                resizeMode='cover'
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={theme.cardMovie}>
                        <TouchableOpacity>
                            <View style={theme.viewTextCard}>
                                <Text style={theme.textCard}>Trailers</Text>
                            </View>
                            <Image
                                style={theme.cardImage}
                                source={require('../../assets/trailer.png')}
                                resizeMode='cover'
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    textTitle: {
        marginTop: 130,
    },
    areaInput: {
        flexDirection: 'row',
        width: '90%',
        height: 45,
        backgroundColor: colors.white,
        alignSelf: 'center',
        marginTop: 25,
        borderRadius: 20,
        alignItems: 'center',
    },
    iconContainer: {
        justifyContent: 'center',
        marginLeft: 10,
    },
    input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    areaMovie: {
        marginHorizontal: 20,
        marginTop: 50
    }
});
