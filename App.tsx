import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

     <View style={styles.answer_view}>
        <Text style={styles.top_operators}></Text>
     </View>

     <View style={styles.first_column}>

     </View>

     <View style={styles.second_column}>

     </View>

     <View style={styles.third_column}>

     </View>

     <View style={styles.fourth_column}>

     </View>

     <View style={styles.fifth_column}>

     </View>

      <StatusBar style="light" />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  answer_view: {

  },
  first_column: {

  },
  second_column: {

  },
  third_column: {

  },
  fourth_column: {

  },
  fifth_column: {

  },
  top_operators: {

  },
});
