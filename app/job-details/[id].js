import { useGlobalSearchParams, useRouter, Stack } from 'expo-router'
import {react, useCallback, useState} from 'react'
import {View, Text, SafeAreaView, ScrollView, RefreshControl} from 'react-native'
import useFetch from '../../Hook/useFetch'
import {COLORS, icons} from '../../constants'
import {ScreenHeaderBtn, Company, About, Footer, Specifics, Tabs} from '../../components'

const JobDetails = () => {
    const params = useGlobalSearchParams()
    const router = useRouter()
    const {data, isLoading, error, refetch} = useFetch("job-details", {
        jot_id:params.id
    })
    const [refreshing, setRefreshing] = useState(false)
    const onRefresh = useCallback(() => {
        setRefreshing(true)
        refetch()
        setRefreshing(false)
    }, [])
    return (
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible:false,
                    headerBackVisible:false,
                    headerLeft: ()=> (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension='60%'
                            handlePress={() => router.back}
                        >
                        </ScreenHeaderBtn>
                    ),
                    headerRight:() => (
                        <ScreenHeaderBtn iconUrl={icons.share} dimension='60%'/>
                    ),
                    headerTiTle:""
                }}
            />
            <ScrollView showsVerticalScrollIndicator = {false}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }
            >
                <Company/>
                <About/>
                <Tabs/>
                <Specifics/>
                <Footer/>

            </ScrollView>
            

        </SafeAreaView>
    )
}

export default JobDetails