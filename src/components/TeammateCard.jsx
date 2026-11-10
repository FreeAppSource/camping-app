import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../theme";

export default function TeammateCard({ teammate, onPress, onRemove }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image source={teammate.avatar} style={styles.avatar} />
      
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>{teammate.name}</Text>
        <Text style={styles.role} numberOfLines={1}>{teammate.role}</Text>
        <View style={styles.idRow}>
          <Feather name="hash" size={12} color={colors.primary} />
          <Text style={styles.idText}>{teammate.campingId}</Text>
        </View>
      </View>

      <View style={styles.rightAction}>
        {teammate.badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{teammate.badge}</Text>
          </View>
        )}
        <Feather name="chevron-right" size={18} color={colors.gray} style={{ marginTop: 6 }} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.sm + 4,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.bgLight,
  },
  info: {
    flex: 1,
    marginLeft: spacing.md,
  },
  name: {
    ...typography.h4,
    color: colors.dark,
  },
  role: {
    ...typography.bodySmall,
    color: colors.gray,
    marginTop: 2,
  },
  idRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    gap: 4,
  },
  idText: {
    ...typography.caption,
    color: colors.primaryDark,
    fontWeight: "600",
  },
  rightAction: {
    alignItems: "flex-end",
  },
  badge: {
    backgroundColor: colors.primarySoft,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: radius.xs,
  },
  badgeText: {
    ...typography.caption,
    fontWeight: "700",
    color: colors.primaryForest,
  },
});
