// Play Music / Sound in React Native App for Android and iOS
// https://aboutreact.com/react-native-play-music-sound/

// import React in our code
import React, {useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  BackHandler,
} from 'react-native';

// import Sound Component
import Sound from 'react-native-sound';
import {Next, Pic, NextBtn, PwrBtn, PrevBtn} from '../../assets/image';
import {CardImg} from '../../components';

const Pagefive = ({navigation}) => {
  let sound1;
  // sound2,
  // sound3,
  // sound4,
  // sound5,
  // sound6,
  // sound7,
  // sound8,
  // sound9,
  // sound10,
  // sound11,
  // sound12;

  useEffect(() => {
    Sound.setCategory('Playback', true); // true = mixWithOthers
    return () => {
      if (sound1) sound1.release();
      // if (sound2) sound2.release();
      // if (sound3) sound3.release();
      // if (sound4) sound4.release();
      // if (sound5) sound5.release();
      // if (sound6) sound6.release();
      // if (sound7) sound7.release();
      // if (sound8) sound8.release();
      // if (sound9) sound9.release();
      // if (sound10) sound10.release();
      // if (sound11) sound11.release();
      // if (sound12) sound12.release();
    };
  }, []);

  //List of the dummy sound track
  const audioList = [
    {
      title: 'Play mp3 sound from LocalS',
      isRequire: true,
      url: require('../../assets/music/erro.mp3'),
      img: require('../../assets/image/pic.jpg'),
    },
    {
      title: 'Play mp3 sound from LocalZ',
      isRequire: true,
      url: require('../../assets/music/erro.mp3'),
      img: require('../../assets/image/pic.jpg'),
    },
    {
      title: 'Play aac sound from LocalA',
      isRequire: true,
      url: require('../../assets/music/erro.mp3'),
      img: require('../../assets/image/pic.jpg'),
    },
    {
      title: 'Play aac sound from LocalB',
      isRequire: true,
      url: require('../../assets/music/erro.mp3'),
      img: require('../../assets/image/pic.jpg'),
    },
    {
      title: 'Play wav sound from LocalC',
      isRequire: true,
      url: require('../../assets/music/erro.mp3'),
      img: require('../../assets/image/pic.jpg'),
    },
    {
      title: 'Play wav sound from remote URL',
      img: require('../../assets/image/pic.jpg'),
      url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/frog.wav',
    },
    {
      title: 'Play wav sound from remote URL',
      img: require('../../assets/image/pic.jpg'),
      url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/frog.wav',
    },
    {
      title: 'Play wav sound from remote URL',
      img: require('../../assets/image/pic.jpg'),
      url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/frog.wav',
    },
    {
      title: 'Play wav sound from remote URL',
      img: require('../../assets/image/pic.jpg'),
      url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/frog.wav',
    },
    {
      title: 'Play wav sound from remote URL',
      img: require('../../assets/image/pic.jpg'),
      url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/frog.wav',
    },
    {
      title: 'Play wav sound from remote URL',
      img: require('../../assets/image/pic.jpg'),
      url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/frog.wav',
    },
    {
      title: 'Play wav sound from remote URL',
      img: require('../../assets/image/pic.jpg'),
      url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/frog.wav',
    },
  ];

  const playSound = (item, index) => {
    if (sound1) {
      sound1.stop(err => {
        console.log(err);
      });
    }

    if (index == 0) {
      sound1 = new Sound(item.url, (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound1.play(() => {
          sound1.release();
        });
      });
    } else if (index == 1) {
      sound1 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound1.play(() => {
          sound1.release();
        });
      });
    } else if (index == 2) {
      sound1 = new Sound(item.url, (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound1.play(() => {
          sound1.release();
        });
      });
    } else if (index == 3) {
      sound1 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound1.play(() => {
          sound1.release();
        });
      });
    } else if (index == 4) {
      sound1 = new Sound(item.url, (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound1.play(() => {
          sound1.release();
        });
      });
    } else if (index == 5) {
      sound1 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound1.play(() => {
          sound1.release();
        });
      });
    } else if (index == 6) {
      sound1 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound1.play(() => {
          sound1.release();
        });
      });
    } else if (index == 7) {
      sound1 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound1.play(() => {
          sound1.release();
        });
      });
    } else if (index == 8) {
      sound1 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound1.play(() => {
          sound1.release();
        });
      });
    } else if (index == 9) {
      sound1 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound1.play(() => {
          sound1.release();
        });
      });
    } else if (index == 10) {
      sound1 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound1.play(() => {
          sound1.release();
        });
      });
    } else if (index == 11) {
      sound1 = new Sound(item.url, '', (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound1.play(() => {
          sound1.release();
        });
      });
    }
  };

  const ItemView = (item, index) => {
    return (
      <View style={styles.feature} key={index}>
        <View style={styles.content}>
          <TouchableOpacity onPress={() => playSound(item, index)}>
            <CardImg img={item.img} />
            <Text style={styles.buttonPlay}></Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Play Music Apps</Text>
      <Text style={styles.descText}>Ketuk untuk mendengarkan suara</Text>

      <ScrollView style={{flex: 1}}>
        <View style={styles.cont}>{audioList.map(ItemView)}</View>
      </ScrollView>
      <Text style={styles.txtsatu}>Halaman 5</Text>
      <View style={styles.btnext}>
        <TouchableOpacity onPress={() => navigation.navigate('PageFour')}>
          <Image source={PrevBtn} style={styles.next} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PageOne')}>
          <Image source={NextBtn} style={styles.next} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pagefive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    flex: 1,
    padding: 5,
  },
  descText: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '300',
  },
  content: {
    // padding: 10,
    flexDirection: 'row',
    marginLeft: 3,
    marginTop: 10,
  },

  buttonPlay: {
    fontSize: 16,
    color: 'white',
    // backgroundColor: 'rgba(80,00,00,1)',
    height: 160,
    width: 100,
    marginLeft: 5,
    marginBottom: 5,
    marginTop: -120,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  buttonStop: {
    fontSize: 16,
    color: 'white',

    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingVertical: 7,
    width: 70,
    height: 40,
  },
  feature: {
    flexDirection: 'row',
  },
  cont: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  next: {
    height: 80,
    width: 80,
    paddingLeft: 50,
  },
  btnext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtsatu: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});