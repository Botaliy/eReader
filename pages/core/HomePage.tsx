import {Button, StyleSheet, Text, View} from "react-native";
import {Header} from "./header/Header";


export function HomePage({navigation}) {

    return (
        <View style={styles.main}>
            <Header title='Your books'/>
            <Text>
                HomePage
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
    }
})