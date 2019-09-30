import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.scrollView}>
        <Text style={styles.fontColor}>Hello world</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontColor: {
    color: '#7159c1',
  },
});

export default App;
