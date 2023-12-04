import {
  ActivityIndicator,
  Dimensions,
  Linking,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Search from "./assets/search.svg";
import TestIcon from "./assets/TestIcon.svg";
import Pdf from "react-native-pdf";
// import SvgUri from "react-native-svg";
export default function App() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <TestIcon height={60} width={60} />

      <Text>Hello World!</Text>

      <Pdf
        trustAllCerts={false}
        source={{
          uri: "http://samples.leanpub.com/thereactnativebook-sample.pdf",
        }}
        style={{
          flex: 1,
          width: Dimensions.get("window").width,
        }}
        // enablePaging={true} /* For scrolling whole page */
        // singlePage={true} /* For showing single page Only*/
        renderActivityIndicator={() => (
          <ActivityIndicator color={"black"} size={"large"} />
        )}
        onPageChanged={(page, totalPages) =>
          console.log(`${page}/${totalPages}`)
        }
        onPressLink={(link) => Linking.openURL(link)}
        onLoadProgress={(percentage) => console.log(`loading : ${percentage}`)}
        scale={0.5}
        // minScale={0.5}
        // page={5}
        spacing={50}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
