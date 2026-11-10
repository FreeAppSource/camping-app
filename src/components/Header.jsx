import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { colors, typography, spacing } from "../theme";

export default function Header({
  title,
  subtitle,
  showBack = true,
  onBack,
  rightIcon,
  onRightPress,
  rightText,
  light = false,
}) {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  return (
    <View style={[styles.header, light && styles.headerLight]}>
      <View style={styles.leftContainer}>
        {showBack && (
          <TouchableOpacity
            style={[styles.iconButton, light && styles.iconButtonLight]}
            onPress={handleBack}
            activeOpacity={0.7}
          >
            <Feather
              name="chevron-left"
              size={24}
              color={light ? colors.white : colors.dark}
            />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.titleContainer}>
        <Text
          style={[styles.title, light && styles.textLight]}
          numberOfLines={1}
        >
          {title}
        </Text>
        {subtitle ? (
          <Text
            style={[styles.subtitle, light && styles.textLightMuted]}
            numberOfLines={1}
          >
            {subtitle}
          </Text>
        ) : null}
      </View>

      <View style={styles.rightContainer}>
        {rightIcon ? (
          <TouchableOpacity
            style={[styles.iconButton, light && styles.iconButtonLight]}
            onPress={onRightPress}
            activeOpacity={0.7}
          >
            <Feather
              name={rightIcon}
              size={20}
              color={light ? colors.white : colors.dark}
            />
          </TouchableOpacity>
        ) : rightText ? (
          <TouchableOpacity onPress={onRightPress} activeOpacity={0.7}>
            <Text style={[styles.rightText, light && styles.textLight]}>
              {rightText}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.md,
    backgroundColor: colors.background,
  },
  headerLight: {
    backgroundColor: "transparent",
  },
  leftContainer: {
    width: 44,
    alignItems: "flex-start",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
  rightContainer: {
    width: 44,
    alignItems: "flex-end",
  },
  title: {
    ...typography.h3,
    color: colors.dark,
    textAlign: "center",
  },
  subtitle: {
    ...typography.caption,
    color: colors.gray,
    marginTop: 2,
  },
  textLight: {
    color: colors.white,
  },
  textLightMuted: {
    color: "rgba(255, 255, 255, 0.75)",
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.bgLight,
    alignItems: "center",
    justifyContent: "center",
  },
  iconButtonLight: {
    backgroundColor: "rgba(0, 0, 0, 0.35)",
  },
  rightText: {
    ...typography.bodyMedium,
    fontWeight: "600",
    color: colors.primary,
  },
});
