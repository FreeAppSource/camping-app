import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors } from "../theme";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" backgroundColor={colors.background} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="forgot-password" />
        <Stack.Screen name="confirm-otp" />
        <Stack.Screen name="new-password" />
        <Stack.Screen name="auth-success" />
        <Stack.Screen name="(tabs)" options={{ animation: "fade" }} />
        <Stack.Screen name="activity-view" />
        <Stack.Screen name="add-activity" />
        <Stack.Screen name="trip-create" />
        <Stack.Screen name="locations" />
        <Stack.Screen name="location-view" />
        <Stack.Screen name="teammates" />
        <Stack.Screen name="teammate-detail" />
        <Stack.Screen name="fitness" />
        <Stack.Screen name="tips" />
        <Stack.Screen name="how-to-use" />
        <Stack.Screen name="notifications" />
        <Stack.Screen name="feedback" />
        <Stack.Screen name="settings" />
        <Stack.Screen name="edit-profile" />
      </Stack>
    </SafeAreaProvider>
  );
}
