import { useEffect, useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";
export const useFocusKeyboard = () => {
  const navigation = useNavigation();
  //focus stuff
  const [focus, setIsFocus] = useState(false);
  //set focus
  const setFocus = useCallback(() => { setIsFocus(true) }, [])
  //remove focus
  const removeFocus = useCallback(() => { setIsFocus(false) }, []);

  //run a useeffect to focus the keyboard
  useEffect(() => {
    navigation.addListener('focus', setFocus)
    navigation.addListener('blur', removeFocus)
    return () => {
      navigation.removeListener("focus", setFocus)
      navigation.removeListener("blur", removeFocus)
    }

  }, [])

  return focus;
}