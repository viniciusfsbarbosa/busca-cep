import { View } from "react-native-web";
import Home from "./src/pages/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
      <StatusBar style="auto" />
    </View>
  );
}

