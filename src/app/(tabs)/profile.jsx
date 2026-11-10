import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../../theme";
import Header from "../../components/Header";
import { currentUser } from "../../data";

export default function ProfileScreen() {
  const router = useRouter();

  const handleCopyId = () => {
    Alert.alert("Camping ID Copied", `ID ${currentUser.id} copied to clipboard! Share this with your friends to invite them to your trip.`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="My Account"
        showBack={false}
        rightIcon="edit-3"
        onRightPress={() => router.push("/edit-profile")}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* User Profile Card */}
        <View style={styles.profileCard}>
          <Image source={currentUser.avatar} style={styles.avatar} />
          <Text style={styles.name}>{currentUser.name}</Text>
          <Text style={styles.role}>{currentUser.role}</Text>

          {/* ID Pill with Copy */}
          <TouchableOpacity
            style={styles.idBox}
            onPress={handleCopyId}
            activeOpacity={0.8}
          >
            <View style={styles.idLeft}>
              <Text style={styles.idLabel}>YOUR CAMPING ID</Text>
              <Text style={styles.idValue}>{currentUser.id}</Text>
            </View>
            <Feather name="copy" size={18} color={colors.primary} />
          </TouchableOpacity>
        </View>

        {/* Bio Card */}
        <View style={styles.bioCard}>
          <Text style={styles.bioTitle}>About Me</Text>
          <Text style={styles.bioText}>{currentUser.bio}</Text>
        </View>

        {/* Badges Earned */}
        <View style={styles.badgesCard}>
          <Text style={styles.badgesTitle}>Badges & Achievements</Text>
          <View style={styles.badgeRow}>
            {currentUser.badgesEarned.map((b, i) => (
              <View key={i} style={styles.badgePill}>
                <Feather name="award" size={14} color={colors.primaryForest} />
                <Text style={styles.badgePillText}>{b}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Quick Menu Links */}
        <View style={styles.menuGroup}>
          <TouchableOpacity
            style={styles.menuRow}
            onPress={() => router.push("/teammates")}
          >
            <View style={styles.menuIconCircle}>
              <Feather name="users" size={18} color={colors.primary} />
            </View>
            <Text style={styles.menuTitle}>Teammates & Invites</Text>
            <Feather name="chevron-right" size={18} color={colors.grayLight} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuRow}
            onPress={() => router.push("/fitness")}
          >
            <View style={styles.menuIconCircle}>
              <Feather name="activity" size={18} color={colors.primary} />
            </View>
            <Text style={styles.menuTitle}>Fitness Tracking</Text>
            <Feather name="chevron-right" size={18} color={colors.grayLight} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuRow}
            onPress={() => router.push("/tips")}
          >
            <View style={styles.menuIconCircle}>
              <Feather name="book-open" size={18} color={colors.primary} />
            </View>
            <Text style={styles.menuTitle}>Tips, Tricks & Food Hacks</Text>
            <Feather name="chevron-right" size={18} color={colors.grayLight} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuRow}
            onPress={() => router.push("/how-to-use")}
          >
            <View style={styles.menuIconCircle}>
              <Feather name="help-circle" size={18} color={colors.primary} />
            </View>
            <Text style={styles.menuTitle}>How to Use Camping App</Text>
            <Feather name="chevron-right" size={18} color={colors.grayLight} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuRow}
            onPress={() => router.push("/settings")}
          >
            <View style={styles.menuIconCircle}>
              <Feather name="settings" size={18} color={colors.primary} />
            </View>
            <Text style={styles.menuTitle}>Settings & Language</Text>
            <Feather name="chevron-right" size={18} color={colors.grayLight} />
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => router.replace("/login")}
        >
          <Feather name="log-out" size={18} color={colors.accentRed} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
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
  profileCard: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.lg,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.bgLight,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  name: {
    ...typography.h2,
    color: colors.dark,
    marginTop: spacing.sm,
  },
  role: {
    ...typography.bodyMedium,
    color: colors.gray,
    marginTop: 2,
  },
  idBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.primaryBg,
    borderRadius: radius.sm,
    paddingVertical: 10,
    paddingHorizontal: 16,
    width: "100%",
    marginTop: spacing.md,
    borderWidth: 1,
    borderColor: colors.primaryPale,
  },
  idLeft: {},
  idLabel: {
    ...typography.caption,
    color: colors.primaryForest,
    fontWeight: "700",
  },
  idValue: {
    ...typography.h4,
    color: colors.dark,
    marginTop: 2,
  },
  bioCard: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: spacing.md,
  },
  bioTitle: {
    ...typography.h4,
    color: colors.dark,
    marginBottom: 6,
  },
  bioText: {
    ...typography.bodyMedium,
    color: colors.grayDark,
    lineHeight: 22,
  },
  badgesCard: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: spacing.md,
  },
  badgesTitle: {
    ...typography.h4,
    color: colors.dark,
    marginBottom: 10,
  },
  badgeRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  badgePill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primarySoft,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radius.xs,
    gap: 6,
  },
  badgePillText: {
    ...typography.caption,
    fontWeight: "700",
    color: colors.primaryForest,
  },
  menuGroup: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: spacing.md,
  },
  menuRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.bgLight,
  },
  menuIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.primaryBg,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
  menuTitle: {
    flex: 1,
    ...typography.bodyLarge,
    fontWeight: "500",
    color: colors.dark,
  },
  logoutBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing.md,
    backgroundColor: "#FEE2E2",
    borderRadius: radius.md,
    marginTop: spacing.lg,
    gap: 8,
  },
  logoutText: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.accentRed,
  },
});
