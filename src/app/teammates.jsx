import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Modal,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, spacing } from "../theme";
import Header from "../components/Header";
import TeammateCard from "../components/TeammateCard";
import CustomButton from "../components/CustomButton";
import { teammates as initialTeammates, currentUser } from "../data";

export default function TeammatesScreen() {
  const router = useRouter();
  const [list, setList] = useState(initialTeammates);
  const [modalVisible, setModalVisible] = useState(false);
  const [inviteId, setInviteId] = useState("CMP22210028");
  const [errorText, setErrorText] = useState("");

  const handleSendInvite = () => {
    if (!inviteId.startsWith("CMP") || inviteId.length < 8) {
      setErrorText("Looks like this ID is not valid. Try another one (e.g. CMP22210028).");
      return;
    }
    setErrorText("");
    Alert.alert("Request Sent", `Invitation sent to ID ${inviteId}! They will be added as soon as they accept.`);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Teammates"
        rightIcon="user-plus"
        onRightPress={() => setModalVisible(true)}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Your Camping ID reminder */}
        <View style={styles.idCard}>
          <Text style={styles.idTitle}>Your Camping ID</Text>
          <Text style={styles.idSub}>
            Share this with friends so they can add you to their expedition.
          </Text>
          <View style={styles.idBadge}>
            <Feather name="hash" size={16} color={colors.primaryDark} />
            <Text style={styles.idCode}>{currentUser.id}</Text>
          </View>
        </View>

        <Text style={styles.sectionHeader}>Trip Members ({list.length})</Text>

        {list.map((tm) => (
          <TeammateCard
            key={tm.id}
            teammate={tm}
            onPress={() =>
              router.push({
                pathname: "/teammate-detail",
                params: { id: tm.id },
              })
            }
          />
        ))}

        <CustomButton
          title="Add New Teammate"
          variant="outline"
          icon="plus"
          onPress={() => setModalVisible(true)}
          style={{ marginTop: spacing.md }}
        />
      </ScrollView>

      {/* Add Teammate Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Add Teammate</Text>
              <Feather
                name="x"
                size={22}
                color={colors.dark}
                onPress={() => setModalVisible(false)}
              />
            </View>

            <Text style={styles.modalDesc}>
              Ask your teammate to log-in first on Camping App to receive their
              unique ID. Then input the ID below to send an invite notification.
            </Text>

            {errorText ? (
              <View style={styles.errorBox}>
                <Feather name="alert-circle" size={16} color={colors.accentRed} />
                <Text style={styles.errorText}>{errorText}</Text>
              </View>
            ) : null}

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Teammate ID</Text>
              <View style={styles.inputBox}>
                <Feather name="hash" size={18} color={colors.gray} style={{ marginRight: 8 }} />
                <TextInput
                  style={styles.textInput}
                  value={inviteId}
                  onChangeText={(val) => {
                    setInviteId(val);
                    setErrorText("");
                  }}
                  placeholder="CMP22210028"
                  autoCapitalize="characters"
                />
              </View>
            </View>

            <CustomButton
              title="Send Request"
              variant="primary"
              onPress={handleSendInvite}
              style={{ marginTop: spacing.md }}
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
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    paddingBottom: spacing.xxl,
  },
  idCard: {
    backgroundColor: colors.primaryBg,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.primaryPale,
    marginBottom: spacing.lg,
  },
  idTitle: {
    ...typography.h4,
    color: colors.primaryForest,
  },
  idSub: {
    ...typography.bodySmall,
    color: colors.primaryDeep,
    marginTop: 2,
    lineHeight: 18,
  },
  idBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radius.xs,
    marginTop: spacing.sm,
    alignSelf: "flex-start",
    gap: 6,
  },
  idCode: {
    ...typography.h4,
    color: colors.dark,
    fontWeight: "900",
  },
  sectionHeader: {
    ...typography.h3,
    color: colors.dark,
    marginBottom: spacing.md,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: colors.white,
    borderTopLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.sm,
  },
  modalTitle: {
    ...typography.h2,
    color: colors.dark,
  },
  modalDesc: {
    ...typography.bodyMedium,
    color: colors.grayDark,
    lineHeight: 22,
    marginBottom: spacing.md,
  },
  errorBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FEE2E2",
    padding: spacing.sm,
    borderRadius: radius.xs,
    marginBottom: spacing.md,
    gap: 6,
  },
  errorText: {
    ...typography.caption,
    color: colors.accentRed,
    fontWeight: "600",
  },
  inputGroup: {
    marginBottom: spacing.md,
  },
  inputLabel: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.dark,
    marginBottom: 6,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.md,
    height: 50,
  },
  textInput: {
    flex: 1,
    ...typography.bodyLarge,
    color: colors.dark,
  },
});
