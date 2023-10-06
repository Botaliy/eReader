import {Button, Image, Text, View} from "react-native";
import {StyleSheet} from "react-native";
import {TouchableWithoutFeedback} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useState} from "react";
import {LeftMenu} from "../LeftMenu/LeftMenu";


type HeaderProps = {
    title: string

}

export function Header(props: HeaderProps) {
    const [isOpened, setOpened] = useState(false)

    const openLeftMenu = () => {
        if (isOpened === false) {
            setOpened(true)
        } else {
            setOpened(false)
        }
    }

    return (
        <View>
            <LeftMenu/>
            <View style={{height: 40, backgroundColor: '299AFD'}}>
                <View style={styles.container}>
                    <TouchableWithoutFeedback onPress={openLeftMenu}>
                        <Image source={require('./assets/burger.svg')}
                               style={styles.burger}/>
                    </TouchableWithoutFeedback>

                    <Text style={styles.title}>
                        {props.title}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    burger: {
        height: 30,
        width: 30,
        marginLeft: '2%'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#299AFD'
    },
    title: {
        marginLeft: 90,
        fontSize: 20
    }
})