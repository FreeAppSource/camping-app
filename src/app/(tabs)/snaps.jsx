import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors, typography, radius, shadows, spacing } from "../../theme";
import Header from "../../components/Header";
import CustomButton from "../../components/CustomButton";
import { snapsGallery } from "../../data";

const { width } = Dimensions.get("window");
const itemWidth = (width - spacing.lg * 2 - spacing.md) / 2;

export default function SnapsScreen() {
  const [snaps, setSnaps] = useState(snapsGallery);
  const [cameraModalVisible, setCameraModalVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const handleCapture = () => {
    const newSnap = {
      id: `snap-${Date.now()}`,
      date: "Just now",
      title: "Wild Mountain Trail",
      image: require("../../assets/images/snap_1.png"),
      author: "Will Smith",
    };
    setSnaps([newSnap, ...snaps]);
    setCameraModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Catch Snaps"
        subtitle={`${snaps.length} photos saved`}
        showBack={false}
        rightIcon="camera"
        onRightPress={() => setCameraModalVisible(true)}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.galleryGrid}>
          {snaps.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.snapCard}
              onPress={() => setPreviewImage(item)}
              activeOpacity={0.85}
            >
              <Image source={item.image} style={styles.snapImage} />
              <View style={styles.snapMeta}>
                <Text style={styles.snapDate}>{item.date}</Text>
                <Text style={styles.snapTitle} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.snapAuthor}>by {item.author}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Capture CTA Bar */}
        <View style={styles.ctaBox}>
          <Text style={styles.ctaTitle}>Capture memories in the wild</Text>
          <Text style={styles.ctaSub}>
            Every sunset, campfire meal and summit achievement saved together.
          </Text>
          <CustomButton
            title="Click New Snap"
            variant="primary"
            icon="camera"
            onPress={() => setCameraModalVisible(true)}
            style={{ marginTop: spacing.md }}
          />
        </View>
      </ScrollView>

      {/* Camera Simulator Modal */}
      <Modal
        visible={cameraModalVisible}
        animationType="slide"
        onRequestClose={() => setCameraModalVisible(false)}
      >
        <SafeAreaView style={styles.cameraContainer}>
          <View style={styles.cameraHeader}>
            <TouchableOpacity onPress={() => setCameraModalVisible(false)}>
              <Feather name="x" size={26} color={colors.white} />
            </TouchableOpacity>
            <Text style={styles.cameraTitle}>Click Snap</Text>
            <Feather name="zap" size={22} color={colors.white} />
          </View>

          {/* Viewfinder */}
          <View style={styles.viewfinder}>
            <Image
              source={require("../../assets/images/hero_camping.png")}
              style={styles.viewfinderImage}
            />
            <View style={styles.targetBox} />
          </View>

          {/* Camera Controls */}
          <View style={styles.cameraControls}>
            <TouchableOpacity
              style={styles.shutterBtn}
              onPress={handleCapture}
              activeOpacity={0.7}
            >
              <View style={styles.shutterInner} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>

      {/* Full Photo Preview Modal */}
      <Modal
        visible={!!previewImage}
        transparent
        animationType="fade"
        onRequestClose={() => setPreviewImage(null)}
      >
        <View style={styles.previewOverlay}>
          <TouchableOpacity
            style={styles.previewCloseBtn}
            onPress={() => setPreviewImage(null)}
          >
            <Feather name="x" size={26} color={colors.white} />
          </TouchableOpacity>
          {previewImage && (
            <View style={styles.previewContent}>
              <Image source={previewImage.image} style={styles.fullImage} resizeMode="contain" />
              <View style={styles.previewMeta}>
                <Text style={styles.previewTitle}>{previewImage.title}</Text>
                <Text style={styles.previewSub}>
                  {previewImage.date} • {previewImage.author}
                </Text>
              </View>
            </View>
          )}
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
  galleryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md,
  },
  snapCard: {
    width: itemWidth,
    backgroundColor: colors.white,
    borderRadius: radius.md,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm,
  },
  snapImage: {
    width: "100%",
    height: 140,
    backgroundColor: colors.bgLight,
  },
  snapMeta: {
    padding: spacing.sm,
  },
  snapDate: {
    ...typography.caption,
    color: colors.primaryDark,
    fontWeight: "700",
  },
  snapTitle: {
    ...typography.bodyMedium,
    fontWeight: "700",
    color: colors.dark,
    marginTop: 2,
  },
  snapAuthor: {
    ...typography.caption,
    color: colors.gray,
    marginTop: 2,
  },
  ctaBox: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: spacing.xl,
    alignItems: "center",
  },
  ctaTitle: {
    ...typography.h3,
    color: colors.dark,
    textAlign: "center",
  },
  ctaSub: {
    ...typography.bodyMedium,
    color: colors.gray,
    textAlign: "center",
    marginTop: 4,
    lineHeight: 20,
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: colors.dark,
    justifyContent: "space-between",
  },
  cameraHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  cameraTitle: {
    ...typography.h3,
    color: colors.white,
  },
  viewfinder: {
    flex: 1,
    position: "relative",
    overflow: "hidden",
    marginHorizontal: spacing.md,
    borderRadius: radius.lg,
  },
  viewfinderImage: {
    width: "100%",
    height: "100%",
  },
  targetBox: {
    position: "absolute",
    top: "30%",
    left: "20%",
    right: "20%",
    bottom: "30%",
    borderWidth: 1.5,
    borderColor: "rgba(255,255,255,0.6)",
    borderRadius: radius.md,
  },
  cameraControls: {
    height: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  shutterBtn: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 4,
    borderColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  shutterInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primary,
  },
  previewOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  previewCloseBtn: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 10,
    padding: 8,
  },
  previewContent: {
    width: "100%",
    alignItems: "center",
  },
  fullImage: {
    width: width - 32,
    height: width,
    borderRadius: radius.md,
  },
  previewMeta: {
    marginTop: spacing.md,
    alignItems: "center",
  },
  previewTitle: {
    ...typography.h3,
    color: colors.white,
  },
  previewSub: {
    ...typography.bodyMedium,
    color: colors.grayLight,
    marginTop: 4,
  },
});
