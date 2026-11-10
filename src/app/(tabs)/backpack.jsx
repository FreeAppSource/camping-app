import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../../theme";
import Header from "../../components/Header";
import BackpackItem from "../../components/BackpackItem";
import { initialBackpackItems } from "../../data";

export default function BackpackScreen() {
  const [items, setItems] = useState(initialBackpackItems);
  const [activeCategory, setActiveCategory] = useState("All");

  const togglePacked = (id) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, packed: !it.packed } : it))
    );
  };

  const changeQuantity = (id, delta) => {
    setItems((prev) =>
      prev.map((it) => {
        if (it.id === id) {
          const next = it.quantity + delta;
          return { ...it, quantity: next > 0 ? next : 1 };
        }
        return it;
      })
    );
  };

  const categories = ["All", "Sleeping", "Shelter", "Lighting", "Cooking", "Medical"];

  const filtered = items.filter((it) =>
    activeCategory === "All" ? true : it.category === activeCategory
  );

  const packedCount = items.filter((it) => it.packed).length;
  const progressPercent = Math.round((packedCount / items.length) * 100);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Backpack"
        subtitle={`${packedCount} of ${items.length} items packed`}
        showBack={false}
      />

      {/* Progress Bar Card */}
      <View style={styles.progressCard}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressTitle}>Prepare Your Bag</Text>
          <Text style={styles.progressPercent}>{progressPercent}%</Text>
        </View>
        <View style={styles.progressBarTrack}>
          <View style={[styles.progressBarFill, { width: `${progressPercent}%` }]} />
        </View>
        <Text style={styles.progressHint}>
          {progressPercent === 100
            ? "Your backpack is fully ready for Catalina Island!"
            : "Double-check critical equipment before heading out to the ridge."}
        </Text>
      </View>

      {/* Category Pills */}
      <View style={styles.categoryRow}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingHorizontal: spacing.lg }}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[styles.catPill, activeCategory === cat && styles.catPillActive]}
              onPress={() => setActiveCategory(cat)}
            >
              <Text style={[styles.catPillText, activeCategory === cat && styles.catPillTextActive]}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {filtered.map((item) => (
          <BackpackItem
            key={item.id}
            item={item}
            onTogglePacked={() => togglePacked(item.id)}
            onIncrease={() => changeQuantity(item.id, 1)}
            onDecrease={() => changeQuantity(item.id, -1)}
          />
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
  progressCard: {
    backgroundColor: colors.primaryBg,
    marginHorizontal: spacing.lg,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.primaryPale,
    marginTop: spacing.xs,
    marginBottom: spacing.sm,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressTitle: {
    ...typography.h4,
    color: colors.primaryForest,
  },
  progressPercent: {
    ...typography.h3,
    color: colors.primaryDark,
    fontWeight: "800",
  },
  progressBarTrack: {
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primaryPale,
    overflow: "hidden",
    marginTop: spacing.sm,
    marginBottom: 6,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  progressHint: {
    ...typography.caption,
    color: colors.primaryDeep,
  },
  categoryRow: {
    paddingVertical: spacing.sm,
  },
  catPill: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: radius.full,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
  },
  catPillActive: {
    backgroundColor: colors.dark,
    borderColor: colors.dark,
  },
  catPillText: {
    ...typography.bodySmall,
    fontWeight: "600",
    color: colors.grayDark,
  },
  catPillTextActive: {
    color: colors.white,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxl,
  },
});
