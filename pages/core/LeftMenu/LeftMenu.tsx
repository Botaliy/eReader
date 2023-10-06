import {StyleSheet, Text, View} from "react-native";


export function LeftMenu() {
    return (
        <View style={styles.container}>
            <Text>
                Hello
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
        container: {
            width: 100,
            height: '100%',
            backgroundColor: 'black',
            opacity: 0
        }
    }
)