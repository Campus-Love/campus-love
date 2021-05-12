import React , {useState}from "react";
import { Searchbar } from 'react-native-paper';
import {Text, View} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { returnBackWithData, searchDates } from "../../redux/dataSlice/dataSlice";


const SearchComponent = ({searchStyles, icon, iconPressed})=>{
    const [searchQuery, setSearchQuery] = useState('');

    //useSelector
    const dispatch =  useDispatch();

  const onChangeSearch = query => {
    setSearchQuery(query)
    if(searchQuery){
      dispatch(searchDates(searchQuery))
    }
    if(searchQuery == '') {
      dispatch(returnBackWithData())
    }
    if(query==''){
      dispatch(returnBackWithData())

    }
  }

    return(
      <View>
    <Searchbar
      placeholder="search by name , location or hobby"
      style={searchStyles}
      onChangeText={onChangeSearch}
      value={searchQuery}
      icon = {icon}
      onIconPress = {iconPressed}
    
    />
      </View>
    )
}


export default SearchComponent;