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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85c033bd-0731-4391-8c39-33a8fde1674b"
        }}
        style={styles.ImageBackground_239_63}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4190a7bc-4739-4ecb-a74c-c443c3b46336"
        }}
        style={styles.ImageBackground_239_64}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80020b62-b022-4929-b1d4-9955ec290a52"
        }}
        style={styles.ImageBackground_239_65}
      />
      <View style={styles.View_239_66}>
        <Text style={styles.Text_239_66}>Welcome Back</Text>
      </View>
      <View style={styles.View_239_67}>
        <Text style={styles.Text_239_67}>Sign in</Text>
      </View>
      <View style={styles.View_239_68} />
      <View style={styles.View_239_69} />
      <View style={styles.View_239_70}>
        <Text style={styles.Text_239_70}>Sign Up</Text>
      </View>
      <View style={styles.View_239_71}>
        <Text style={styles.Text_239_71}>Forgot Passwords</Text>
      </View>
      <View style={styles.View_239_72}>
        <View style={styles.View_239_73} />
        <View style={styles.View_239_74}>
          <Text style={styles.Text_239_74}>Your Email</Text>
        </View>
      </View>
      <View style={styles.View_239_75}>
        <View style={styles.View_239_76} />
        <View style={styles.View_239_77}>
          <Text style={styles.Text_239_77}>Password</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3d0b9b4-9b03-445f-9126-62d6cc8f3a6d"
        }}
        style={styles.ImageBackground_239_78}
      />
      <View style={styles.View_239_79}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d49abe91-6b1a-4103-986d-6b2b21bc144c"
          }}
          style={styles.ImageBackground_239_80}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f29db06-53a6-44d3-a388-0d0cdf1f6986"
        }}
        style={styles.ImageBackground_239_82}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  ImageBackground_239_63: {
    width: wp("106%"),
    minWidth: wp("106%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("-2%")
  },
  ImageBackground_239_64: {
    width: wp("187%"),
    minWidth: wp("187%"),
    height: hp("96%"),
    minHeight: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-49%"),
    top: hp("-56%")
  },
  ImageBackground_239_65: {
    width: wp("106%"),
    minWidth: wp("106%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-43%"),
    top: hp("-40%")
  },
  View_239_66: {
    width: wp("54%"),
    minWidth: wp("54%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_239_66: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 37,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_239_67: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_239_67: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_239_68: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("103%"),
    backgroundColor: "rgba(228, 219, 124, 1)"
  },
  View_239_69: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("103%"),
    backgroundColor: "rgba(253, 150, 156, 1)"
  },
  View_239_70: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("101%"),
    justifyContent: "flex-start"
  },
  Text_239_70: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_239_71: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("101%"),
    justifyContent: "flex-start"
  },
  Text_239_71: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_239_72: {
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
  View_239_73: {
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
    opacity: 0.10000000149011612
  },
  View_239_74: {
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
  Text_239_74: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_239_75: {
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
  View_239_76: {
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
    opacity: 0.10000000149011612
  },
  View_239_77: {
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
  Text_239_77: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_239_78: {
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
  View_239_79: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_239_80: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_239_82: {
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
