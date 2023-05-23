import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { DefaultTheme, Provider as PaperProvider, BottomNavigation, Text } from 'react-native-paper';
import { Button } from "@react-native-material/core";
import { ColorScheme } from "@react-native-material/core";
import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import { StatusBar, ScrollView } from 'react-native';
import { Formik } from 'formik';
//components
import AppBar from './components/AppBar';

import { ActivityIndicator, MD2Colors } from 'react-native-paper';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-paper';
import { Box } from "@react-native-material/core";
import { HStack, Wrap } from "@react-native-material/core";


import ConteudoCard from './components/ConteudoCard';


const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

// const NotificationsRoute = () => <Text>Notifications</Text>;

export default function App() {

    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')

    async function handleNotification() {
        console.log('Notificação recebida!');
    }

    useEffect(() => {
        // Solicita permissão para enviar notificações
        Notifications.requestPermissionsAsync();
    }, []);

    useEffect(() => {
        // Agenda uma notificação para daqui a 5 segundos
        const trigger = new Date().getTime() + 5000; // 5 segundos
        Notifications.scheduleNotificationAsync({
            content: {
                title: 'Minha Notificação',
                body: 'Esta é uma notificação de teste',
                data: { data: 'test' },
            },
            trigger,
        });
    }, []);



    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
        { key: 'albums', title: 'Albums', focusedIcon: 'album' },
        { key: 'recents', title: 'Recents', focusedIcon: 'history' },
        //{ key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
        //notifications: NotificationsRoute,
    });

    function testaBotao() {
        alert(login)
    }

    return (
        <SafeAreaProvider>
            <AppBar />
            <ScrollView contentContainerStyle={styles.scrollContainer}>


                <View style={styles.container}>

                    <ConteudoCard />
                    <ConteudoCard />

                    {/* <Image style={{ width: 100, height: 100, alignSelf: 'center', marginBottom: 30 }} source={require('./assets/logo.png')} />

<TextInput
    style={{ marginBottom: 7 }}
    label="Login"
    onChangeText={(text) => setLogin(text)}
/>

<TextInput
    style={{ marginBottom: 7, backgroundColor: 'transparent' }}

    label="Senha"
/>



<Button style={styles.botao} onPress={() => testaBotao()} title="FAZER LOGIN"
    leading={props => <Icon name="delete" {...props} />}
/> */}



                    {/* <BottomNavigation
        barStyle={{ backgroundColor: '#121212' }}
        activeColor='#3390FF'
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
    /> */}

                    {/* <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        renderIcon={({ route, color }) => (
            <Icon name={route.icon} size={24} color={color} />
        )}
    /> */}
                </View>
            </ScrollView>


            <StatusBar backgroundColor="#A38C44" barStyle="light-content" />
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 20,
        backgroundColor: '#fff'
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao: {
        paddingTop: 10,
        paddingBottom: 10,
    }
});

