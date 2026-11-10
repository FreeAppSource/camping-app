import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../theme";
import Header from "../components/Header";
import { fitnessStats } from "../data";

export default function FitnessScreen() {
  const stats = [
    {
      title: "Pushups",
      current: `${fitnessStats.pushups.current} reps`,
      target: `${fitnessStats.pushups.target} target`,
      percent: fitnessStats.pushups.percent,
      icon: "activity",
      color: colors.primary,
    },
    {
      title: "Running",
      current: fitnessStats.running.current,
      target: fitnessStats.running.target,
      percent: fitnessStats.running.percent,
      icon: "zap",
      color: "#2563EB",
    },
    {
      title: "Hiking",
      current: fitnessStats.hiking.current,
      target: fitnessStats.hiking.target,
      percent: fitnessStats.hiking.percent,
      icon: "navigation",
      color: "#F59E0B",
    },
    {
      title: "Swimming",
      current: fitnessStats.swimming.current,
      target: fitnessStats.swimming.target,
      percent: fitnessStats.swimming.percent,
      icon: "anchor",
      color: "#06B6D4",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Fitness & Milestones" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Daily Expedition Stamina</Text>
          <Text style={styles.summarySub}>
            Track physical readiness for ridge ascents and wilderness survival.
          </Text>
        </View>

        <View style={styles.grid}>
          {stats.map((st, i) => (
            <View key={i} style={styles.statCard}>
              <View style={[styles.iconCircle, { backgroundColor: `${st.color}15` }]}>
                <Feather name={st.icon} size={22} color={st.color} />
              </View>
              <Text style={styles.statTitle}>{st.title}</Text>
              <Text style={styles.statCurrent}>{st.current}</Text>
              <Text style={styles.statTarget}>{st.target}</Text>

              {/* Progress Bar */}
              <View style={styles.barTrack}>
                <View style={[styles.barFill, { width: `${st.percent}%`, backgroundColor: st.color }]} />
              </View>
              <Text style={styles.percentText}>{st.percent}% completed</Text>
            </View>
          ))}
        </View>
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
  summaryCard: {
    backgroundColor: colors.primaryBg,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.primaryPale,
    marginBottom: spacing.lg,
  },
  summaryTitle: {
    ...typography.h3,
    color: colors.primaryForest,
  },
  summarySub: {
    ...typography.bodyMedium,
    color: colors.primaryDeep,
    marginTop: 4,
    lineHeight: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md,
  },
  statCard: {
    width: "47%",
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.sm,
  },
  statTitle: {
    ...typography.h4,
    color: colors.dark,
  },
  statCurrent: {
    ...typography.h3,
    color: colors.dark,
    marginTop: 4,
  },
  statTarget: {
    ...typography.caption,
    color: colors.gray,
    marginTop: 2,
  },
  barTrack: {
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.bgLight,
    overflow: "hidden",
    marginTop: spacing.md,
    marginBottom: 4,
  },
  barFill: {
    height: "100%",
    borderRadius: 3,
  },
  percentText: {
    ...typography.caption,
    fontWeight: "700",
    color: colors.grayDark,
  },
});
