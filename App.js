// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState("Don't click on this button!");
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="change text" onPress={() => setOutputText('You fucking did it!')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
