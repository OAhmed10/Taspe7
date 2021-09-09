import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity } from "react-native"
const image = { uri: "https://i.pinimg.com/originals/7f/bd/60/7fbd60403e46bac73a954ee6d18b739f.jpg" }
export default class App extends React.Component {
  state = {
    value: 0,
    total_taps: 0,
  }

  incremeantvalue = () => {
    this.setState({
      value: this.state.value + 1,
      total_taps: this.state.total_taps + 1,
    })
  }

  decremeantvalue = () => {
    this.setState({
      value: (this.state.value = 0),
    })
    // console.log("value " + (this.state.value - 1))
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={{ fontSize: 60, marginBottom: -20, color: "white" }}>{this.state.value}</Text>
          <Text style={{ fontSize: 20, padding: 20, color: "white" }}>
            {"اجمالي عدد التسبيح:" + this.state.total_taps}
          </Text>
          <StatusBar style="auto" />

          <TouchableOpacity onPress={this.incremeantvalue} style={styles.button}>
            <Text style={{ fontSize: 20 }}>سبحان الله</Text>
          </TouchableOpacity>
          <Text> </Text>

          <Button onPress={this.decremeantvalue} title="اعادة" color="#8b0000" />
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a9a9a9",
    padding: 10,
    height: "10%",
    width: "80%",
    borderRadius: 40,
  },
})
