import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../theme";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

export default function ConfirmOtpScreen() {
  const router = useRouter();
  const { phone } = useLocalSearchParams();
  const [digits, setDigits] = useState(["2", "8", "2", "2"]);

  const handleDigitChange = (val, index) => {
    const copy = [...digits];
    copy[index] = val;
    setDigits(copy);
  };

  const handleVerify = () => {
    router.push("/new-password");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Confirm OTP" />

      <View style={styles.content}>
        <View style={styles.topSection}>
          <View style={styles.iconCircle}>
            <Feather name="key" size={32} color={colors.primary} />
          </View>
          <Text style={styles.title}>Verification Code</Text>
          <Text style={styles.description}>
            Please confirm your 4 digit OTP, which is sent on this number{" "}
            <Text style={{ fontWeight: "700", color: colors.dark }}>
              {phone || "+1202-555-0174"}
            </Text>
          </Text>

          {/* OTP Input Boxes */}
          <View style={styles.otpRow}>
            {digits.map((digit, idx) => (
              <View key={idx} style={styles.otpBox}>
                <TextInput
                  style={styles.otpInput}
                  value={digit}
                  onChangeText={(val) => handleDigitChange(val, idx)}
                  keyboardType="number-pad"
                  maxLength={1}
                />
              </View>
            ))}
          </View>

          <TouchableOpacity style={styles.resendBtn}>
            <Text style={styles.resendText}>Didn't receive code? Resend</Text>
          </TouchableOpacity>
        </View>

        <CustomButton
          title="Verify & Proceed"
          variant="primary"
          onPress={handleVerify}
          style={styles.submitBtn}
        />
      </View>
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
    alignItems: "center",
    marginTop: spacing.xl,
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
  title: {
    ...typography.h3,
    color: colors.dark,
    marginBottom: spacing.xs,
  },
  description: {
    ...typography.bodyMedium,
    color: colors.grayDark,
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: spacing.md,
  },
  otpRow: {
    flexDirection: "row",
    gap: spacing.md,
    marginTop: spacing.xl,
  },
  otpBox: {
    width: 56,
    height: 56,
    borderRadius: radius.sm,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  otpInput: {
    ...typography.h2,
    color: colors.dark,
    textAlign: "center",
  },
  resendBtn: {
    marginTop: spacing.lg,
  },
  resendText: {
    ...typography.bodyMedium,
    color: colors.primaryDark,
    fontWeight: "600",
  },
  submitBtn: {
    width: "100%",
  },
});
