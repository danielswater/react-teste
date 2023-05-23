import { Appbar, Avatar } from 'react-native-paper';
import { appBarCss } from './index-css'
import { View, Image, StyleSheet } from 'react-native';

const handleMenuIconPress = () => {
    // Lógica para lidar com o pressionamento do ícone do menu
};

export default function AppBar({ titulo }) {
    return (
        <Appbar.Header style={styles.header}>
            <View style={styles.container}>
                <Appbar.Action icon="menu" iconColor='#A38C44' onPress={handleMenuIconPress} style={styles.menuIcon} />
                <View style={styles.imageContainer}>
                    <View style={styles.imageWrapper}>
                        <Image
                            source={require('../../assets/images/baby.png')}
                            style={styles.image}
                            resizeMode="contain"
                        />
                    </View>
                </View>
            </View>
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: '#fff7fa'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuIcon: {
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageWrapper: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        marginRight: 50
    },
});
