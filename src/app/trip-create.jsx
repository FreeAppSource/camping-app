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

export default function TripCreateScreen() {
  const router = useRouter();
  const [tripName, setTripName] = useState("Our Catalina Trip 2021");
  const [location, setLocation] = useState("Catalina Island");
  const [dateRange, setDateRange] = useState("10 June To 27 June");

  const handleStart = () => {
    Alert.alert(
      "Trip Created!",
      `Trip "${tripName}" at ${location} has been successfully initialized!`,
      [{ text: "Go to Dashboard", onPress: () => router.replace("/(tabs)") }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Add New Trip" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Trip Name</Text>
          <View style={styles.inputContainer}>
            <Feather name="compass" size={18} color={colors.primary} style={styles.icon} />
            <TextInput
              style={styles.textInput}
              value={tripName}
              onChangeText={setTripName}
              placeholder="e.g. Summer Camp 2021"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Location</Text>
            <TouchableOpacity onPress={() => router.push("/locations")}>
              <Text style={styles.linkText}>View Locations</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Feather name="map-pin" size={18} color={colors.primary} style={styles.icon} />
            <TextInput
              style={styles.textInput}
              value={location}
              onChangeText={setLocation}
              placeholder="Select or enter campsite location"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Pick Date</Text>
          <View style={styles.inputContainer}>
            <Feather name="calendar" size={18} color={colors.primary} style={styles.icon} />
            <TextInput
              style={styles.textInput}
              value={dateRange}
              onChangeText={setDateRange}
              placeholder="e.g. 10 June To 27 June"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Teammates</Text>
            <TouchableOpacity onPress={() => router.push("/teammates")}>
              <Text style={styles.linkText}>Add New Teammates</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.teammatesCard}>
            <Feather name="users" size={24} color={colors.primary} />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.teamTitle}>3 Teammates Ready</Text>
              <Text style={styles.teamSub}>Chandler, Emma, and Mike added</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <CustomButton
          title="Continue & Start"
          variant="primary"
          onPress={handleStart}
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
  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.dark,
    marginBottom: 8,
  },
  linkText: {
    ...typography.bodySmall,
    fontWeight: "700",
    color: colors.primary,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    height: 52,
  },
  icon: {
    marginRight: spacing.sm,
  },
  textInput: {
    flex: 1,
    ...typography.bodyLarge,
    color: colors.dark,
  },
  teammatesCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primaryBg,
    borderRadius: radius.sm,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.primaryPale,
  },
  teamTitle: {
    ...typography.bodyLarge,
    fontWeight: "700",
    color: colors.primaryForest,
  },
  teamSub: {
    ...typography.caption,
    color: colors.primaryDark,
    marginTop: 2,
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
