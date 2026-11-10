import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../../theme";
import Header from "../../components/Header";
import ActivityCard from "../../components/ActivityCard";
import CustomButton from "../../components/CustomButton";
import { initialActivities } from "../../data";

export default function ActivitiesScreen() {
  const router = useRouter();
  const [activities, setActivities] = useState(initialActivities);
  const [activeFilter, setActiveFilter] = useState("All"); // All | Pending | Completed

  const toggleComplete = (id) => {
    setActivities((prev) =>
      prev.map((act) =>
        act.id === id ? { ...act, completed: !act.completed } : act
      )
    );
  };

  const deleteActivity = (id) => {
    setActivities((prev) => prev.filter((act) => act.id !== id));
  };

  const filtered = activities.filter((act) => {
    if (activeFilter === "Pending") return !act.completed;
    if (activeFilter === "Completed") return act.completed;
    return true;
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Activities"
        subtitle="Day 01 • 16 day’s remain"
        showBack={false}
        rightIcon="plus"
        onRightPress={() => router.push("/add-activity")}
      />

      {/* Filter Tabs */}
      <View style={styles.filterRow}>
        {["All", "Pending", "Completed"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.filterTab, activeFilter === tab && styles.filterTabActive]}
            onPress={() => setActiveFilter(tab)}
          >
            <Text
              style={[
                styles.filterTabText,
                activeFilter === tab && styles.filterTabTextActive,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {filtered.length === 0 ? (
          <View style={styles.emptyState}>
            <View style={styles.emptyIconCircle}>
              <Feather name="check-circle" size={40} color={colors.primary} />
            </View>
            <Text style={styles.emptyTitle}>You didn’t add any Activity yet</Text>
            <Text style={styles.emptySub}>
              Start adding camping tasks, trail explorations, or food schedules.
            </Text>
            <CustomButton
              title="Add Activity"
              variant="primary"
              icon="plus"
              onPress={() => router.push("/add-activity")}
              style={{ marginTop: spacing.lg }}
            />
          </View>
        ) : (
          filtered.map((act) => (
            <ActivityCard
              key={act.id}
              activity={act}
              onPress={() =>
                router.push({
                  pathname: "/activity-view",
                  params: { id: act.id },
                })
              }
              onToggleComplete={() => toggleComplete(act.id)}
              onDelete={() => deleteActivity(act.id)}
            />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  filterRow: {
    flexDirection: "row",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    gap: spacing.sm,
  },
  filterTab: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: radius.full,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
  },
  filterTabActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  filterTabText: {
    ...typography.bodySmall,
    fontWeight: "600",
    color: colors.grayDark,
  },
  filterTabTextActive: {
    color: colors.white,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    paddingBottom: spacing.xxl,
  },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    paddingHorizontal: spacing.lg,
  },
  emptyIconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primaryBg,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md,
  },
  emptyTitle: {
    ...typography.h3,
    color: colors.dark,
    textAlign: "center",
  },
  emptySub: {
    ...typography.bodyMedium,
    color: colors.gray,
    textAlign: "center",
    marginTop: spacing.xs,
    lineHeight: 22,
  },
});
