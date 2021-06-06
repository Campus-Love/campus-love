<ScrollView style = {styles.containerStyle}>
             {/*modal arae */}
         {
         
             modalVisible&& <View style={styles.centeredView}>
             <Modal
               animationType="slide"
               transparent={true}
               visible={modalVisible}
               presentationStyle = "overFullScreen"
               onRequestClose={() => {
                 Alert.alert('Modal has been closed.');
               }}>
               <View style={styles.centeredView}>
               <Text style={{color:theme.colors.text, marginTop:10 , fontWeight:"bold"
                ,textAlign:"center"}}>Profile Update</Text>
                 <View style={styles.modalView}>

                     <View style= {styles.modalContent}>
                         <TouchableOpacity
                          activeOpacity = {0.2}
                          onPress={pickImage}
                         >
                             <View style = {{color:theme.colors.text, marginRight:20}}> 
                             <Avatar.Image size ={30} 
                             source = {{uri:"https://code.recuweb.com/c/u/3a09f4cf991c32bd735fa06db67889e5/2018/08/wordpress-photo-gallery-plugins1.png"}}
                             />
                             <Text style={{color:theme.colors.text}}>Gallery</Text>
                             </View>
                            
                            
                         </TouchableOpacity>
                         <TouchableOpacity
                          activeOpacity = {0.2}
                           onPress={showCamera}>
                            <View style = {{color:theme.colors.text, marginLeft:20}}>
                               <Entypo size={30} name="camera" color="#FFF"/>
                               <Text style={{color:theme.colors.text}}>Camera</Text>
                            </View>
                            
                         </TouchableOpacity>

                     </View>

       
                   <TouchableHighlight
                   underlayColor = "#fff"
                     style={{ ...styles.openButton, backgroundColor: 'white', width:"100%", marginTop:10 }}
                     onPress={() => {
                       setModalVisible(!modalVisible);
                     }}>
                     <Text style={styles.textStyle}>Cancel</Text>
                   </TouchableHighlight>
                 </View>
               </View>
             </Modal>

           </View>
         }
          
         <View style={styles.containerImageStyle}>
             <Image
               source = {{uri:`${profileData[0].profileImage}`}}
               style = {styles.imageStyle}
             />
         </View>
         <TouchableOpacity activeOpacity = {0.4} 
         onPress = {()=>setModalVisible(!modalVisible)}
         style = {styles.profileCamera}>
           <Entypo name="camera" size={24}
            color={'#fff'}
             style = {styles.profileCameraIcon}
            />
         </TouchableOpacity>

         <View style = {styles.locationDetails}>
             <View>
             <Headline>About {'  '} {`${profileData[0].name}`}</Headline>
             </View>
             <Divider/>
             <View>
                 <Text>Location {'  '} {`${profileData[0].location}`}</Text>
             </View>
             <Divider/>
             <View>
                 <Text>Contact{'     '} {`${profileData[0].contact}`}</Text>
             </View>
             <Divider/>
             <View>
                 <Text>Age {'     '} {`${profileData[0].age} `}</Text>
             </View>
             <Divider/>
             <View>
                 <Text>Hobby{'   '} {`${profileData[0].hobby}`}</Text>
             </View>
             <Divider/>
         </View>
         <View>
             <Text style = {{margin:5}}>Recent Profile Pictures</Text> 
         <ProfileFlatList/>
         
         </View>
     </ScrollView>