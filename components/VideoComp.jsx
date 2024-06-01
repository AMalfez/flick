import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Video, ResizeMode } from "expo-av";

const VideoComp = ({video}) => {
  const videoRef = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.video_container}>
      <Text style={styles.video_text}>3s Video</Text>
      <View style={styles.video}>
        <Video
          ref={videoRef} 
          source={video}
          videoStyle={{width:'100%', height: '100%'}}
          style={{width:'100%', height: '100%'}}
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </View>
    </View>
  );
};

export default VideoComp;

const styles = StyleSheet.create({
  video_container: {
    flex: 0.55,
  },
  video_text: {
    fontWeight: "600",
    paddingLeft: 20,
    paddingBottom:5
  },
  video: {
    width: 150,
    height: 200,
  },
});
