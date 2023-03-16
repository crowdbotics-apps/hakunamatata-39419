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
      <View style={styles.View_13_509} />
      <View style={styles.View_13_510} />
      <View style={styles.View_13_512} />
      <View style={styles.View_13_516}>
        <Text style={styles.Text_13_516}>₹ 1,527</Text>
      </View>
      <View style={styles.View_13_517}>
        <Text style={styles.Text_13_517}>Including GST (18%)</Text>
      </View>
      <View style={styles.View_13_524} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83e73ef5-e816-4678-9dd6-303a7b3d65d7"
        }}
        style={styles.ImageBackground_13_526}
      />
      <View style={styles.View_13_527}>
        <Text style={styles.Text_13_527}>Apple Pay</Text>
      </View>
      <View style={styles.View_13_528}>
        <View style={styles.View_13_529}>
          <View style={styles.View_13_530}>
            <View style={styles.View_13_531} />
            <View style={styles.View_13_532}>
              <View style={styles.View_13_533} />
              <View style={styles.View_13_534} />
            </View>
          </View>
          <View style={styles.View_13_535}>
            <Text style={styles.Text_13_535}>Credit card</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_13_538}>
        <Text style={styles.Text_13_538}>Card number</Text>
      </View>
      <View style={styles.View_13_540} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cff6220a-e593-49c9-997a-c9d884d6572c"
        }}
        style={styles.ImageBackground_13_542}
      />
      <View style={styles.View_13_545}>
        <View style={styles.View_13_546}>
          <View style={styles.View_13_547} />
          <View style={styles.View_13_548}>
            <View style={styles.View_13_549} />
            <View style={styles.View_13_550} />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4bd91fb3-d825-42f2-8951-4d0c4dc94f78"
          }}
          style={styles.ImageBackground_13_551}
        />
      </View>
      <View style={styles.View_13_552}>
        <Text style={styles.Text_13_552}>5261 4141 0151 8472</Text>
      </View>
      <View style={styles.View_13_554}>
        <Text style={styles.Text_13_554}>Cardholder name</Text>
      </View>
      <View style={styles.View_13_556} />
      <View style={styles.View_13_558}>
        <Text style={styles.Text_13_558}>Christie Doe</Text>
      </View>
      <View style={styles.View_13_561}>
        <Text style={styles.Text_13_561}>Expiry date</Text>
      </View>
      <View style={styles.View_13_563} />
      <View style={styles.View_13_565}>
        <Text style={styles.Text_13_565}>06 / 2024</Text>
      </View>
      <View style={styles.View_13_568}>
        <Text style={styles.Text_13_568}>CVV / CVC</Text>
      </View>
      <View style={styles.View_13_569}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f41d7dd-1803-4b50-b0a3-4571c85718ec"
          }}
          style={styles.ImageBackground_13_570}
        />
        <View style={styles.View_13_571}>
          <Text style={styles.Text_13_571}>?</Text>
        </View>
      </View>
      <View style={styles.View_13_573} />
      <View style={styles.View_13_575}>
        <Text style={styles.Text_13_575}>915</Text>
      </View>
      <View style={styles.View_13_576}>
        <Text style={styles.Text_13_576}>
          We will send you an order details to your email after the successfull
          payment
        </Text>
      </View>
      <View style={styles.View_13_578} />
      <View style={styles.View_13_579}>
        <View style={styles.View_13_580}>
          <View style={styles.View_13_581}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d56f26a-199e-4baa-b926-285814bd0e29"
              }}
              style={styles.ImageBackground_13_582}
            />
          </View>
          <View style={styles.View_13_586}>
            <Text style={styles.Text_13_586}>Pay for the order</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_13_636} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd69a2e5-276a-485b-a5ba-b8288072c765"
        }}
        style={styles.ImageBackground_13_637}
      />
      <View style={styles.View_13_638}>
        <Text style={styles.Text_13_638}>Checkout 💳</Text>
      </View>
      <View style={styles.View_13_676}>
        <View style={styles.View_13_677}>
          <View style={styles.View_13_678}>
            <Text style={styles.Text_13_678}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_13_679}>
          <View style={styles.View_13_680}>
            <View style={styles.View_13_681}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/017ec6c4-2427-4052-832e-d6079667e5ab"
                }}
                style={styles.ImageBackground_13_682}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/400472d8-2b02-44dd-b608-4e1bc6fc56f2"
                }}
                style={styles.ImageBackground_13_685}
              />
            </View>
            <View style={styles.View_13_686} />
          </View>
          <View style={styles.View_13_687}>
            <View style={styles.View_13_688} />
            <View style={styles.View_13_689} />
            <View style={styles.View_13_690} />
            <View style={styles.View_13_691} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56dba05b-4632-407d-bf62-d2792a079cf4"
            }}
            style={styles.ImageBackground_13_692}
          />
        </View>
        <View style={styles.View_13_696} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_13_509: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_13_510: {
    flexGrow: 1,
    width: wp("87%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 75, 40, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_13_512: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_13_516: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_13_516: {
    color: "rgba(37, 212, 130, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "italic",
    letterSpacing: 0.6,
    textTransform: "none"
  },
  View_13_517: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_13_517: {
    color: "rgba(177, 177, 177, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.28,
    textTransform: "none"
  },
  View_13_524: {
    flexGrow: 1,
    width: wp("88%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("30%"),
    backgroundColor: "rgba(248, 248, 251, 1)"
  },
  ImageBackground_13_526: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  View_13_527: {
    width: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_13_527: {
    color: "rgba(58, 60, 63, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_528: {
    flexGrow: 1,
    width: wp("45%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("30%"),
    backgroundColor: "rgba(37, 212, 130, 1)",
    overflow: "hidden"
  },
  View_13_529: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_13_530: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_531: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_13_532: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_533: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_13_534: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_13_535: {
    width: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_535: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_538: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("43%"),
    justifyContent: "flex-start"
  },
  Text_13_538: {
    color: "rgba(58, 60, 63, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.32,
    textTransform: "none"
  },
  View_13_540: {
    flexGrow: 1,
    width: wp("89%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("47%"),
    backgroundColor: "rgba(248, 248, 251, 1)"
  },
  ImageBackground_13_542: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("50%")
  },
  View_13_545: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("49%")
  },
  View_13_546: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_13_547: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_13_548: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_549: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_13_550: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_13_551: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_552: {
    width: wp("58%"),
    minWidth: wp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("49%"),
    justifyContent: "flex-start"
  },
  Text_13_552: {
    color: "rgba(66, 77, 89, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.8,
    textTransform: "none"
  },
  View_13_554: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_13_554: {
    color: "rgba(58, 60, 63, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.32,
    textTransform: "none"
  },
  View_13_556: {
    flexGrow: 1,
    width: wp("89%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("62%"),
    backgroundColor: "rgba(248, 248, 251, 1)"
  },
  View_13_558: {
    width: wp("25%"),
    minWidth: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("64%"),
    justifyContent: "flex-start"
  },
  Text_13_558: {
    color: "rgba(66, 77, 89, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "none"
  },
  View_13_561: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("73%"),
    justifyContent: "flex-start"
  },
  Text_13_561: {
    color: "rgba(58, 60, 63, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.32,
    textTransform: "none"
  },
  View_13_563: {
    flexGrow: 1,
    width: wp("42%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("76%"),
    backgroundColor: "rgba(248, 248, 251, 1)"
  },
  View_13_565: {
    width: wp("28%"),
    minWidth: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("78%"),
    justifyContent: "flex-start"
  },
  Text_13_565: {
    color: "rgba(66, 77, 89, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.8,
    textTransform: "none"
  },
  View_13_568: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("73%"),
    justifyContent: "flex-start"
  },
  Text_13_568: {
    color: "rgba(58, 60, 63, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.32,
    textTransform: "none"
  },
  View_13_569: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("73%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_13_570: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_13_571: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_571: {
    color: "rgba(37, 212, 130, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  View_13_573: {
    flexGrow: 1,
    width: wp("40%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("76%"),
    backgroundColor: "rgba(248, 248, 251, 1)"
  },
  View_13_575: {
    width: wp("8%"),
    minWidth: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("78%"),
    justifyContent: "flex-start"
  },
  Text_13_575: {
    color: "rgba(66, 77, 89, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.8,
    textTransform: "none"
  },
  View_13_576: {
    flexGrow: 1,
    width: wp("62%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("89%"),
    justifyContent: "flex-start"
  },
  Text_13_576: {
    color: "rgba(177, 177, 177, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  View_13_578: {
    flexGrow: 1,
    width: wp("74%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("100%"),
    backgroundColor: "rgba(37, 212, 130, 1)",
    opacity: 0.4000000059604645
  },
  View_13_579: {
    flexGrow: 1,
    width: wp("89%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("96%"),
    backgroundColor: "rgba(37, 212, 130, 1)",
    overflow: "hidden"
  },
  View_13_580: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_13_581: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_13_582: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_586: {
    width: wp("38%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_586: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_636: {
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
  ImageBackground_13_637: {
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
  View_13_638: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_13_638: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.6599999999999999,
    textTransform: "none"
  },
  View_13_676: {
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
  View_13_677: {
    width: wp("14%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_678: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_678: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_13_679: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("0%")
  },
  View_13_680: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  View_13_681: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_13_682: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_13_685: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_13_686: {
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
  View_13_687: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_688: {
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
  View_13_689: {
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
  View_13_690: {
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
  View_13_691: {
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
  ImageBackground_13_692: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  View_13_696: {
    width: wp("36%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("107%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
