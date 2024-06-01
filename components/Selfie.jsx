import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SaveSVG from "../assets/Save.svg";
import SavedToGallery from '../assets/Saved_to_gallery.svg'
import LoadingAnimation from '../assets/Loading_animation.json'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

const Selfie = ({selfie}) => {
  const [saved, setSaved] = React.useState("not_saved");
  const handleClick = ()=>{
    setSaved("saving")
    setTimeout(() => {
      setSaved("saved")
    }, 3000);
  }
  return (
    <View style={styles.selfie_container}>
      <View>
        <Text style={styles.selfie_text}>Selfie</Text>
        <Image source={selfie} style={styles.avatar_img} />
      </View>
      {saved==="not_saved" && (<TouchableOpacity onPress={handleClick}><Image source={SaveSVG} style={{ width: 45, height: 45 }} /></TouchableOpacity>)}
      {saved==="saving" && (<Player src={LoadingAnimation} style={{ width: 45, height: 45, marginLeft: 0 }} autoplay loop></Player>)}
      {saved==="saved" && (<Image source={SavedToGallery} style={{ width: 45, height: 45 }} />)}
    </View>
  );
};

export default Selfie;

const styles = StyleSheet.create({
  selfie_container: {
    flex: 0.35,
    justifyContent: "space-between",
  },
  selfie_text:{
    fontWeight: "600"
  },
  avatar_img:{
    width: 45,
    height: 45,
    borderRadius: 50,
    marginTop:8
  },
  save_btn:{
    backgroundColor: 'none'
  }
});
