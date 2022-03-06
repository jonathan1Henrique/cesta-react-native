import { StatusBar, SafeAreaView } from "react-native";
import Cesta from "./src/telas/cesta/Cesta";

import cesta from "./src/mocks/cesta";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function App() {
  const [fontsCarregada] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fontsCarregada) {
    return <SafeAreaView />;
  }

  return (
    <SafeAreaView style={{flex:1}}> 
      <StatusBar />
      <Cesta {...cesta} />
    </SafeAreaView>
  );
}
