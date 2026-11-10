import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../theme";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";

export default function FeedbackScreen() {
  const router = useRouter();
  const [name, setName] = useState("Will Smith");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState(
    "I Just want to say that your app is insanely great and I love it. And recently I gave 5 star rating to this app."
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Feedback" />

      <View style={styles.content}>
        <Text style={styles.description}>
          We are continuously trying to make the app better and your experience
          matters. If you are seeing any kind of problems or bugs, let us know!
        </Text>

        {/* Rating Stars */}
        <View style={styles.starRow}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => setRating(star)}>
              <Feather
                name="star"
                size={32}
                color={star <= rating ? "#F59E0B" : colors.border}
              />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Name</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.textInput}
              value={name}
              onChangeText={setName}
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Message</Text>
          <View style={[styles.inputBox, styles.textAreaBox]}>
            <TextInput
              style={[styles.textInput, styles.textArea]}
              value={message}
              onChangeText={setMessage}
              multiline
              numberOfLines={4}
            />
          </View>
        </View>

        <CustomButton
          title="Submit Feedback"
          variant="primary"
          onPress={handleSubmit}
          style={{ marginTop: spacing.md }}
        />
      </View>

      {/* Success Modal */}
      <Modal visible={submitted} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.successModal}>
            <View style={styles.checkCircle}>
              <Feather name="check" size={36} color={colors.white} />
            </View>
            <Text style={styles.hurreyTitle}>Hurrey!</Text>
            <Text style={styles.hurreyDesc}>
              Thank you for submitting your valuable review. We will read your
              message soon and make Camping even better.
            </Text>
            <CustomButton
              title="Go Back"
              variant="primary"
              onPress={() => {
                setSubmitted(false);
                router.back();
              }}
              style={{ width: "100%", marginTop: spacing.lg }}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
  },
  description: {
    ...typography.bodyMedium,
    color: colors.grayDark,
    lineHeight: 22,
    marginBottom: spacing.md,
  },
  starRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    marginVertical: spacing.md,
  },
  inputGroup: {
    marginBottom: spacing.md,
  },
  label: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.dark,
    marginBottom: 6,
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
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.lg,
  },
  successModal: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.xl,
    alignItems: "center",
    width: "100%",
    maxWidth: 340,
  },
  checkCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md,
  },
  hurreyTitle: {
    ...typography.h1,
    color: colors.dark,
  },
  hurreyDesc: {
    ...typography.bodyMedium,
    color: colors.grayDark,
    textAlign: "center",
    marginTop: spacing.xs,
    lineHeight: 22,
  },
});
