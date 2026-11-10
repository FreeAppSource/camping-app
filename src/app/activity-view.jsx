import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../theme";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";
import { initialActivities } from "../data";

export default function ActivityViewScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const activity = initialActivities.find((a) => a.id === id) || initialActivities[2];
  const [completed, setCompleted] = useState(activity.completed);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Activity"
        rightIcon="trash-2"
        onRightPress={() => router.back()}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.authorBadgeRow}>
          <View style={styles.authorBadge}>
            <Text style={styles.authorText}>{activity.author}</Text>
          </View>
          <View style={styles.dayBadge}>
            <Text style={styles.dayText}>{activity.day}</Text>
          </View>
        </View>

        <Text style={styles.title}>{activity.title}</Text>

        <View style={styles.card}>
          <Text style={styles.cardHeader}>Description</Text>
          <Text style={styles.descriptionText}>{activity.description}</Text>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoBox}>
            <Feather name="tag" size={16} color={colors.primary} />
            <Text style={styles.infoLabel}>Category</Text>
            <Text style={styles.infoValue}>{activity.category || "General"}</Text>
          </View>
          <View style={styles.infoBox}>
            <Feather name="flag" size={16} color={colors.accentRed} />
            <Text style={styles.infoLabel}>Priority</Text>
            <Text style={styles.infoValue}>{activity.priority || "Medium"}</Text>
          </View>
        </View>

        <View style={styles.statusBox}>
          <Text style={styles.statusLabel}>Current Status</Text>
          <Text style={[styles.statusValue, completed && { color: colors.primary }]}>
            {completed ? "Completed" : "In Progress / Pending"}
          </Text>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <CustomButton
          title={completed ? "Mark as Pending" : "Mark as Complete"}
          variant={completed ? "secondary" : "primary"}
          icon={completed ? "rotate-ccw" : "check"}
          onPress={() => setCompleted(!completed)}
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
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: 100,
  },
  authorBadgeRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: spacing.sm,
  },
  authorBadge: {
    backgroundColor: colors.primaryBg,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: radius.xs,
  },
  authorText: {
    ...typography.caption,
    color: colors.primaryDark,
    fontWeight: "700",
  },
  dayBadge: {
    backgroundColor: colors.bgLight,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: radius.xs,
  },
  dayText: {
    ...typography.caption,
    color: colors.darkMuted,
    fontWeight: "600",
  },
  title: {
    ...typography.h1,
    color: colors.dark,
    marginBottom: spacing.lg,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm,
  },
  cardHeader: {
    ...typography.h4,
    color: colors.dark,
    marginBottom: 8,
  },
  descriptionText: {
    ...typography.bodyLarge,
    color: colors.darkSecondary,
    lineHeight: 24,
  },
  infoRow: {
    flexDirection: "row",
    gap: spacing.md,
    marginTop: spacing.md,
  },
  infoBox: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
  },
  infoLabel: {
    ...typography.caption,
    color: colors.gray,
    marginTop: 4,
  },
  infoValue: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.dark,
    marginTop: 2,
  },
  statusBox: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: spacing.md,
  },
  statusLabel: {
    ...typography.caption,
    color: colors.gray,
  },
  statusValue: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.accentYellow,
    marginTop: 4,
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
});
