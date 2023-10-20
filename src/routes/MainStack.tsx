import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../pages/main/HomeScreen';
import { SplashScreen } from '../pages/main/SplashScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../theme/Theme';
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: colors.tab,
                    borderTopWidth: 0,
                }
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <AntDesign name="home" size={size} color={colors.second} />
                        }
                        return <AntDesign name="home" size={size} color={colors.white} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName='SplashScreen'>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="HomeScreen" component={BottomTab} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

