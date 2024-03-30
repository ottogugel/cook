import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium ,
  Poppins_700Bold
} from "@expo-google-fonts/poppins"
import { Loading } from "@/components/Loading";
import { StatusBar } from "expo-status-bar";

SplashScreen.hideAsync();

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

SplashScreen.hideAsync();

return (
    <>
      <StatusBar style="dark" />
      <Slot />
    </>
  );
}