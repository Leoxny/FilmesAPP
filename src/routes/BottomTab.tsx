import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../pages/main/HomeScreen';
import { colors } from '../theme/Theme';
import { AntDesign } from '@expo/vector-icons';
import { SplashScreen } from '../pages/main/SplashScreen';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
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

