import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../theme";
import { currentUser, currentTrip } from "../data";

export default function MenuDrawer({ visible, onClose }) {
  const router = useRouter();

  const handleNav = (route) => {
    onClose();
    setTimeout(() => {
      router.push(route);
    }, 150);
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} onPress={onClose} activeOpacity={1} />
        
        <View style={styles.drawer}>
          {/* User Profile Header */}
          <View style={styles.userSection}>
            <Image source={currentUser.avatar} style={styles.avatar} />
            <View style={styles.userMeta}>
              <Text style={styles.userName}>{currentUser.name}</Text>
              <View style={styles.idBadge}>
                <Feather name="hash" size={11} color={colors.primaryDark} />
                <Text style={styles.idText}>{currentUser.id}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Feather name="x" size={22} color={colors.dark} />
            </TouchableOpacity>
          </View>

          {/* Current Trip Summary Card */}
          <View style={styles.tripCard}>
            <Text style={styles.tripLabel}>Active Camping Trip</Text>
            <Text style={styles.tripName}>{currentTrip.name}</Text>
            <View style={styles.tripRow}>
              <Feather name="map-pin" size={12} color={colors.primary} />
              <Text style={styles.tripLocation}>{currentTrip.location}</Text>
            </View>
          </View>

          <ScrollView style={styles.menuItems} showsVerticalScrollIndicator={false}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => handleNav("/(tabs)")}
            >
              <Feather name="compass" size={20} color={colors.primary} />
              <Text style={styles.menuText}>Camping Dashboard</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => handleNav("/locations")}
            >
              <Feather name="map" size={20} color={colors.primary} />
              <Text style={styles.menuText}>Explore Locations</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => handleNav("/teammates")}
            >
              <Feather name="users" size={20} color={colors.primary} />
              <Text style={styles.menuText}>Teammates & Roles</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => handleNav("/fitness")}
            >
              <Feather name="activity" size={20} color={colors.primary} />
              <Text style={styles.menuText}>Fitness & Milestones</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => handleNav("/tips")}
            >
              <Feather name="book-open" size={20} color={colors.primary} />
              <Text style={styles.menuText}>Tips & Food Hacks</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => handleNav("/how-to-use")}
            >
              <Feather name="help-circle" size={20} color={colors.primary} />
              <Text style={styles.menuText}>How to Use Camping</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => handleNav("/feedback")}
            >
              <Feather name="message-square" size={20} color={colors.primary} />
              <Text style={styles.menuText}>Give Feedback</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => handleNav("/settings")}
            >
              <Feather name="settings" size={20} color={colors.primary} />
              <Text style={styles.menuText}>Settings & Data</Text>
            </TouchableOpacity>
          </ScrollView>

          {/* Bottom Logout */}
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => handleNav("/login")}
          >
            <Feather name="log-out" size={18} color={colors.accentRed} />
            <Text style={styles.logoutText}>Log out of Device</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  backdrop: {
    flex: 1,
  },
  drawer: {
    width: "82%",
    maxWidth: 320,
    backgroundColor: colors.white,
    paddingTop: 54,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
  },
  userSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.bgLight,
  },
  userMeta: {
    flex: 1,
    marginLeft: spacing.md,
  },
  userName: {
    ...typography.h3,
    color: colors.dark,
  },
  idBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primaryBg,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: radius.xs,
    marginTop: 4,
    alignSelf: "flex-start",
    gap: 4,
  },
  idText: {
    ...typography.caption,
    color: colors.primaryDark,
    fontWeight: "700",
  },
  closeBtn: {
    padding: 6,
  },
  tripCard: {
    backgroundColor: colors.primaryBg,
    borderRadius: radius.sm,
    padding: spacing.md,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.primaryPale,
  },
  tripLabel: {
    ...typography.caption,
    color: colors.primaryForest,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  tripName: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.dark,
    marginTop: 2,
  },
  tripRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    gap: 6,
  },
  tripLocation: {
    ...typography.caption,
    color: colors.grayDark,
    fontWeight: "500",
  },
  menuItems: {
    flex: 1,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.md - 2,
    gap: spacing.md,
  },
  menuText: {
    ...typography.bodyLarge,
    color: colors.darkSecondary,
    fontWeight: "500",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    gap: spacing.md,
    marginTop: spacing.md,
  },
  logoutText: {
    ...typography.bodyMedium,
    color: colors.accentRed,
    fontWeight: "600",
  },
});
