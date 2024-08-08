import React, { useState } from 'react'
import { FlatList ,Image,RefreshControl,Text,View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import SearchInput from '../components/SearchInput'
import Trending from '../components/Trending'
import EmptyState from '../components/EmptyState'
import VideoCard from '../components/VideoCard'

const videoData = [
  {
    id: '1',
    title: 'Sample Video 1',
    thumbnail: 'https://example.com/video1.jpg',
  },
  {
    id: '2',
    title: 'Sample Video 2',
    thumbnail: 'https://example.com/video2.jpg',
  },
  {
    id: '3',
    title: 'Sample Video 3',
    thumbnail: 'https://example.com/video3.jpg',
  },
];




const Home =()=>{
    const[refreshing, setRefreshing]= useState(false)
    const onRefresh=async ()=>{
      setRefreshing(true);
      //
      setRefreshing(false);
    }



    return(
        <SafeAreaView className="bg-primary h-full">
          <FlatList
             data={videoData}
             keyExtractor={(item) => item.id}
             renderItem={({ item }) => (
              <VideoCard
                 id={item.id}
                title={item.title}
                 thumbnail={item.thumbnail}
               />
           )}
            ListHeaderComponent={()=>(
              <View className="my-6 px-4 space-y-6">
                <View className="justify-between items-start flex-row md-6">
                 <View>
                   <Text className="font-pmedium text-sm text-gray-100">
                     Welcome Back
                   </Text>
                   <Text className="text-xl font-psemibold mt-1 text-white">
                     What are we watching today?
                   </Text>
                 </View>
                 <View className="mt-1.5">
                  <Image
                    source={images.logoSmall}
                    className="w-9 h-10"
                    resizeMode='contain'
                  
                  />
                 </View>
                </View>
                <SearchInput/>
                 <View className="w-full flex-1 pt-5 pb-8">
                   <Text className="text-gray-100 text-lg font-pregular mb-3">
                  Latest Videos
                   </Text>
                   <Trending posts={[{id:1},{id:2},{id:3}]?? [] }/>
                 </View>
               
             </View>
            )}
            ListEmptyComponent={()=>(
              <EmptyState
                title="No Videos found"
                subtitle="Be the first one to upload a video"
              />
             )}
              refreshControl={<RefreshControl refrshing={refreshing} onRefresh={onRefresh}/>}
            />
         </SafeAreaView>
           
      
    )
}

export default Home



// <View className="w-full flex-1 pt-5 pb-8">
// <Text className="text-gray-100 text-lg font-pregular mb-3">
//   Latest Videos
// </Text>
// <Trending posts={[{id:1},{id:2},{id:3}]?? [] }/>
// </View>