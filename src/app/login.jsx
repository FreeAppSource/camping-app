import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../theme";
import CustomButton from "../components/CustomButton";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("willsmith@mail.com");
  const [password, setPassword] = useState("•••••••••••••••");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setErrorMsg("Please fill in both email and password.");
      return;
    }
    setErrorMsg("");
    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Logo Header */}
          <View style={styles.logoHeader}>
            <View style={styles.logoRow}>
              <Text style={styles.logoText}>C</Text>
              <View style={styles.tentIconContainer}>
                <Feather name="triangle" size={24} color={colors.primary} />
              </View>
              <Text style={styles.logoText}>MPING</Text>
            </View>
            <Text style={styles.screenTitle}>Welcome Back, Adventurer</Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            {errorMsg ? (
              <View style={styles.errorBox}>
                <Feather name="alert-circle" size={16} color={colors.accentRed} />
                <Text style={styles.errorText}>{errorMsg}</Text>
              </View>
            ) : null}

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email</Text>
              <View style={styles.inputContainer}>
                <Feather name="mail" size={18} color={colors.gray} style={styles.inputIcon} />
                <TextInput
                  style={styles.textInput}
                  value={email}
                  onChangeText={(val) => {
                    setEmail(val);
                    setErrorMsg("");
                  }}
                  placeholder="example@mail.com"
                  placeholderTextColor={colors.grayLight}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Password</Text>
              <View style={styles.inputContainer}>
                <Feather name="lock" size={18} color={colors.gray} style={styles.inputIcon} />
                <TextInput
                  style={styles.textInput}
                  value={password}
                  onChangeText={(val) => {
                    setPassword(val);
                    setErrorMsg("");
                  }}
                  placeholder="Enter your password"
                  placeholderTextColor={colors.grayLight}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeBtn}
                >
                  <Feather
                    name={showPassword ? "eye" : "eye-off"}
                    size={18}
                    color={colors.gray}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => router.push("/forgot-password")}
              style={styles.forgotBtn}
            >
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            <CustomButton
              title="Log In"
              variant="primary"
              onPress={handleLogin}
              style={{ marginTop: spacing.md }}
            />
          </View>

          {/* Bottom Register */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an Account? </Text>
            <TouchableOpacity onPress={() => router.push("/signup")}>
              <Text style={styles.registerLink}>Register</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: spacing.lg,
    justifyContent: "space-between",
    paddingBottom: spacing.lg,
  },
  logoHeader: {
    alignItems: "center",
    marginTop: spacing.xl,
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    ...typography.h1,
    fontSize: 34,
    fontWeight: "900",
    letterSpacing: 2,
    color: colors.dark,
  },
  tentIconContainer: {
    paddingHorizontal: 4,
    transform: [{ rotate: "180deg" }],
  },
  screenTitle: {
    ...typography.bodyMedium,
    color: colors.gray,
    marginTop: spacing.xs,
  },
  form: {
    marginTop: spacing.xl,
  },
  errorBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FEE2E2",
    padding: spacing.md,
    borderRadius: radius.sm,
    marginBottom: spacing.md,
    gap: 8,
  },
  errorText: {
    ...typography.bodySmall,
    color: colors.accentRed,
    fontWeight: "600",
  },
  inputGroup: {
    marginBottom: spacing.md,
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
    paddingHorizontal: spacing.md,
    height: 50,
  },
  inputIcon: {
    marginRight: spacing.sm,
  },
  textInput: {
    flex: 1,
    ...typography.bodyLarge,
    color: colors.dark,
  },
  eyeBtn: {
    padding: 6,
  },
  forgotBtn: {
    alignSelf: "flex-end",
    marginTop: 4,
  },
  forgotText: {
    ...typography.bodySmall,
    fontWeight: "600",
    color: colors.primaryDark,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: spacing.xl,
  },
  footerText: {
    ...typography.bodyMedium,
    color: colors.gray,
  },
  registerLink: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.primary,
  },
});
