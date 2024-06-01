import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Flick from '../components/Flick';

export default function App() {
  return (
    <View style={styles.container}>
      <Flick/>
      <Flick/>
      <Flick/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    borderWidth: 2,
    backgroundColor: 'beige',
    padding: 20
  },
});
