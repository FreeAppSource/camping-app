import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../theme";
import Header from "../components/Header";
import { locationsList } from "../data";

export default function LocationsScreen() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const regions = ["All", "North America", "Europe", "South Africa"];

  const filtered = locationsList.filter((loc) => {
    const matchRegion =
      selectedRegion === "All" || loc.region === selectedRegion;
    const matchSearch =
      loc.name.toLowerCase().includes(search.toLowerCase()) ||
      loc.state.toLowerCase().includes(search.toLowerCase());
    return matchRegion && matchSearch;
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Locations" />

      {/* Search Input */}
      <View style={styles.searchBox}>
        <Feather name="search" size={18} color={colors.gray} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
          placeholder="Search campsites, islands, peaks..."
          placeholderTextColor={colors.grayLight}
        />
        {search ? (
          <TouchableOpacity onPress={() => setSearch("")}>
            <Feather name="x" size={18} color={colors.gray} />
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Region Filter Pills */}
      <View style={styles.regionRow}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingHorizontal: spacing.lg }}>
          {regions.map((reg) => (
            <TouchableOpacity
              key={reg}
              style={[
                styles.regionPill,
                selectedRegion === reg && styles.regionPillActive,
              ]}
              onPress={() => setSelectedRegion(reg)}
            >
              <Text
                style={[
                  styles.regionText,
                  selectedRegion === reg && styles.regionTextActive,
                ]}
              >
                {reg}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Locations List */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.countText}>{filtered.length} Campsites Available</Text>

        {filtered.map((loc) => (
          <TouchableOpacity
            key={loc.id}
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/location-view",
                params: { id: loc.id },
              })
            }
            activeOpacity={0.85}
          >
            <Image source={loc.image} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <View style={styles.badgeRow}>
                <View style={styles.tagBadge}>
                  <Text style={styles.tagText}>{loc.bestFor}</Text>
                </View>
                <View style={styles.ratingBadge}>
                  <Feather name="star" size={12} color="#F59E0B" />
                  <Text style={styles.ratingText}>{loc.rating}</Text>
                </View>
              </View>

              <Text style={styles.cardTitle}>{loc.name}</Text>
              <View style={styles.locationMeta}>
                <Feather name="map-pin" size={13} color={colors.primary} />
                <Text style={styles.locationState}>{loc.state}</Text>
              </View>

              <Text style={styles.cardDesc} numberOfLines={2}>
                {loc.description}
              </Text>
            </View>
          </TouchableOpacity>
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
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    marginHorizontal: spacing.lg,
    paddingHorizontal: spacing.md,
    height: 48,
    marginTop: spacing.xs,
  },
  searchIcon: {
    marginRight: spacing.sm,
  },
  searchInput: {
    flex: 1,
    ...typography.bodyMedium,
    color: colors.dark,
  },
  regionRow: {
    paddingVertical: spacing.sm,
  },
  regionPill: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: radius.full,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
  },
  regionPillActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  regionText: {
    ...typography.bodySmall,
    fontWeight: "600",
    color: colors.grayDark,
  },
  regionTextActive: {
    color: colors.white,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  countText: {
    ...typography.caption,
    color: colors.gray,
    marginBottom: spacing.sm,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  cardImage: {
    width: "100%",
    height: 180,
  },
  cardContent: {
    padding: spacing.md,
  },
  badgeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  tagBadge: {
    backgroundColor: colors.primaryBg,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: radius.xs,
  },
  tagText: {
    ...typography.caption,
    fontWeight: "700",
    color: colors.primaryForest,
  },
  ratingBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    ...typography.caption,
    fontWeight: "700",
    color: colors.dark,
  },
  cardTitle: {
    ...typography.h3,
    color: colors.dark,
  },
  locationMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 4,
  },
  locationState: {
    ...typography.bodySmall,
    color: colors.grayDark,
    fontWeight: "500",
  },
  cardDesc: {
    ...typography.bodyMedium,
    color: colors.gray,
    marginTop: spacing.sm,
    lineHeight: 20,
  },
});
