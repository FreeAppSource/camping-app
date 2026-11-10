import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../theme";
import CustomButton from "../components/CustomButton";
import { onboardingSlides } from "../data";

const { width } = Dimensions.get("window");

export default function StartAndOnboardingScreen() {
  const router = useRouter();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const currentSlide = onboardingSlides[currentSlideIndex];

  const handleNext = () => {
    if (currentSlideIndex < onboardingSlides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      router.push("/(tabs)");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Logo */}
      <View style={styles.header}>
        <View style={styles.logoRow}>
          <Text style={styles.logoText}>C</Text>
          <View style={styles.tentIconContainer}>
            <Feather name="triangle" size={24} color={colors.primary} />
          </View>
          <Text style={styles.logoText}>MPING</Text>
        </View>
        <Text style={styles.appTagline}>Next-level outdoor adventures</Text>
      </View>

      {/* Hero Visual Area */}
      <View style={styles.imageArea}>
        <Image
          source={require("../assets/images/hero_camping.png")}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <View style={styles.imageOverlayBadge}>
          <Feather name="compass" size={16} color={colors.white} />
          <Text style={styles.imageBadgeText}>{currentSlide.tagline}</Text>
        </View>
      </View>

      {/* Slide Content */}
      <View style={styles.contentArea}>
        {/* Pagination Dots */}
        <View style={styles.dotsRow}>
          {onboardingSlides.map((_, idx) => (
            <TouchableOpacity
              key={idx}
              onPress={() => setCurrentSlideIndex(idx)}
              style={[
                styles.dot,
                idx === currentSlideIndex && styles.activeDot,
              ]}
            />
          ))}
        </View>

        <Text style={styles.slideTitle}>{currentSlide.title}</Text>
        <Text style={styles.slideSubtitle}>{currentSlide.subtitle}</Text>

        {/* Buttons */}
        <View style={styles.buttonStack}>
          <CustomButton
            title="Log in"
            variant="secondary"
            onPress={() => router.push("/login")}
            style={{ marginBottom: spacing.sm }}
          />

          <CustomButton
            title="Explore App (Guest)"
            variant="primary"
            onPress={() => router.push("/(tabs)")}
          />
        </View>

        {/* Register Footer Link */}
        <View style={styles.footerLinkRow}>
          <Text style={styles.footerText}>Don’t have an Account? </Text>
          <TouchableOpacity onPress={() => router.push("/signup")}>
            <Text style={styles.registerLink}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "space-between",
  },
  header: {
    alignItems: "center",
    paddingTop: spacing.md,
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    ...typography.h1,
    fontSize: 34,
    fontWeight: "900",
    letterSpacing: 2,
    color: colors.dark,
  },
  tentIconContainer: {
    paddingHorizontal: 4,
    transform: [{ rotate: "180deg" }],
  },
  appTagline: {
    ...typography.caption,
    color: colors.primaryDark,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginTop: 2,
  },
  imageArea: {
    width: width - spacing.lg * 2,
    height: 250,
    alignSelf: "center",
    borderRadius: radius.lg,
    overflow: "hidden",
    position: "relative",
    marginVertical: spacing.md,
    backgroundColor: colors.bgLight,
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  imageOverlayBadge: {
    position: "absolute",
    bottom: 12,
    left: 12,
    right: 12,
    backgroundColor: "rgba(24, 24, 27, 0.75)",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: radius.sm,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  imageBadgeText: {
    ...typography.caption,
    color: colors.white,
    fontWeight: "700",
  },
  contentArea: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
    alignItems: "center",
  },
  dotsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.md,
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.grayLight,
  },
  activeDot: {
    width: 24,
    backgroundColor: colors.primary,
  },
  slideTitle: {
    ...typography.h2,
    color: colors.dark,
    textAlign: "center",
  },
  slideSubtitle: {
    ...typography.bodyMedium,
    color: colors.grayDark,
    textAlign: "center",
    marginTop: spacing.sm,
    lineHeight: 22,
    minHeight: 44,
  },
  buttonStack: {
    width: "100%",
    marginTop: spacing.lg,
  },
  footerLinkRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing.md,
  },
  footerText: {
    ...typography.bodyMedium,
    color: colors.gray,
  },
  registerLink: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.primary,
  },
});
