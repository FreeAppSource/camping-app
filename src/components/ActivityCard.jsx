import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../theme";

export default function ActivityCard({
  activity,
  onPress,
  onToggleComplete,
  onDelete,
}) {
  const isCompleted = activity.completed;

  return (
    <TouchableOpacity
      style={[styles.card, isCompleted && styles.cardCompleted]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <View style={styles.topRow}>
        <TouchableOpacity
          style={[styles.checkbox, isCompleted && styles.checkboxChecked]}
          onPress={onToggleComplete}
          activeOpacity={0.7}
        >
          {isCompleted && <Feather name="check" size={14} color={colors.white} />}
        </TouchableOpacity>

        <View style={styles.titleArea}>
          <Text
            style={[styles.title, isCompleted && styles.textCompleted]}
            numberOfLines={1}
          >
            {activity.title}
          </Text>
          <View style={styles.metaRow}>
            <View style={styles.authorBadge}>
              <Text style={styles.authorText}>{activity.author}</Text>
            </View>
            <Text style={styles.dayText}>{activity.day}</Text>
          </View>
        </View>

        {onDelete && (
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={onDelete}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Feather name="trash-2" size={16} color={colors.gray} />
          </TouchableOpacity>
        )}
      </View>

      <Text
        style={[styles.description, isCompleted && styles.descCompleted]}
        numberOfLines={2}
      >
        {activity.description}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm,
  },
  cardCompleted: {
    backgroundColor: colors.primaryBg,
    borderColor: colors.primaryPale,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: radius.xs,
    borderWidth: 2,
    borderColor: colors.grayLight,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    marginRight: spacing.sm + 4,
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  titleArea: {
    flex: 1,
  },
  title: {
    ...typography.h4,
    color: colors.dark,
  },
  textCompleted: {
    textDecorationLine: "line-through",
    color: colors.gray,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    gap: 8,
  },
  authorBadge: {
    backgroundColor: colors.bgLight,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: radius.xs,
  },
  authorText: {
    ...typography.caption,
    color: colors.darkMuted,
    fontWeight: "600",
  },
  dayText: {
    ...typography.caption,
    color: colors.primaryDark,
    fontWeight: "700",
  },
  deleteButton: {
    padding: 4,
  },
  description: {
    ...typography.bodyMedium,
    color: colors.grayDark,
    marginTop: spacing.sm,
    lineHeight: 20,
  },
  descCompleted: {
    color: colors.gray,
  },
});
