import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../theme";

export default function BackpackItem({
  item,
  onTogglePacked,
  onIncrease,
  onDecrease,
}) {
  return (
    <View style={[styles.itemRow, item.packed && styles.itemRowPacked]}>
      <TouchableOpacity
        style={[styles.checkbox, item.packed && styles.checkboxChecked]}
        onPress={onTogglePacked}
        activeOpacity={0.7}
      >
        {item.packed && <Feather name="check" size={14} color={colors.white} />}
      </TouchableOpacity>

      <View style={styles.info}>
        <Text
          style={[styles.name, item.packed && styles.namePacked]}
          numberOfLines={1}
        >
          {item.name}
        </Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>

      <View style={styles.counter}>
        <TouchableOpacity
          style={styles.counterBtn}
          onPress={onDecrease}
          activeOpacity={0.7}
        >
          <Feather name="minus" size={14} color={colors.dark} />
        </TouchableOpacity>
        <Text style={styles.counterText}>{item.quantity}</Text>
        <TouchableOpacity
          style={styles.counterBtn}
          onPress={onIncrease}
          activeOpacity={0.7}
        >
          <Feather name="plus" size={14} color={colors.dark} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderRadius: radius.sm,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  itemRowPacked: {
    backgroundColor: colors.primaryBg,
    borderColor: colors.primaryPale,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: radius.xs,
    borderWidth: 2,
    borderColor: colors.grayLight,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  info: {
    flex: 1,
  },
  name: {
    ...typography.bodyLarge,
    fontWeight: "600",
    color: colors.dark,
  },
  namePacked: {
    textDecorationLine: "line-through",
    color: colors.gray,
  },
  category: {
    ...typography.caption,
    color: colors.gray,
    marginTop: 2,
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.bgLight,
    borderRadius: radius.xs,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  counterBtn: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  counterText: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.dark,
    minWidth: 24,
    textAlign: "center",
  },
});
