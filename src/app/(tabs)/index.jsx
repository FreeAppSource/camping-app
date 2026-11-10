import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../../theme";
import { currentUser, currentTrip, teammates, initialActivities } from "../../data";
import MenuDrawer from "../../components/MenuDrawer";

const { width } = Dimensions.get("window");

export default function TripsDashboardScreen() {
  const router = useRouter();
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => setDrawerVisible(true)}
          activeOpacity={0.7}
        >
          <Feather name="menu" size={22} color={colors.dark} />
        </TouchableOpacity>

        <View style={styles.idBadge}>
          <Text style={styles.idLabel}>YOUR ID: </Text>
          <Text style={styles.idValue}>{currentUser.id}</Text>
        </View>

        <TouchableOpacity
          style={styles.notifBtn}
          onPress={() => router.push("/notifications")}
          activeOpacity={0.7}
        >
          <Feather name="bell" size={20} color={colors.dark} />
          <View style={styles.notifBadge} />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Camping Trips</Text>
          <Text style={styles.welcomeSub}>
            Organize gear, teammates, and daily tasks
          </Text>
        </View>

        {/* Active Trip Hero Card */}
        <TouchableOpacity
          style={styles.heroTripCard}
          onPress={() => router.push("/location-view")}
          activeOpacity={0.9}
        >
          <Image source={currentTrip.image} style={styles.heroImage} />
          <View style={styles.heroOverlay}>
            <View style={styles.heroBadgeRow}>
              <View style={styles.dayBadge}>
                <Text style={styles.dayBadgeText}>{currentTrip.dayProgress}</Text>
              </View>
              <View style={styles.remainingBadge}>
                <Feather name="clock" size={12} color={colors.white} />
                <Text style={styles.remainingText}>{currentTrip.daysRemaining}</Text>
              </View>
            </View>

            <View style={styles.heroBottom}>
              <Text style={styles.heroTripName}>{currentTrip.name}</Text>
              <View style={styles.locationRow}>
                <Feather name="map-pin" size={14} color={colors.primaryLight} />
                <Text style={styles.locationText}>{currentTrip.location}</Text>
              </View>
              <Text style={styles.dateRangeText}>{currentTrip.dateRange}</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Quick Actions Grid */}
        <View style={styles.actionsGrid}>
          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => router.push("/trip-create")}
            activeOpacity={0.8}
          >
            <View style={[styles.actionIconCircle, { backgroundColor: colors.primaryBg }]}>
              <Feather name="plus-circle" size={22} color={colors.primaryDark} />
            </View>
            <Text style={styles.actionTitle}>Add New Trip</Text>
            <Text style={styles.actionSub}>Create expedition</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => router.push("/locations")}
            activeOpacity={0.8}
          >
            <View style={[styles.actionIconCircle, { backgroundColor: "#EFF6FF" }]}>
              <Feather name="map" size={22} color="#2563EB" />
            </View>
            <Text style={styles.actionTitle}>View Locations</Text>
            <Text style={styles.actionSub}>Top campsites</Text>
          </TouchableOpacity>
        </View>

        {/* Teammates Preview Row */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Teammates ({teammates.length + 1})</Text>
            <Text style={styles.sectionSub}>Collaborating on this trip</Text>
          </View>
          <TouchableOpacity onPress={() => router.push("/teammates")}>
            <Text style={styles.seeAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.teammatesRow}
          contentContainerStyle={{ gap: 12, paddingHorizontal: 2 }}
        >
          {/* Current User */}
          <View style={styles.teammateBubble}>
            <Image source={currentUser.avatar} style={styles.bubbleAvatar} />
            <Text style={styles.bubbleName} numberOfLines={1}>You</Text>
            <Text style={styles.bubbleRole}>Leader</Text>
          </View>

          {/* Members */}
          {teammates.map((tm) => (
            <TouchableOpacity
              key={tm.id}
              style={styles.teammateBubble}
              onPress={() =>
                router.push({
                  pathname: "/teammate-detail",
                  params: { id: tm.id },
                })
              }
            >
              <Image source={tm.avatar} style={styles.bubbleAvatar} />
              <Text style={styles.bubbleName} numberOfLines={1}>{tm.name.split(" ")[0]}</Text>
              <Text style={styles.bubbleRole}>{tm.role}</Text>
            </TouchableOpacity>
          ))}

          {/* Add Teammate Button */}
          <TouchableOpacity
            style={styles.addTeammateBtn}
            onPress={() => router.push("/teammates")}
          >
            <Feather name="user-plus" size={20} color={colors.primary} />
            <Text style={styles.addTeammateText}>Add</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Today's Activities Preview */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Today's Schedule</Text>
            <Text style={styles.sectionSub}>Day 01 tasks</Text>
          </View>
          <TouchableOpacity onPress={() => router.push("/(tabs)/activities")}>
            <Text style={styles.seeAllText}>Manage</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.activitiesList}>
          {initialActivities.slice(0, 3).map((act) => (
            <TouchableOpacity
              key={act.id}
              style={styles.activityRow}
              onPress={() =>
                router.push({
                  pathname: "/activity-view",
                  params: { id: act.id },
                })
              }
            >
              <View
                style={[
                  styles.statusIndicator,
                  act.completed ? styles.statusDone : styles.statusPending,
                ]}
              >
                <Feather
                  name={act.completed ? "check" : "circle"}
                  size={14}
                  color={act.completed ? colors.white : colors.gray}
                />
              </View>
              <View style={styles.actInfo}>
                <Text
                  style={[
                    styles.actTitle,
                    act.completed && { textDecorationLine: "line-through", color: colors.gray },
                  ]}
                  numberOfLines={1}
                >
                  {act.title}
                </Text>
                <Text style={styles.actMeta}>{act.author} • {act.category}</Text>
              </View>
              <Feather name="chevron-right" size={16} color={colors.grayLight} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Menu Drawer */}
      <MenuDrawer
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  menuBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  idBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primaryBg,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.primaryPale,
  },
  idLabel: {
    ...typography.caption,
    color: colors.grayDark,
    fontWeight: "700",
  },
  idValue: {
    ...typography.caption,
    color: colors.primaryForest,
    fontWeight: "900",
  },
  notifBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  notifBadge: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.accentRed,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  welcomeSection: {
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  welcomeTitle: {
    ...typography.h1,
    color: colors.dark,
  },
  welcomeSub: {
    ...typography.bodyMedium,
    color: colors.gray,
    marginTop: 2,
  },
  heroTripCard: {
    height: 220,
    borderRadius: radius.lg,
    overflow: "hidden",
    position: "relative",
    ...shadows.md,
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(24, 24, 27, 0.45)",
    padding: spacing.md,
    justifyContent: "space-between",
  },
  heroBadgeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dayBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radius.xs,
  },
  dayBadgeText: {
    ...typography.caption,
    color: colors.white,
    fontWeight: "800",
  },
  remainingBadge: {
    backgroundColor: "rgba(0,0,0,0.6)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radius.xs,
    gap: 4,
  },
  remainingText: {
    ...typography.caption,
    color: colors.white,
    fontWeight: "600",
  },
  heroBottom: {},
  heroTripName: {
    ...typography.h2,
    color: colors.white,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 4,
  },
  locationText: {
    ...typography.bodyMedium,
    color: colors.white,
    fontWeight: "600",
  },
  dateRangeText: {
    ...typography.caption,
    color: "rgba(255, 255, 255, 0.8)",
    marginTop: 2,
  },
  actionsGrid: {
    flexDirection: "row",
    gap: spacing.md,
    marginTop: spacing.lg,
  },
  actionCard: {
    flex: 1,
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm,
  },
  actionIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.sm,
  },
  actionTitle: {
    ...typography.h4,
    color: colors.dark,
  },
  actionSub: {
    ...typography.caption,
    color: colors.gray,
    marginTop: 2,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: spacing.xl,
    marginBottom: spacing.md,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.dark,
  },
  sectionSub: {
    ...typography.caption,
    color: colors.gray,
    marginTop: 2,
  },
  seeAllText: {
    ...typography.bodyMedium,
    fontWeight: "600",
    color: colors.primary,
  },
  teammatesRow: {
    marginHorizontal: -spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  teammateBubble: {
    alignItems: "center",
    width: 76,
  },
  bubbleAvatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: colors.bgLight,
    borderWidth: 2,
    borderColor: colors.primaryPale,
  },
  bubbleName: {
    ...typography.caption,
    fontWeight: "700",
    color: colors.dark,
    marginTop: 6,
  },
  bubbleRole: {
    fontSize: 10,
    color: colors.gray,
    marginTop: 1,
  },
  addTeammateBtn: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
  },
  addTeammateText: {
    fontSize: 10,
    fontWeight: "700",
    color: colors.primary,
    marginTop: 2,
  },
  activitiesList: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 4,
    ...shadows.sm,
  },
  activityRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.bgLight,
  },
  statusIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
  statusDone: {
    backgroundColor: colors.primary,
  },
  statusPending: {
    backgroundColor: colors.bgLight,
  },
  actInfo: {
    flex: 1,
  },
  actTitle: {
    ...typography.bodyLarge,
    fontWeight: "600",
    color: colors.dark,
  },
  actMeta: {
    ...typography.caption,
    color: colors.gray,
    marginTop: 2,
  },
});
