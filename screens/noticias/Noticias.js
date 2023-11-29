import React from 'react'
import { StyleSheet, Button, View } from 'react-native';
import { Video } from 'expo-av';

const Noticias = ({ navigation }) => {

 const video = React.useRef(null);
 const [status, setStatus] = React.useState({});

  return (
    <View style={styles.container}>
    <Video
      ref={video}
      style={styles.video}
      source={require("./agenda.mp4")}
      useNativeControls
      resizeMode="contain"
      isLooping
      onPlaybackStatusUpdate={setStatus}
    />
    <View style={styles.buttons}>
      <Button title="Play from 5s" onPress={() => video.current.playFromPositionAsync(5000)} />
      <Button title={status.isLooping ? "Set to not loop" : "Set to loop"} onPress={() => video.current.setIsLoopingAsync(!status.isLooping)} />
    </View>
  </View>
  );
}

export default Noticias

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    video: {
      flex: 1,
      alignSelf: 'stretch'
    },
    buttons: {
      margin: 16
    }
  });
  