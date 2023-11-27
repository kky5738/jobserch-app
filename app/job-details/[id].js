import { useGlobalSearchParams, useRouter, Stack } from 'expo-router'
import {react, useCallback, useState} from 'react'
import {View, Text, SafeAreaView, ScrollView, RefreshControl, ActivityIndicator} from 'react-native'
import useFetch from '../../Hook/useFetch'
import {COLORS, SIZES, icons} from '../../constants'
import {ScreenHeaderBtn, Company, About, Footer, Specifics, Tabs} from '../../components'
const tabs = ["About", "Qualifications", "Responsibilities"]

const JobDetails = () => {
    const params = useGlobalSearchParams()
    const router = useRouter()
    const {data, isLoading, error, refetch} = useFetch("job-details", {
        job_id:params.id
    })
    const [refreshing, setRefreshing] = useState(false)
    const [activeTab, setActiveTab] = useState(tabs[0])
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
                {isLoading?(
                    <ActivityIndicator
                        size='large' color={COLORS.primary}
                    />
                ):error?(
                    <Text>Something went wrong</Text>
                ):data.length===0?(
                    <Text>No data available</Text>
                ):(
                    <View style={{padding:SIZES.medium, paddingBottom:100}}>
                        <Company
                            companyLogo={data[0].employer_log}
                            jobTitle={data[0].job_title}
                            companyName={data[0].employer_name}
                            location={data[0].job_contry}
                        />
                        <Tabs
                            tabs={tabs}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                    </View>
                )
                }
                
                <About/>
                
                <Specifics/>
                <Footer/>

            </ScrollView>
            

        </SafeAreaView>
    )
}

export default JobDetails