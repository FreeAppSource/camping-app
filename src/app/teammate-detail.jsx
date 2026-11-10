import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Alert } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../theme";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";
import { teammates } from "../data";

export default function TeammateDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const member = teammates.find((tm) => tm.id === id) || teammates[0];

  const handleRemove = () => {
    Alert.alert(
      "Exit Member",
      `Are you sure you want to remove ${member.name} from this expedition?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Remove",
          style: "destructive",
          onPress: () => router.back(),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Teammate Profile" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileHeader}>
          <Image source={member.avatar} style={styles.avatar} />
          <Text style={styles.name}>{member.name}</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{member.badge}</Text>
          </View>

          <View style={styles.idRow}>
            <Feather name="hash" size={14} color={colors.primary} />
            <Text style={styles.idText}>{member.campingId}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Role & Description</Text>
          <Text style={styles.bioText}>{member.bio}</Text>
        </View>

        <View style={styles.assignedBox}>
          <Text style={styles.cardTitle}>Assigned Camp Responsibilities</Text>
          <View style={styles.dutyRow}>
            <Feather name="check" size={16} color={colors.primary} />
            <Text style={styles.dutyText}>Manage meal plans and campfire cookware</Text>
          </View>
          <View style={styles.dutyRow}>
            <Feather name="check" size={16} color={colors.primary} />
            <Text style={styles.dutyText}>Monitor water rations and food supplies</Text>
          </View>
          <View style={styles.dutyRow}>
            <Feather name="check" size={16} color={colors.primary} />
            <Text style={styles.dutyText}>Lead daily cooking tasks</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <CustomButton
          title="Remove from Trip"
          variant="danger"
          onPress={handleRemove}
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
  profileHeader: {
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: colors.bgLight,
    borderWidth: 3,
    borderColor: colors.primary,
  },
  name: {
    ...typography.h2,
    color: colors.dark,
    marginTop: spacing.sm,
  },
  badge: {
    backgroundColor: colors.primarySoft,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: radius.xs,
    marginTop: 6,
  },
  badgeText: {
    ...typography.caption,
    fontWeight: "800",
    color: colors.primaryForest,
  },
  idRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 8,
  },
  idText: {
    ...typography.bodyMedium,
    fontWeight: "600",
    color: colors.grayDark,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm,
    marginBottom: spacing.md,
  },
  cardTitle: {
    ...typography.h4,
    color: colors.dark,
    marginBottom: 8,
  },
  bioText: {
    ...typography.bodyMedium,
    color: colors.darkSecondary,
    lineHeight: 22,
  },
  assignedBox: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  dutyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 8,
  },
  dutyText: {
    ...typography.bodyMedium,
    color: colors.grayDark,
    flex: 1,
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
