import {Button, Text, View} from "react-native";
import {Header} from "./header/Header";


export function LoginPage({navigation}) {

    return (
        <View>
            <Header title='Login'/>
            <Text>
                Login Page
            </Text>
 asdlkhaysdvbmxzcl,           <Button title='Login'
                    onPress={() =>navigation.navigate('Home')}/>
        </View>
    )
}
