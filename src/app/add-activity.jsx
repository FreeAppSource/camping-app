import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../theme";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

export default function AddActivityScreen() {
  const router = useRouter();
  const [heading, setHeading] = useState("Find a Place");
  const [description, setDescription] = useState(
    "We need to find a perfect place for set up our camp’s and where we will be protected from the angry Bears."
  );
  const [day, setDay] = useState("Day 01");
  const [category, setCategory] = useState("Shelter");

  const categories = ["Shelter", "Food", "Sightseeing", "Hiking", "Safety"];

  const handleSave = () => {
    if (!heading.trim()) {
      Alert.alert("Validation", "Please provide an activity title.");
      return;
    }
    Alert.alert("Success", "Activity added to Day 01 schedule!");
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Add Activity" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Activity Title</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.textInput}
              value={heading}
              onChangeText={setHeading}
              placeholder="e.g. Find a Place"
              placeholderTextColor={colors.grayLight}
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Description</Text>
          <View style={[styles.inputBox, styles.textAreaBox]}>
            <TextInput
              style={[styles.textInput, styles.textArea]}
              value={description}
              onChangeText={setDescription}
              placeholder="Add details, instructions or safety measures..."
              placeholderTextColor={colors.grayLight}
              multiline
              numberOfLines={4}
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Category</Text>
          <View style={styles.catRow}>
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat}
                style={[styles.catPill, category === cat && styles.catPillActive]}
                onPress={() => setCategory(cat)}
              >
                <Text
                  style={[
                    styles.catText,
                    category === cat && styles.catTextActive,
                  ]}
                >
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Scheduled Day</Text>
          <View style={styles.daySelector}>
            {["Day 01", "Day 02", "Day 03", "Day 04"].map((d) => (
              <TouchableOpacity
                key={d}
                style={[styles.dayPill, day === d && styles.dayPillActive]}
                onPress={() => setDay(d)}
              >
                <Text
                  style={[styles.dayText, day === d && styles.dayTextActive]}
                >
                  {d}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <CustomButton
          title="Save Activity"
          variant="primary"
          onPress={handleSave}
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
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: 100,
  },
  inputGroup: {
    marginBottom: spacing.lg,
  },
  label: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.dark,
    marginBottom: 8,
  },
  inputBox: {
    backgroundColor: colors.white,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    height: 50,
    justifyContent: "center",
  },
  textAreaBox: {
    height: 120,
    paddingVertical: spacing.sm,
  },
  textInput: {
    ...typography.bodyLarge,
    color: colors.dark,
  },
  textArea: {
    height: "100%",
    textAlignVertical: "top",
  },
  catRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  catPill: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: radius.full,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
  },
  catPillActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  catText: {
    ...typography.bodySmall,
    fontWeight: "600",
    color: colors.grayDark,
  },
  catTextActive: {
    color: colors.white,
  },
  daySelector: {
    flexDirection: "row",
    gap: 8,
  },
  dayPill: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: radius.sm,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
  },
  dayPillActive: {
    backgroundColor: colors.dark,
    borderColor: colors.dark,
  },
  dayText: {
    ...typography.caption,
    fontWeight: "700",
    color: colors.dark,
  },
  dayTextActive: {
    color: colors.white,
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
