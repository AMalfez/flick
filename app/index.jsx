import { StyleSheet, Text, View } from "react-native";
import Flick from "../components/Flick";
import { ScrollView } from "react-native-web";
import Video1 from '../assets/videos/Video1.mp4'
import Video2 from '../assets/videos/Video2.mp4'
import Video3 from '../assets/videos/Video3.mp4'
import Selfie1 from '../assets/selfies/Selfie1.jpeg'
import Selfie2 from '../assets/selfies/Selfie2.jpeg'
import Selfie3 from '../assets/selfies/Selfie1.jpeg'

const data = [
  {
    index:1,
    video:Video1,
    selfie: Selfie1
  },
  {
    index:2,
    video:Video2,
   selfie: Selfie2
  },
  {
    index:3,
    video:Video3,
    selfie: Selfie3
  }
]
export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Feed</Text>
        {data.map(d=>(
          <Flick key={d.index} index={d.index} video={d.video} selfie={d.selfie} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 2,
    backgroundColor: "beige",
    padding: 20,
  },
  heading:{
    textAlign:'center',
    fontWeight: '600',
    fontSize: '25px',
    marginTop: 40,
    marginBottom:20
  }
});
