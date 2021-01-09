import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";



export default class App  extends React.Component{
  state = {
    answer: 0,
    firstInput: "",
    secondInput:""
  }

  add = () => {
    var num1 = this.state.firstInput;
    var num2 = this.state.secondInput;

    if (num1 === "" && num2 === ""){
      
    }else {
      this.setState({
        answer: num1 + num2
      })
    }
    }

    

  equals = () => {
    this.add()
    console.info(this.state.answer)
  }

  clear = () => {
    this.setState({
      answer: 0
    })
  }

  render() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.answer_view}>
        <Text style={styles.answer_text}>{this.state.answer}</Text>
      </View>

      <View style={styles.first_column}>
        <TouchableOpacity onPress={this.clear}>
          <View style={styles.operators_view}>
            <Text style={styles.operators}>AC</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.add}>
          <View style={styles.operators_view}>
            <Text style={styles.operators}>+/-</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.operators_view}>
            <Text style={styles.operators}>%</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.operators_view}>
            <Text style={styles.operators}>÷</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.second_column}>
        <TouchableOpacity>
          <View style={styles.input_view}>
            <Text style={styles.input}>7</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.input_view}>
            <Text style={styles.input}>8</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.input_view}>
            <Text style={styles.input}>9</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.operators_view}>
            <Text style={styles.operators}>×</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.third_column}>
        <TouchableOpacity>
          <View style={styles.input_view}>
            <Text style={styles.input}>4</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.input_view}>
            <Text style={styles.input}>5</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.input_view}>
            <Text style={styles.input}>6</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.operators_view}>
            <Text style={styles.operators}>-</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.fourth_column}>
        <TouchableOpacity>
          <View style={styles.input_view}>
            <Text style={styles.input}>1</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.input_view}>
            <Text style={styles.input}>2</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.input_view}>
            <Text style={styles.input}>3</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.operators_view}>
            <Text style={styles.operators}>+</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.fifth_column}>
        <TouchableOpacity>
          <View style={styles.input_view}>
            <Text style={styles.input}>0</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.input_view}>
            <Text style={styles.input}>.</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.equals}>
          <View style={styles.operators_view}>
            <Text style={styles.operators}>=</Text>
          </View>
        </TouchableOpacity>
      </View>

      <StatusBar style="light" />
    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  answer_view: {
    flexDirection: "row",
    backgroundColor: "#000",
    width: "100%",
    //height: 100,
    //marginTop: 200,
    //justifyContent:"flex-end",
  },
  answer_text: {
    //textAlignVertical:"bottom",
    color: "#fff",
    paddingTop: 100,
    backgroundColor: "#000",
    width: "100%",
    textAlign: "right",
    fontWeight: "400",
    fontSize: 100,
    paddingRight: 30,

  },
  first_column: {
    flexDirection: "row",
  },
  second_column: {
    flexDirection: "row",
  },
  third_column: {
    flexDirection: "row",
  },
  fourth_column: {
    flexDirection: "row",
  },
  fifth_column: {
    flexDirection: "row",
  },
  operators: {
    color: "#000",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  operators_view: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: "#aeaeae",
    justifyContent: "center",
    margin: 10,
  },
  input_view: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: "#fff",
    justifyContent: "center",
    margin: 10,
  },
  input: {
    color: "#000",
    textAlign: "center",
    fontSize: 30,
  },
});
