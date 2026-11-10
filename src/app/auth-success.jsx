import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, spacing } from "../theme";
import CustomButton from "../components/CustomButton";

export default function AuthSuccessScreen() {
  const router = useRouter();
  const { type } = useLocalSearchParams();

  const isRegister = type === "register";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconCircle}>
          <Feather name="check" size={48} color={colors.white} />
        </View>

        <Text style={styles.hurreyText}>Hurrey!</Text>
        <Text style={styles.messageText}>
          {isRegister
            ? "Your registration is successful. Please go back and log-in to start your camping adventure."
            : "Your Password changed successfully. Please go back and log-in."}
        </Text>
      </View>

      <View style={styles.bottomSection}>
        <CustomButton
          title="Go Back & Log In"
          variant="primary"
          onPress={() => router.replace("/login")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.lg,
  },
  hurreyText: {
    ...typography.h1,
    fontSize: 36,
    fontWeight: "900",
    color: colors.dark,
    marginBottom: spacing.sm,
  },
  messageText: {
    ...typography.bodyLarge,
    color: colors.grayDark,
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: spacing.md,
  },
  bottomSection: {
    width: "100%",
  },
});
