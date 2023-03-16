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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8608752-5a22-47f4-ae28-7bd6980e2345"
        }}
        style={styles.ImageBackground_11_101}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e8fa478-0d60-40b6-9b16-be2b6cdfff97"
        }}
        style={styles.ImageBackground_11_256}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0db7a014-6eb9-42ca-a5cb-a850aadcf741"
        }}
        style={styles.ImageBackground_11_257}
      />
      <View style={styles.View_11_180} />
      <View style={styles.View_11_157}>
        <View style={styles.View_11_136}>
          <View style={styles.View_11_137}>
            <Text style={styles.Text_11_137}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_11_138}>
          <View style={styles.View_11_139}>
            <View style={styles.View_11_140}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fdbb3c5f-60c3-4c33-ba8a-0e70f00f9f76"
                }}
                style={styles.ImageBackground_11_141}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/652e2fff-2b65-4e47-89c5-fe32bb7c02be"
                }}
                style={styles.ImageBackground_11_144}
              />
            </View>
            <View style={styles.View_11_145} />
          </View>
          <View style={styles.View_11_146}>
            <View style={styles.View_11_147} />
            <View style={styles.View_11_148} />
            <View style={styles.View_11_149} />
            <View style={styles.View_11_150} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2dfeafe1-cba8-4e36-aca2-05a4c6ab08ff"
            }}
            style={styles.ImageBackground_11_151}
          />
        </View>
        <View style={styles.View_11_156} />
      </View>
      <View style={styles.View_11_113}>
        <View style={styles.View_11_111} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04149e6b-352d-44dd-ad57-4df084011ad4"
          }}
          style={styles.ImageBackground_11_109}
        />
      </View>
      <View style={styles.View_11_107}>
        <Text style={styles.Text_11_107}>Hello 👋🏻 Christie Doe</Text>
      </View>
      <View style={styles.View_11_197}>
        <Text style={styles.Text_11_197}>Dashboard</Text>
      </View>
      <View style={styles.View_11_255}>
        <Text style={styles.Text_11_255}>Explore More</Text>
      </View>
      <View style={styles.View_11_132}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/50fd2aea-589f-4d53-b831-d1a185d18466"
          }}
          style={styles.ImageBackground_11_127}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c4e7829-4df6-4c78-b59a-8c12c2b8be13"
          }}
          style={styles.ImageBackground_11_130}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9b1d58c-a0e3-46d6-91ee-8261fbe22065"
          }}
          style={styles.ImageBackground_11_131}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9d2eddd-f7dd-453f-973d-f3d61601cf46"
        }}
        style={styles.ImageBackground_11_191}
      />
      <View style={styles.View_11_211} />
      <View style={styles.View_11_213} />
      <View style={styles.View_11_212} />
      <View style={styles.View_11_214} />
      <View style={styles.View_11_219}>
        <Text style={styles.Text_11_219}>Scan new</Text>
      </View>
      <View style={styles.View_11_244}>
        <Text style={styles.Text_11_244}>Success</Text>
      </View>
      <View style={styles.View_11_253}>
        <Text style={styles.Text_11_253}>Directory</Text>
      </View>
      <View style={styles.View_11_235}>
        <Text style={styles.Text_11_235}>Counterfeits</Text>
      </View>
      <View style={styles.View_11_231}>
        <Text style={styles.Text_11_231}>Scanned 483</Text>
      </View>
      <View style={styles.View_11_245}>
        <Text style={styles.Text_11_245}>Checkouts 8</Text>
      </View>
      <View style={styles.View_11_254}>
        <Text style={styles.Text_11_254}>History 26</Text>
      </View>
      <View style={styles.View_11_236}>
        <Text style={styles.Text_11_236}>Counterfeited 32</Text>
      </View>
      <View style={styles.View_11_220}>
        <View style={styles.View_11_216} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c20f8cec-b2d3-4e1e-add9-4bf25e19f388"
          }}
          style={styles.ImageBackground_11_217}
        />
      </View>
      <View style={styles.View_11_241}>
        <View style={styles.View_11_242} />
      </View>
      <View style={styles.View_11_251}>
        <View style={styles.View_11_252} />
      </View>
      <View style={styles.View_11_233} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16e651e3-6676-4357-87ef-383a3e102857"
        }}
        style={styles.ImageBackground_11_227}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9138b9d-0800-4aa3-9a31-50d085545667"
        }}
        style={styles.ImageBackground_11_240}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16ae9304-c291-48b0-8fd7-72622b3c9eb8"
        }}
        style={styles.ImageBackground_11_246}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e0c660b-ac9a-4621-8bc1-4dc731f4026c"
        }}
        style={styles.ImageBackground_11_258}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06cc03ab-0ea1-43f4-9743-a57e56c93176"
        }}
        style={styles.ImageBackground_13_452}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/162c1657-99e8-4023-96ea-85d4947c4f88"
        }}
        style={styles.ImageBackground_13_463}
      />
      <View style={styles.View_106_2} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d08ec4a-770e-497b-b56e-957ef6f35ac2"
        }}
        style={styles.ImageBackground_11_115}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  ImageBackground_11_101: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("90%")
  },
  ImageBackground_11_256: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("90%")
  },
  ImageBackground_11_257: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("90%")
  },
  View_11_180: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("95%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_11_157: {
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
  View_11_136: {
    width: wp("14%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_137: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_11_137: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_11_138: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("0%")
  },
  View_11_139: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  View_11_140: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_141: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_11_144: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_11_145: {
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
  View_11_146: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_147: {
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
  View_11_148: {
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
  View_11_149: {
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
  View_11_150: {
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
  ImageBackground_11_151: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  View_11_156: {
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
  View_11_113: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("9%")
  },
  View_11_111: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 239, 239, 1)"
  },
  ImageBackground_11_109: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_11_107: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_11_107: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.48,
    textTransform: "none"
  },
  View_11_197: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_11_197: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.54,
    textTransform: "none"
  },
  View_11_255: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("83%"),
    justifyContent: "flex-start"
  },
  Text_11_255: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.54,
    textTransform: "none"
  },
  View_11_132: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("100%")
  },
  ImageBackground_11_127: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_130: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_11_131: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_11_191: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  View_11_211: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("28%"),
    backgroundColor: "rgba(248, 248, 251, 1)"
  },
  View_11_213: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("54%"),
    backgroundColor: "rgba(248, 248, 251, 1)"
  },
  View_11_212: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("28%"),
    backgroundColor: "rgba(248, 248, 251, 1)"
  },
  View_11_214: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("54%"),
    backgroundColor: "rgba(248, 248, 251, 1)"
  },
  View_11_219: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("42%"),
    justifyContent: "flex-start"
  },
  Text_11_219: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.48,
    textTransform: "none"
  },
  View_11_244: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("69%"),
    justifyContent: "flex-start"
  },
  Text_11_244: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.48,
    textTransform: "none"
  },
  View_11_253: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("69%"),
    justifyContent: "flex-start"
  },
  Text_11_253: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.48,
    textTransform: "none"
  },
  View_11_235: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("42%"),
    justifyContent: "flex-start"
  },
  Text_11_235: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.48,
    textTransform: "none"
  },
  View_11_231: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_11_231: {
    color: "rgba(183, 183, 193, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.3,
    textTransform: "none"
  },
  View_11_245: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("73%"),
    justifyContent: "flex-start"
  },
  Text_11_245: {
    color: "rgba(183, 183, 193, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.3,
    textTransform: "none"
  },
  View_11_254: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("73%"),
    justifyContent: "flex-start"
  },
  Text_11_254: {
    color: "rgba(183, 183, 193, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.3,
    textTransform: "none"
  },
  View_11_236: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_11_236: {
    color: "rgba(183, 183, 193, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.3,
    textTransform: "none"
  },
  View_11_220: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("33%")
  },
  View_11_216: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(219, 218, 247, 1)"
  },
  ImageBackground_11_217: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_11_241: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("60%")
  },
  View_11_242: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(208, 237, 251, 1)"
  },
  View_11_251: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("60%")
  },
  View_11_252: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(216, 243, 241, 1)"
  },
  View_11_233: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("33%"),
    backgroundColor: "rgba(246, 227, 219, 1)"
  },
  ImageBackground_11_227: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%")
  },
  ImageBackground_11_240: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_11_246: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  ImageBackground_11_258: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("85%")
  },
  ImageBackground_13_452: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  ImageBackground_13_463: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  View_106_2: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("98%"),
    backgroundColor: "rgba(208, 237, 251, 1)",
    opacity: 0.800000011920929
  },
  ImageBackground_11_115: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("100%"),
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
