import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../theme";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";
import { useRouter } from "expo-router";

export default function HowToUseScreen() {
  const router = useRouter();

  const steps = [
    {
      step: 1,
      title: "Make a Trip",
      desc: "Start your expedition by giving your camping trip a memorable title.",
      icon: "compass",
    },
    {
      step: 2,
      title: "Add Location",
      desc: "Pick your campsite—from coastal islands like Catalina to alpine valleys.",
      icon: "map-pin",
    },
    {
      step: 3,
      title: "Add Teammates",
      desc: "Invite your crew with their unique Camping ID (e.g. CMP22210028).",
      icon: "users",
    },
    {
      step: 4,
      title: "Now you’re Ready",
      desc: "Track daily schedules, backpack gear quantities, and snap memories together.",
      icon: "check-circle",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="How To Use" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.headerTitle}>Follow these 4 simple steps</Text>

        {steps.map((st) => (
          <View key={st.step} style={styles.stepCard}>
            <View style={styles.stepNumberBadge}>
              <Text style={styles.stepNumber}>{st.step}</Text>
            </View>
            <View style={styles.stepInfo}>
              <View style={styles.titleRow}>
                <Feather name={st.icon} size={18} color={colors.primary} />
                <Text style={styles.stepTitle}>{st.title}</Text>
              </View>
              <Text style={styles.stepDesc}>{st.desc}</Text>
            </View>
          </View>
        ))}

        <CustomButton
          title="Start Camping Trip"
          variant="primary"
          onPress={() => router.push("/trip-create")}
          style={{ marginTop: spacing.lg }}
        />
      </ScrollView>
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
  headerTitle: {
    ...typography.h2,
    color: colors.dark,
    marginBottom: spacing.lg,
  },
  stepCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  stepNumberBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
  stepNumber: {
    ...typography.h4,
    color: colors.white,
    fontWeight: "800",
  },
  stepInfo: {
    flex: 1,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepTitle: {
    ...typography.h3,
    color: colors.dark,
  },
  stepDesc: {
    ...typography.bodyMedium,
    color: colors.grayDark,
    marginTop: 4,
    lineHeight: 20,
  },
});
