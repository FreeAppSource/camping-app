import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../theme";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [phone, setPhone] = useState("+1 202-555-0174");

  const handleSend = () => {
    router.push({
      pathname: "/confirm-otp",
      params: { phone },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Forgot Password" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.content}
      >
        <View style={styles.topSection}>
          <View style={styles.iconCircle}>
            <Feather name="shield" size={32} color={colors.primary} />
          </View>
          <Text style={styles.description}>
            To get your new password you need to put your phone number down below.
            and we will send you an OTP on that number for confirmation.
          </Text>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <View style={styles.inputContainer}>
              <View style={styles.countryCodeBadge}>
                <Text style={styles.countryCodeText}>+1</Text>
              </View>
              <TextInput
                style={styles.textInput}
                value={phone}
                onChangeText={setPhone}
                placeholder="202-555-0174"
                keyboardType="phone-pad"
              />
            </View>
          </View>
        </View>

        <CustomButton
          title="Send OTP"
          variant="primary"
          onPress={handleSend}
          style={styles.sendButton}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    justifyContent: "space-between",
    paddingBottom: spacing.xl,
  },
  topSection: {
    marginTop: spacing.xl,
    alignItems: "center",
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.primaryBg,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md,
  },
  description: {
    ...typography.bodyMedium,
    color: colors.grayDark,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: spacing.xl,
  },
  inputGroup: {
    width: "100%",
  },
  inputLabel: {
    ...typography.bodyMedium,
    fontWeight: "600",
    color: colors.dark,
    marginBottom: 6,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.sm,
    height: 50,
  },
  countryCodeBadge: {
    paddingHorizontal: 10,
    borderRightWidth: 1,
    borderRightColor: colors.border,
    marginRight: 10,
  },
  countryCodeText: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.dark,
  },
  textInput: {
    flex: 1,
    ...typography.bodyLarge,
    color: colors.dark,
  },
  sendButton: {
    width: "100%",
  },
});
