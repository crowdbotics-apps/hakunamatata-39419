import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b5a72094-1718-407e-b48e-9f6f92529784"
        }}
        style={styles.ImageBackground_239_40}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8ad986e-5816-402b-b470-9f8f660f0eb4"
        }}
        style={styles.ImageBackground_239_41}
      />
      <View style={styles.View_239_42}>
        <Text style={styles.Text_239_42}>Create Account</Text>
      </View>
      <View style={styles.View_239_43}>
        <Text style={styles.Text_239_43}>Sign Up</Text>
      </View>
      <View style={styles.View_239_44} />
      <View style={styles.View_239_45}>
        <Text style={styles.Text_239_45}>Sign In</Text>
      </View>
      <View style={styles.View_239_46}>
        <View style={styles.View_239_47} />
        <View style={styles.View_239_48}>
          <Text style={styles.Text_239_48}>Your Email</Text>
        </View>
      </View>
      <View style={styles.View_239_49}>
        <View style={styles.View_239_50} />
        <View style={styles.View_239_51}>
          <Text style={styles.Text_239_51}>Name</Text>
        </View>
      </View>
      <View style={styles.View_239_52}>
        <View style={styles.View_239_53} />
        <View style={styles.View_239_54}>
          <Text style={styles.Text_239_54}>Password</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1626b97a-3817-4b3c-91d4-bb00393e77c3"
        }}
        style={styles.ImageBackground_239_55}
      />
      <View style={styles.View_239_56}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c750ca3c-5ea2-4ff5-9fc8-b0629b79a15f"
          }}
          style={styles.ImageBackground_239_57}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/acf2c998-10d9-452c-b68b-01047cc9469d"
        }}
        style={styles.ImageBackground_239_59}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(254, 171, 174, 1)" },
  View_2: { height: hp("111%") },
  ImageBackground_239_40: {
    width: wp("122%"),
    minWidth: wp("122%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("79%")
  },
  ImageBackground_239_41: {
    width: wp("187%"),
    minWidth: wp("187%"),
    height: hp("96%"),
    minHeight: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-76%"),
    top: hp("-57%")
  },
  View_239_42: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_239_42: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 37,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_239_43: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_239_43: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_239_44: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("103%"),
    backgroundColor: "rgba(228, 219, 124, 1)"
  },
  View_239_45: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("101%"),
    justifyContent: "flex-start"
  },
  Text_239_45: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_239_46: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("54%")
  },
  View_239_47: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.20000000298023224
  },
  View_239_48: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_239_48: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_239_49: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("43%")
  },
  View_239_50: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.20000000298023224
  },
  View_239_51: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_239_51: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_239_52: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("65%")
  },
  View_239_53: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.20000000298023224
  },
  View_239_54: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_239_54: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_239_55: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("77%")
  },
  View_239_56: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_239_57: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_239_59: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
