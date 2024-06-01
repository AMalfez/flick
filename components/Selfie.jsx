import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SaveSVG from "../assets/Save.svg";
import SavedToGallery from '../assets/Saved_to_gallery.svg'
import LoadingAnimation from '../assets/Loading_animation.json'
import { Player} from '@lottiefiles/react-lottie-player';
import { PermissionsAndroid, Platform } from 'react-native';
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import RNFetchBlob from 'rn-fetch-blob';
import CameraRoll from '@react-native-community/cameraroll';
const Selfie = ({selfie, video}) => {
  const [saved, setSaved] = React.useState("not_saved");
  const handleClick = ()=>{
    setSaved("saving")
    downloadVideo(video);
  }
  async function requestStoragePermission() {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'This app needs access to your storage to download videos',
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  }
  async function downloadVideo(videoUrl) {
    const hasPermission = await requestStoragePermission();
  
    if (!hasPermission) {
      alert('Storage permission denied');
      return;
    }
  
    const { config, fs } = RNFetchBlob;
    const date = new Date();
    const filePath = `${fs.dirs.DownloadDir}/video_${Math.floor(date.getTime() + date.getSeconds() / 2)}.mp4`;
  
    config({
      fileCache: true,
      appendExt: 'mp4',
      path: filePath,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: filePath,
        description: 'Downloading video.',
      },
    })
      .fetch('GET', videoUrl)
      .then(res => {
        CameraRoll.save(res.path(), { type: 'video' })
          .then(() => {
            setSaved("saved")
          })
          .catch(err => {
            console.error(err);
            setSaved("not_saved")
          });
      })
      .catch(err => {
        console.error(err);
        setSaved("not_saved")
      });
  }
  return (
    <View style={styles.selfie_container}>
      <View>
        <Text style={styles.selfie_text}>Selfie</Text>
        <Image source={selfie} style={styles.avatar_img} />
      </View>
      {saved === "not_saved" && (
        <TouchableOpacity onPress={handleClick}>
          <Image source={SaveSVG} style={{ width: 45, height: 45 }} />
        </TouchableOpacity>
      )}
      {saved === "saving" && (
        <Player
          src={LoadingAnimation}
          style={{ width: 45, height: 45, marginLeft: 0 }}
          autoplay
          loop
        ></Player>
      )}
      {saved === "saved" && (
        <Image source={SavedToGallery} style={{ width: 45, height: 45 }} />
      )}
    </View>
  );
};

export default Selfie;

const styles = StyleSheet.create({
  selfie_container: {
    flex: 0.35,
    justifyContent: "space-between",
  },
  selfie_text: {
    fontWeight: "600",
  },
  avatar_img: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginTop: 8,
  },
  save_btn: {
    backgroundColor: "none",
  },
});
