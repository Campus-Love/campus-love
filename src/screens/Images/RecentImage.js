import React, { useRef, useState } from 'react'
import { Pressable } from 'react-native';
import { StyleSheet, Text, View , FlatList, Image, Dimensions} from 'react-native';
import { theme } from '../../theme';

const images = [
    {
        id:1,
        recentImage:"https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612"
    },
    {
        id:2,
        recentImage:"https://images.pexels.com/photos/2701660/pexels-photo-2701660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        
    },
    {
        id:3,
        recentImage:"https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612"
    },
    {
        id:4,
        recentImage:"https://images.pexels.com/photos/2701660/pexels-photo-2701660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        
    },
    {
        id:5,
        recentImage:"https://images.pexels.com/photos/2951142/pexels-photo-2951142.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
]
const {width, height} = Dimensions.get("screen")
const RecentImage = () => {

    //create 2 refs
    const topRef = useRef();
    const thumbRef = useRef();

    //active index
     const [activeIndex, setActiveIndex] = useState(0)
    const scrollToActiveIndex = (index)=>{
        //set index and scroll flatlist
         setActiveIndex(index)
         
         //scroll flatlist
         topRef?.current?.scrollToOffset({
             offset:index*width,
             animated:true
         })
         //some simple logic
         //10 represents spacing
         //80 is the image size
         if((index*(80+10)-(80/2)) > width/2){
             thumbRef?.current?.scrollToOffset({
                 offset:index*(80+10)-(width/2)+(80/2),
                 animated:true
             })
         }
         else{

            thumbRef?.current?.scrollToOffset({
                offset:0,
                animated:true
            })

         }
    }
    return (
        <View style={{flex:1, backgroundColor:theme.colors.backdrop}}>
            <FlatList
             data={images}
             ref={topRef}
              keyExtractor={item=>String(item.id)}
              horizontal
              pagingEnabled
              onMomentumScrollEnd={ev=>{
                  scrollToActiveIndex(
                      Math.floor(ev.nativeEvent.contentOffset.x/width)
                  )
              }}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index})=>{
                  return(
                      <View style={{width, height}}>
                          <Image
                           source={{uri:item.recentImage}}
                           style={[StyleSheet.absoluteFillObject]}
                          />
                      </View>
                  )
              }}
            />
            {/*second flatlist */}
            <FlatList
             data={images}
             ref={thumbRef}
              keyExtractor={item=>String(item.id)}
              horizontal
             style={{position:"absolute", bottom:80}}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{paddingHorizontal:10}}
              renderItem={({item, index})=>{
                  return(
                         <Pressable 
                          onPress={()=>scrollToActiveIndex(index)}
                         >
                             <Image
                           source={{uri:item.recentImage}}
                           style={{
                               width:80,
                               height:80,
                               borderRadius:12,
                               marginRight:10,
                               borderWidth:2,
                               borderColor:activeIndex ==index? theme.colors.primary:"transparent"
                           }}
                          />
                         </Pressable>

                          
                      
                  )
              }}
            />
            {/*second flatlist */}
        </View>
    )
}

export default RecentImage

const styles = StyleSheet.create({})
