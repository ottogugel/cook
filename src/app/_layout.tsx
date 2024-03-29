import { Slot } from "expo-router";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium ,
  Poppins_700Bold
} from "@expo-google-fonts/poppins"
import { Loading } from "@/components/Loading";
import { StatusBar, View } from "react-native";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <Loading />
    )
  }

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
      <Slot />
    </>
  );
}