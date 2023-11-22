import {SafeAreaView, Text, ScrollView, View } from "react-native"
import {Stack} from "expo-router"
import {COLORS, icons, images, SIZES} from "../constants"
import { 
    ScreenHeaderBtn, 
    Welcome,
    Popularjobs,
    Nearbyjobs,
} from "../components"

const Home = () => {
    return (
        <SafeAreaView style = {{flex:1, backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle:{backgroundColor:COLORS.lightWhite},
                    headerShadowVisible:false,
                    headerLeft:() => (<ScreenHeaderBtn iconUrl={icons.menu} dimension={'60%'}/>),
                    headerRight: () => (<ScreenHeaderBtn iconUrl={icons.slack} dimension={'70%'}/>),
                    // headerRight: () => (<ScreenHeaderBtn iconUrl={images.profile} dimension={'60%'}/>)
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}
                >
                    <Welcome/>
                    <Popularjobs/>
                    <Nearbyjobs/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home