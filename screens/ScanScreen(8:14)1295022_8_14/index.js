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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20811c9a-aa9b-4c64-b1f5-5aee053f6dc5"
        }}
        style={styles.ImageBackground_249_3}
      />
      <View style={styles.View_11_63} />
      <View style={styles.View_9_33} />
      <View style={styles.View_9_34} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d03754d0-917f-461c-80a7-1c5a29b23746"
        }}
        style={styles.ImageBackground_10_39}
      />
      <View style={styles.View_9_32} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e536b42d-c480-46a4-9e4c-dcdb1ab41cea"
        }}
        style={styles.ImageBackground_11_65}
      />
      <View style={styles.View_11_64}>
        <View style={styles.View_11_45} />
        <View style={styles.View_11_56} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3c485e8-4e39-40fe-9b47-9c4f7de288c5"
          }}
          style={styles.ImageBackground_11_59}
        />
        <View style={styles.View_11_60}>
          <Text style={styles.Text_11_60}>Lauren’s</Text>
        </View>
        <View style={styles.View_11_61}>
          <Text style={styles.Text_11_61}>Medicine</Text>
        </View>
      </View>
      <View style={styles.View_11_158}>
        <View style={styles.View_11_159}>
          <View style={styles.View_11_160}>
            <Text style={styles.Text_11_160}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_11_161}>
          <View style={styles.View_11_162}>
            <View style={styles.View_11_163}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c19843b9-980a-4d64-8524-431eae35e7f3"
                }}
                style={styles.ImageBackground_11_164}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/856d52e1-db63-4dd1-ae50-bd463681b876"
                }}
                style={styles.ImageBackground_11_167}
              />
            </View>
            <View style={styles.View_11_168} />
          </View>
          <View style={styles.View_11_169}>
            <View style={styles.View_11_170} />
            <View style={styles.View_11_171} />
            <View style={styles.View_11_172} />
            <View style={styles.View_11_173} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/182163da-b0ce-4d84-b5fc-fe7aebdd75a2"
            }}
            style={styles.ImageBackground_11_174}
          />
        </View>
        <View style={styles.View_11_178} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea6ed70c-7558-496a-b397-b03b105d6e28"
        }}
        style={styles.ImageBackground_249_47}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(224, 224, 224, 1)" },
  View_2: { height: hp("111%") },
  ImageBackground_249_3: {
    width: wp("118%"),
    minWidth: wp("118%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_11_63: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("8%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.699999988079071
  },
  View_9_33: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("52%")
  },
  View_9_34: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("52%")
  },
  ImageBackground_10_39: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("11%")
  },
  View_9_32: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("53%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 36
  },
  ImageBackground_11_65: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("19%")
  },
  View_11_64: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("92%")
  },
  View_11_45: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_11_56: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("3%"),
    backgroundColor: "rgba(90, 108, 243, 1)"
  },
  ImageBackground_11_59: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("4%")
  },
  View_11_60: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_11_60: {
    color: "rgba(194, 194, 194, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_11_61: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_11_61: {
    color: "rgba(73, 73, 73, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.48,
    textTransform: "none"
  },
  View_11_158: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("108%"),
    minHeight: hp("108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  View_11_159: {
    width: wp("14%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_160: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_11_160: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_11_161: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("0%")
  },
  View_11_162: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  View_11_163: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_164: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_11_167: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_11_168: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(76, 217, 100, 1)",
    borderWidth: 1
  },
  View_11_169: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_170: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_11_171: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_11_172: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_11_173: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_11_174: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  View_11_178: {
    width: wp("36%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("107%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_249_47: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("95%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
