import React from 'react'
import { View,StyleSheet,Text } from 'react-native'
import Image from 'react-native-remote-svg'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class HomePage extends React.Component {
    render() {
        return  (
        <KeyboardAwareScrollView>
        <View style={styles.background}>
            <View style={styles.backgroundusername}>
                <Text style={styles.text1}>Username</Text>
            </View>
            <View style={styles.containers}>
                <View style={styles.container}>
                    <Image source={require('../Assets/icon1.svg')}/>
                </View>
                <View style={styles.container}>
                    <Image source={require('../Assets/icon2.svg')}/>
                </View>
                <View style={styles.container}>
                    <Image source={require('../Assets/icon3.svg')}/>
                </View>
                <View style={styles.container}>
                    <Image source={require('../Assets/icon4.svg')}/>
                </View>
            </View>
            <View style={styles.backgrounduserdesc1}>
                <Image source={require('../Assets/avatar.jpg')} style={styles.avatar1}/>
                <Text style={styles.text2}>Username</Text>
                <Text style={styles.text3}>Description</Text>
            </View>
            <View style={styles.backgrounduserdesc2}>
                <Image source={require('../Assets/avatar.jpg')} style={styles.avatar2}/>
                <Text style={styles.text4}>Username</Text>
                <Text style={styles.text5}>2 minutes ago</Text>
                <Image source={require('../Assets/vélo.jpg')} style={styles.image1}/>
            </View>
            <View style={styles.backgrounduserdesc3}>
                <Image source={require('../Assets/avatar.jpg')} style={styles.avatar3}/>
                <Text style={styles.text6}>Username</Text>
                <Text style={styles.text7}>2 minutes ago</Text>
                <Image source={require('../Assets/macbook.jpg')} style={styles.image2}/>
            </View>
        </View>
        </KeyboardAwareScrollView>
    )}
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#DCDCDC',
        flex : 1
    },
    backgroundusername: {
        backgroundColor: '#ffffff',
        width: "100%",
        padding: 20,
        alignItems: "center"
    },
    text1: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 20,
    },
    containers: {
        display: "flex",
        flexDirection: "row"
    },
    container: {
        backgroundColor: '#ffffff',
        marginTop: 10,
        marginLeft: 10,
        width: 90,
        height: 60,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    backgrounduserdesc1: {
        backgroundColor: '#ffffff',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        width: 390,
        height: 290,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    avatar1: {
        width: 150,
        height: 150,
        borderRadius: 400/ 2
    },
    text2: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 15
    },
    text3: {
        fontFamily: 'Roboto',
        fontSize: 15,
        marginTop: 5
    },
    backgrounduserdesc2: {
        backgroundColor: '#ffffff',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        width: 390,
        height: 290,
        borderRadius: 10
    },
    avatar2: {
        width: 50,
        height: 50,
        borderRadius: 400/ 2,
        marginTop: 20,
        marginLeft: 20
    },
    text4: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 15,
        marginLeft: 90,
        marginTop: -50
    },
    text5: {
        color: "#808080",
        fontFamily: 'Roboto',
        fontSize: 15,
        marginLeft: 90,
    },
    image1: {
        width: "100%",
        height: "100%",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginTop: 20
    },
    backgrounduserdesc3: {
        backgroundColor: '#ffffff',
        marginTop: 95,
        marginBottom: 95,
        marginLeft: 10,
        marginRight: 10,
        width: 390,
        height: 290,
        borderRadius: 10
    },
    avatar3: {
        width: 50,
        height: 50,
        borderRadius: 400/ 2,
        marginTop: 20,
        marginLeft: 20
    },
    text6: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 15,
        marginLeft: 90,
        marginTop: -50
    },
    text7: {
        color: "#808080",
        fontFamily: 'Roboto',
        fontSize: 15,
        marginLeft: 90,
    },
    image2: {
        width: "100%",
        height: "100%",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginTop: 20
    }
})