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
      <View style={styles.View_13_465} />
      <View style={styles.View_13_482} />
      <View style={styles.View_13_493} />
      <View style={styles.View_13_456} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/588b7ce8-d9f9-4332-97aa-698172d95860"
        }}
        style={styles.ImageBackground_13_457}
      />
      <View style={styles.View_13_461}>
        <Text style={styles.Text_13_461}>Your Cart 👍🏻</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a5fe7af-f113-4f01-a4da-05d88b7fbabe"
        }}
        style={styles.ImageBackground_11_262}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c143f0a8-433d-4f91-b719-77d64309728b"
        }}
        style={styles.ImageBackground_11_263}
      />
      <View style={styles.View_13_470}>
        <Text style={styles.Text_13_470}>Medicine</Text>
      </View>
      <View style={styles.View_13_483}>
        <Text style={styles.Text_13_483}>2</Text>
      </View>
      <View style={styles.View_13_494}>
        <Text style={styles.Text_13_494}>3</Text>
      </View>
      <View style={styles.View_13_472}>
        <Text style={styles.Text_13_472}>₹ 149</Text>
      </View>
      <View style={styles.View_13_484}>
        <Text style={styles.Text_13_484}>₹ 129</Text>
      </View>
      <View style={styles.View_13_495}>
        <Text style={styles.Text_13_495}>₹ 1249</Text>
      </View>
      <View style={styles.View_13_506}>
        <Text style={styles.Text_13_506}>₹ 1,527</Text>
      </View>
      <View style={styles.View_13_471}>
        <Text style={styles.Text_13_471}>Lauren’s</Text>
      </View>
      <View style={styles.View_13_485}>
        <Text style={styles.Text_13_485}>Baskin’s</Text>
      </View>
      <View style={styles.View_13_496}>
        <Text style={styles.Text_13_496}>Marley’s</Text>
      </View>
      <View style={styles.View_13_473} />
      <View style={styles.View_13_486} />
      <View style={styles.View_13_497} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5265e814-0fef-484b-8eb7-3e6104857c33"
        }}
        style={styles.ImageBackground_13_475}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0e0a079-61c1-4471-b83d-cdea20214453"
        }}
        style={styles.ImageBackground_13_487}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a50b237f-56a6-4948-9439-0a6cd20c2e84"
        }}
        style={styles.ImageBackground_13_498}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09ae5b65-95da-4c89-9a20-7bf500107d21"
        }}
        style={styles.ImageBackground_13_478}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2cde7bb-bed9-4745-82b5-0a484c51ab0c"
        }}
        style={styles.ImageBackground_13_490}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12bfece3-0f79-4277-98ff-ec9e50e1fa33"
        }}
        style={styles.ImageBackground_13_501}
      />
      <View style={styles.View_13_481}>
        <Text style={styles.Text_13_481}>2</Text>
      </View>
      <View style={styles.View_13_492}>
        <Text style={styles.Text_13_492}>2</Text>
      </View>
      <View style={styles.View_13_503}>
        <Text style={styles.Text_13_503}>1</Text>
      </View>
      <View style={styles.View_13_505}>
        <Text style={styles.Text_13_505}>Total</Text>
      </View>
      <View style={styles.View_13_507} />
      <View style={styles.View_13_508}>
        <Text style={styles.Text_13_508}>Proceed to checkout</Text>
      </View>
      <View style={styles.View_111_2} />
      <View style={styles.View_111_3}>
        <View style={styles.View_111_4}>
          <View style={styles.View_111_5}>
            <Text style={styles.Text_111_5}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_111_6}>
          <View style={styles.View_111_7}>
            <View style={styles.View_111_8}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb75fb7e-139e-4944-a513-349117ed7628"
                }}
                style={styles.ImageBackground_111_9}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a51b397-90b8-43c7-b587-859d512c3d83"
                }}
                style={styles.ImageBackground_111_12}
              />
            </View>
            <View style={styles.View_111_13} />
          </View>
          <View style={styles.View_111_14}>
            <View style={styles.View_111_15} />
            <View style={styles.View_111_16} />
            <View style={styles.View_111_17} />
            <View style={styles.View_111_18} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2bb326d3-d37c-40fc-ad05-e72d60a258b1"
            }}
            style={styles.ImageBackground_111_19}
          />
        </View>
        <View style={styles.View_111_23} />
      </View>
      <View style={styles.View_111_24}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23cc0ae9-111c-4c6e-b7c6-091b0ac4908a"
          }}
          style={styles.ImageBackground_111_25}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1f18bab-5f6a-410f-9348-e8f839c9e342"
          }}
          style={styles.ImageBackground_111_28}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b443009-becd-4025-9dc2-f9d7b3ce10a6"
          }}
          style={styles.ImageBackground_111_29}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a41c39b6-4148-45cc-b817-cd5837474cd5"
        }}
        style={styles.ImageBackground_111_30}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/257250ce-cab7-4706-836c-01a8fef83fed"
        }}
        style={styles.ImageBackground_111_37}
      />
      <View style={styles.View_111_44} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6dc31bd-ca61-4e1f-8d13-d309db4ce27f"
        }}
        style={styles.ImageBackground_111_39}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/167d98d1-369d-47c0-b139-93a4a348b37a"
        }}
        style={styles.ImageBackground_111_33}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42f16fe5-39a3-434a-ba51-19eb848c77c2"
        }}
        style={styles.ImageBackground_249_48}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_13_465: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("27%"),
    backgroundColor: "rgba(248, 248, 251, 1)"
  },
  View_13_482: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("42%"),
    backgroundColor: "rgba(248, 248, 251, 1)"
  },
  View_13_493: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("56%"),
    backgroundColor: "rgba(248, 248, 251, 1)"
  },
  View_13_456: {
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
  ImageBackground_13_457: {
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
  View_13_461: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_13_461: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.6599999999999999,
    textTransform: "none"
  },
  ImageBackground_11_262: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("43%")
  },
  ImageBackground_11_263: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("57%")
  },
  View_13_470: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_13_470: {
    color: "rgba(73, 73, 73, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_13_483: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_13_483: {
    color: "rgba(73, 73, 73, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_13_494: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("60%"),
    justifyContent: "flex-start"
  },
  Text_13_494: {
    color: "rgba(73, 73, 73, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_13_472: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_13_472: {
    color: "rgba(240, 143, 95, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.48,
    textTransform: "none"
  },
  View_13_484: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_13_484: {
    color: "rgba(240, 143, 95, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.48,
    textTransform: "none"
  },
  View_13_495: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("62%"),
    justifyContent: "flex-start"
  },
  Text_13_495: {
    color: "rgba(240, 143, 95, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.48,
    textTransform: "none"
  },
  View_13_506: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("72%"),
    justifyContent: "flex-start"
  },
  Text_13_506: {
    color: "rgba(240, 143, 95, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.54,
    textTransform: "none"
  },
  View_13_471: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_13_471: {
    color: "rgba(177, 177, 177, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.3,
    textTransform: "none"
  },
  View_13_485: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("43%"),
    justifyContent: "flex-start"
  },
  Text_13_485: {
    color: "rgba(177, 177, 177, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.3,
    textTransform: "none"
  },
  View_13_496: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_13_496: {
    color: "rgba(177, 177, 177, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.3,
    textTransform: "none"
  },
  View_13_473: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("34%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_13_486: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("48%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_13_497: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("62%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_13_475: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("35%")
  },
  ImageBackground_13_487: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("49%")
  },
  ImageBackground_13_498: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("63%")
  },
  ImageBackground_13_478: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("35%")
  },
  ImageBackground_13_490: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("50%")
  },
  ImageBackground_13_501: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("64%")
  },
  View_13_481: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_13_481: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.3,
    textTransform: "none"
  },
  View_13_492: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("49%"),
    justifyContent: "flex-start"
  },
  Text_13_492: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.3,
    textTransform: "none"
  },
  View_13_503: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("63%"),
    justifyContent: "flex-start"
  },
  Text_13_503: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.3,
    textTransform: "none"
  },
  View_13_505: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("72%"),
    justifyContent: "flex-start"
  },
  Text_13_505: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.54,
    textTransform: "none"
  },
  View_13_507: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("81%"),
    backgroundColor: "rgba(240, 143, 95, 1)"
  },
  View_13_508: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("83%"),
    justifyContent: "flex-start"
  },
  Text_13_508: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.54,
    textTransform: "none"
  },
  View_111_2: {
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
  View_111_3: {
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
  View_111_4: {
    width: wp("14%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_111_5: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_111_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_111_6: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("0%")
  },
  View_111_7: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  View_111_8: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_111_9: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_111_12: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_111_13: {
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
  View_111_14: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_111_15: {
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
  View_111_16: {
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
  View_111_17: {
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
  View_111_18: {
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
  ImageBackground_111_19: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  View_111_23: {
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
  View_111_24: {
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
  ImageBackground_111_25: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_111_28: {
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
  ImageBackground_111_29: {
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
  ImageBackground_111_30: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_111_37: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  View_111_44: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("98%"),
    backgroundColor: "rgba(246, 227, 219, 1)"
  },
  ImageBackground_111_39: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_111_33: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  ImageBackground_249_48: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("29%"),
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
