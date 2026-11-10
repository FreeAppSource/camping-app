import React from "react";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../theme";

export default function CustomButton({
  title,
  onPress,
  variant = "primary", // primary | secondary | outline | danger | text
  size = "large",     // small | medium | large
  icon,
  iconRight,
  disabled = false,
  loading = false,
  style,
  textStyle,
}) {
  const getButtonStyles = () => {
    switch (variant) {
      case "secondary":
        return styles.secondaryButton;
      case "outline":
        return styles.outlineButton;
      case "danger":
        return styles.dangerButton;
      case "text":
        return styles.textButton;
      case "primary":
      default:
        return styles.primaryButton;
    }
  };

  const getTextStyles = () => {
    switch (variant) {
      case "secondary":
        return styles.secondaryText;
      case "outline":
        return styles.outlineText;
      case "danger":
        return styles.dangerText;
      case "text":
        return styles.textVariantText;
      case "primary":
      default:
        return styles.primaryText;
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return styles.smallSize;
      case "medium":
        return styles.mediumSize;
      case "large":
      default:
        return styles.largeSize;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.base,
        getButtonStyles(),
        getSizeStyles(),
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === "outline" || variant === "text" ? colors.primary : colors.white}
          size="small"
        />
      ) : (
        <>
          {icon && (
            <Feather
              name={icon}
              size={size === "small" ? 16 : 18}
              color={
                variant === "outline" || variant === "text"
                  ? colors.primary
                  : variant === "secondary"
                  ? colors.white
                  : colors.white
              }
              style={styles.iconLeft}
            />
          )}
          <Text style={[styles.baseText, getTextStyles(), textStyle]}>
            {title}
          </Text>
          {iconRight && (
            <Feather
              name={iconRight}
              size={size === "small" ? 16 : 18}
              color={
                variant === "outline" || variant === "text"
                  ? colors.primary
                  : colors.white
              }
              style={styles.iconRight}
            />
          )}
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.md,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    ...shadows.sm,
  },
  secondaryButton: {
    backgroundColor: colors.dark,
    ...shadows.sm,
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  dangerButton: {
    backgroundColor: colors.accentRed,
  },
  textButton: {
    backgroundColor: "transparent",
  },
  smallSize: {
    paddingVertical: spacing.xs + 2,
    paddingHorizontal: spacing.md,
    borderRadius: radius.sm,
  },
  mediumSize: {
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.lg,
  },
  largeSize: {
    height: 52,
    paddingHorizontal: spacing.lg,
  },
  baseText: {
    fontWeight: "600",
    textAlign: "center",
  },
  primaryText: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.white,
  },
  secondaryText: {
    ...typography.bodyLarge,
    fontWeight: "600",
    color: colors.white,
  },
  outlineText: {
    ...typography.bodyMedium,
    fontWeight: "600",
    color: colors.primary,
  },
  dangerText: {
    ...typography.bodyMedium,
    fontWeight: "600",
    color: colors.white,
  },
  textVariantText: {
    ...typography.bodyMedium,
    fontWeight: "600",
    color: colors.primary,
  },
  disabled: {
    opacity: 0.5,
  },
  iconLeft: {
    marginRight: spacing.sm,
  },
  iconRight: {
    marginLeft: spacing.sm,
  },
});
