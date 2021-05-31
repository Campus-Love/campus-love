import React,{useState} from 'react'
import {
    StyleSheet,
    Image,
    useWindowDimensions,
    ScrollView,
    Pressable,
    Modal,
    ActivityIndicator,
    Text,
    View
} from 'react-native';

import ImageViewer from 'react-native-image-zoom-viewer';

const Details = ({params}) => {
    const windowHeight = useWindowDimensions().height / 2;
    const windowWidth = useWindowDimensions().width;
    const [showModal, setShowModal] = useState(false);

    const [gallery, setGallery] = useState([ {
        id:'8',
        name:"Bestie Suzie",
        gender:"female",
        location:"Kikumi kikumi",
        age:"20 years",
        hobby:"reading",
        image:"https://images.pexels.com/photos/1982966/pexels-photo-1982966.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    
    {  id:'1',
        name:"James",
        gender:"male",
        location:"wandegeya",
        age:"20 years",
        hobby:"chilling",
        image:"https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612"
    }])
    console.log(params)
    // Get slider images
    const sliderImages = gallery.map((i) => {
        return { url: `https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612` };
    });
    return ( 
        <>
        <ScrollView horizontal={true} style={{ height: windowHeight }}>
            {gallery.map((image) => (
                <Pressable
                    key={image.id}
                    onPress={() => {
                        setShowModal(true);
                        console.log('Clicked', image.id);
                    }}
                >
                    <Image
                        style={{ height: windowHeight, width: windowWidth }}
                        source={{
                            uri: `https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612`,
                        }}
                    />
                </Pressable>
            ))}
        </ScrollView>
        <Modal visible={showModal} transparent={true}>
            <ImageViewer
                imageUrls={sliderImages}
                enableSwipeDown={true}
                onSwipeDown={() => {
                    setShowModal(false);
                }}
                loadingRender={() => <ActivityIndicator color="white" />}
                // renderFooter={() => (
                //     <Text style={styles.swipeToClose}>
                //         Swipe Down to close
                //     </Text>
                // )}
            />
        </Modal>
    </>
   
    )
}

export default Details

const styles = StyleSheet.create({})
