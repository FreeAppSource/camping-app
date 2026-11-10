import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Alert,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../theme";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";
import { locationsList } from "../data";

const { height } = Dimensions.get("window");

export default function LocationViewScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const location =
    locationsList.find((loc) => loc.id === id) || locationsList[0];

  const handleSelect = () => {
    Alert.alert(
      "Location Selected",
      `${location.name} has been set as your active camping destination!`,
      [{ text: "OK", onPress: () => router.push("/(tabs)") }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Location View" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Image source={location.image} style={styles.heroImage} />

        <View style={styles.content}>
          <View style={styles.badgeRow}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{location.bestFor}</Text>
            </View>
            <View style={styles.ratingBadge}>
              <Feather name="star" size={14} color="#F59E0B" />
              <Text style={styles.ratingText}>{location.rating} ({location.reviews} reviews)</Text>
            </View>
          </View>

          <Text style={styles.title}>{location.name}</Text>
          <View style={styles.stateRow}>
            <Feather name="map-pin" size={16} color={colors.primary} />
            <Text style={styles.stateText}>{location.state}</Text>
          </View>

          <Text style={styles.description}>{location.description}</Text>

          {/* Features */}
          <Text style={styles.subHeading}>Campsite Features</Text>
          <View style={styles.featureGrid}>
            {location.features.map((feat, idx) => (
              <View key={idx} style={styles.featurePill}>
                <Feather name="check" size={14} color={colors.primary} />
                <Text style={styles.featText}>{feat}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <CustomButton
          title="Select Location for Trip"
          variant="primary"
          onPress={handleSelect}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  heroImage: {
    width: "100%",
    height: 260,
  },
  content: {
    padding: spacing.lg,
  },
  badgeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  badge: {
    backgroundColor: colors.primaryBg,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radius.xs,
  },
  badgeText: {
    ...typography.caption,
    color: colors.primaryForest,
    fontWeight: "700",
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
  title: {
    ...typography.h1,
    color: colors.dark,
  },
  stateRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 4,
    marginBottom: spacing.md,
  },
  stateText: {
    ...typography.bodyLarge,
    color: colors.grayDark,
    fontWeight: "600",
  },
  description: {
    ...typography.bodyLarge,
    color: colors.darkSecondary,
    lineHeight: 24,
  },
  subHeading: {
    ...typography.h3,
    color: colors.dark,
    marginTop: spacing.xl,
    marginBottom: spacing.sm,
  },
  featureGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  featurePill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 6,
  },
  featText: {
    ...typography.bodyMedium,
    color: colors.dark,
    fontWeight: "600",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
});
