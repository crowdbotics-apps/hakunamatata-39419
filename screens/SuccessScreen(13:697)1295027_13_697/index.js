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
      <View style={styles.View_14_1075} />
      <View style={styles.View_13_754}>
        <View style={styles.View_13_755}>
          <View style={styles.View_13_756}>
            <Text style={styles.Text_13_756}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_13_757}>
          <View style={styles.View_13_758}>
            <View style={styles.View_13_759}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e465a42-5d05-4de1-93ac-ef8df36097c1"
                }}
                style={styles.ImageBackground_13_760}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c4bf102-9789-4d6f-8dd7-655e8c395307"
                }}
                style={styles.ImageBackground_13_763}
              />
            </View>
            <View style={styles.View_13_764} />
          </View>
          <View style={styles.View_13_765}>
            <View style={styles.View_13_766} />
            <View style={styles.View_13_767} />
            <View style={styles.View_13_768} />
            <View style={styles.View_13_769} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/247d037b-99bb-4541-9c73-4cc9fdb40e20"
            }}
            style={styles.ImageBackground_13_770}
          />
        </View>
        <View style={styles.View_13_774} />
      </View>
      <View style={styles.View_14_1073}>
        <Text style={styles.Text_14_1073}>Payment Success, Yayy!</Text>
      </View>
      <View style={styles.View_14_1074}>
        <Text style={styles.Text_14_1074}>
          we will send order details and invoice in your contact no. and
          registered email
        </Text>
      </View>
      <View style={styles.View_14_1076}>
        <Text style={styles.Text_14_1076}>Download Invoice</Text>
      </View>
      <View style={styles.View_14_1079}>
        <View style={styles.View_14_1077}>
          <Text style={styles.Text_14_1077}>Check Details</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e70b24f-f6bf-441b-9bb9-35813b8a50b8"
          }}
          style={styles.ImageBackground_14_1078}
        />
      </View>
      <View style={styles.View_14_1080} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c674df5-3206-45dd-b4ce-ea5dcfb80fe7"
        }}
        style={styles.ImageBackground_14_1081}
      />
      <View style={styles.View_14_1072}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f6bb6f9-9420-437c-8c32-c40bf25777a0"
          }}
          style={styles.ImageBackground_14_989}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98367a3f-ae78-4fde-af81-5cefb5ccce08"
          }}
          style={styles.ImageBackground_14_991}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_14_1075: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("84%"),
    backgroundColor: "rgba(90, 108, 243, 1)"
  },
  View_13_754: {
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
  View_13_755: {
    width: wp("14%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_756: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_756: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_13_757: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("0%")
  },
  View_13_758: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  View_13_759: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_13_760: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_13_763: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_13_764: {
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
  View_13_765: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_766: {
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
  View_13_767: {
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
  View_13_768: {
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
  View_13_769: {
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
  ImageBackground_13_770: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  View_13_774: {
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
  View_14_1073: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("61%"),
    justifyContent: "flex-start"
  },
  Text_14_1073: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.54,
    textTransform: "none"
  },
  View_14_1074: {
    width: wp("75%"),
    minWidth: wp("75%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_14_1074: {
    color: "rgba(122, 122, 122, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.42,
    textTransform: "none"
  },
  View_14_1076: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("87%"),
    justifyContent: "flex-start"
  },
  Text_14_1076: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.54,
    textTransform: "none"
  },
  View_14_1079: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("76%")
  },
  View_14_1077: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_14_1077: {
    color: "rgba(90, 108, 243, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.32,
    textTransform: "none"
  },
  ImageBackground_14_1078: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2%")
  },
  View_14_1080: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    backgroundColor: "rgba(248, 248, 251, 1)"
  },
  ImageBackground_14_1081: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("11%")
  },
  View_14_1072: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("20%")
  },
  ImageBackground_14_989: {
    width: wp("75%"),
    height: hp("30%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_14_991: {
    width: wp("57%"),
    height: hp("34%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
