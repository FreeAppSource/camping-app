import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../theme";
import Header from "../components/Header";
import { notificationsList } from "../data";

export default function NotificationsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Notifications" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {notificationsList.map((notif) => (
          <View
            key={notif.id}
            style={[styles.card, !notif.read && styles.cardUnread]}
          >
            <View style={styles.iconCircle}>
              <Feather name={notif.icon || "bell"} size={18} color={colors.primary} />
            </View>
            <View style={styles.info}>
              <Text style={styles.title}>{notif.title}</Text>
              <Text style={styles.subtitle}>{notif.subtitle}</Text>
              <Text style={styles.date}>{notif.date}</Text>
            </View>
          </View>
        ))}
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
  card: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.sm,
  },
  cardUnread: {
    backgroundColor: colors.primaryBg,
    borderColor: colors.primaryPale,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.bgLight,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
  info: {
    flex: 1,
  },
  title: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.dark,
  },
  subtitle: {
    ...typography.bodyMedium,
    color: colors.grayDark,
    marginTop: 2,
  },
  date: {
    ...typography.caption,
    color: colors.gray,
    marginTop: 4,
  },
});
