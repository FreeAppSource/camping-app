import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Modal } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../theme";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

export default function SettingsScreen() {
  const router = useRouter();
  const [language, setLanguage] = useState("English");
  const [langModal, setLangModal] = useState(false);
  const [destroyModal, setDestroyModal] = useState(false);

  const languages = ["English", "Español", "Deutsche", "اردو", "हिंदी"];

  const handleDestroy = () => {
    setDestroyModal(false);
    Alert.alert("Trip Destroyed", "All past trip data has been cleared from your device.");
    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Settings" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionHeader}>Preferences</Text>

        <TouchableOpacity
          style={styles.row}
          onPress={() => setLangModal(true)}
        >
          <View style={styles.rowLeft}>
            <Feather name="globe" size={20} color={colors.primary} />
            <Text style={styles.rowTitle}>Language</Text>
          </View>
          <View style={styles.rowRight}>
            <Text style={styles.rowValue}>{language}</Text>
            <Feather name="chevron-right" size={18} color={colors.gray} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.row}
          onPress={() => router.push("/notifications")}
        >
          <View style={styles.rowLeft}>
            <Feather name="bell" size={20} color={colors.primary} />
            <Text style={styles.rowTitle}>Notifications</Text>
          </View>
          <Feather name="chevron-right" size={18} color={colors.gray} />
        </TouchableOpacity>

        <Text style={[styles.sectionHeader, { marginTop: spacing.xl }]}>Data & Danger Zone</Text>

        <TouchableOpacity
          style={styles.dangerRow}
          onPress={() => setDestroyModal(true)}
        >
          <View style={styles.rowLeft}>
            <Feather name="trash-2" size={20} color={colors.accentRed} />
            <View>
              <Text style={styles.dangerTitle}>Destroy Trip Data</Text>
              <Text style={styles.dangerSub}>
                Deletes entire trip history and clears out device data.
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutRow}
          onPress={() => router.replace("/login")}
        >
          <Feather name="log-out" size={20} color={colors.dark} />
          <Text style={styles.logoutTitle}>Log Out of Device</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Language Modal */}
      <Modal visible={langModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Choose Language</Text>
            {languages.map((lng) => (
              <TouchableOpacity
                key={lng}
                style={styles.langOption}
                onPress={() => {
                  setLanguage(lng);
                  setLangModal(false);
                }}
              >
                <Text
                  style={[
                    styles.langText,
                    language === lng && styles.langTextActive,
                  ]}
                >
                  {lng}
                </Text>
                {language === lng && (
                  <Feather name="check" size={18} color={colors.primary} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>

      {/* Destroy Confirmation Modal */}
      <Modal visible={destroyModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <View style={styles.warningCircle}>
              <Feather name="alert-triangle" size={32} color={colors.accentRed} />
            </View>
            <Text style={styles.modalTitle}>Are you sure?</Text>
            <Text style={styles.destroyDesc}>
              This action will permanently delete all your trip memories, activities, and backpack data.
            </Text>
            <View style={{ width: "100%", gap: 10, marginTop: spacing.lg }}>
              <CustomButton
                title="Permanently Delete"
                variant="danger"
                onPress={handleDestroy}
              />
              <CustomButton
                title="Cancel"
                variant="outline"
                onPress={() => setDestroyModal(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    paddingBottom: spacing.xxl,
  },
  sectionHeader: {
    ...typography.caption,
    color: colors.gray,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: spacing.sm,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.sm,
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    flex: 1,
  },
  rowTitle: {
    ...typography.bodyLarge,
    fontWeight: "600",
    color: colors.dark,
  },
  rowRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  rowValue: {
    ...typography.bodyMedium,
    color: colors.gray,
  },
  dangerRow: {
    backgroundColor: "#FEF2F2",
    borderRadius: radius.sm,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: "#FCA5A5",
    marginBottom: spacing.md,
  },
  dangerTitle: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.accentRed,
  },
  dangerSub: {
    ...typography.caption,
    color: "#991B1B",
    marginTop: 2,
  },
  logoutRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.md,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    gap: 8,
  },
  logoutTitle: {
    ...typography.bodyLarge,
    fontWeight: "600",
    color: colors.dark,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.lg,
  },
  modalBox: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.xl,
    width: "100%",
    maxWidth: 320,
    alignItems: "center",
  },
  modalTitle: {
    ...typography.h3,
    color: colors.dark,
    marginBottom: spacing.md,
  },
  langOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.bgLight,
  },
  langText: {
    ...typography.bodyLarge,
    color: colors.dark,
  },
  langTextActive: {
    color: colors.primary,
    fontWeight: "700",
  },
  warningCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FEE2E2",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md,
  },
  destroyDesc: {
    ...typography.bodyMedium,
    color: colors.grayDark,
    textAlign: "center",
    lineHeight: 20,
  },
});
