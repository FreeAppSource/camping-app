import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../theme";
import Header from "../components/Header";
import { tipsArticles } from "../data";

export default function TipsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Tips & Tricks" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.pageSub}>
          Expert survival knowledge, cooking hacks, and equipment essentials.
        </Text>

        {tipsArticles.map((tip) => (
          <View key={tip.id} style={styles.articleCard}>
            <Image source={tip.image} style={styles.articleImage} />
            <View style={styles.articleBody}>
              <View style={styles.metaRow}>
                <View style={styles.categoryBadge}>
                  <Text style={styles.categoryText}>{tip.category}</Text>
                </View>
                <Text style={styles.readTime}>{tip.readTime}</Text>
              </View>

              <Text style={styles.articleTitle}>{tip.title}</Text>
              <Text style={styles.articleSummary}>{tip.summary}</Text>

              {/* Bullet Points */}
              <View style={styles.pointsList}>
                {tip.points.map((pt, i) => (
                  <View key={i} style={styles.pointRow}>
                    <Feather name="check-circle" size={14} color={colors.primary} style={{ marginTop: 2 }} />
                    <Text style={styles.pointText}>{pt}</Text>
                  </View>
                ))}
              </View>
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
    paddingTop: spacing.xs,
    paddingBottom: spacing.xxl,
  },
  pageSub: {
    ...typography.bodyMedium,
    color: colors.grayDark,
    marginBottom: spacing.md,
  },
  articleCard: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.lg,
    ...shadows.sm,
  },
  articleImage: {
    width: "100%",
    height: 160,
  },
  articleBody: {
    padding: spacing.md,
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  categoryBadge: {
    backgroundColor: colors.primaryBg,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: radius.xs,
  },
  categoryText: {
    ...typography.caption,
    fontWeight: "700",
    color: colors.primaryForest,
  },
  readTime: {
    ...typography.caption,
    color: colors.gray,
  },
  articleTitle: {
    ...typography.h3,
    color: colors.dark,
    lineHeight: 26,
  },
  articleSummary: {
    ...typography.bodyMedium,
    color: colors.grayDark,
    marginTop: 6,
    lineHeight: 20,
  },
  pointsList: {
    marginTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.bgLight,
    paddingTop: spacing.sm,
  },
  pointRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    marginBottom: 6,
  },
  pointText: {
    ...typography.bodySmall,
    color: colors.darkSecondary,
    flex: 1,
    lineHeight: 18,
  },
});
