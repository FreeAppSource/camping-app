# Camping App

A comprehensive mobile application designed for outdoor enthusiasts, hikers, and campers to organize trips, tasks, gear inventory, and memories together. Built strictly with **pure JavaScript & JSX (`.js`, `.jsx`)**, React Native 0.88, Expo SDK 58, and Expo Router, based on the Sketch UI Kit (`camping-ui-kit-faiz-anwar.sketch`).

---

## Key Features

1. **Expedition Dashboard (`src/app/(tabs)/index.jsx`)**:
   - Active trip card (`Our Catalina Trip 2021`) with countdown ("16 days remain", "Day 01").
   - User Camping ID badge (`CMP21992822`) with copy-to-clipboard functionality.
   - Quick action shortcuts to Add New Trip and Explore Locations.
   - Interactive teammate preview row with direct role badges.
   - Today's task schedule preview with completion toggles.

2. **Daily Activities Checklist (`src/app/(tabs)/activities.jsx`)**:
   - Day-by-day task lists ("Find a Place", "View of the sunset", "Going to Fishing").
   - Filter tabs for *All*, *Pending*, and *Completed*.
   - Activity detail view with full description, category tags, and priority.
   - Add new activity form with day and category selectors.

3. **Backpack & Bag Prep (`src/app/(tabs)/backpack.jsx`)**:
   - Gear checklist with packed item percentage bar.
   - Category filtering (Sleeping, Shelter, Lighting, Cooking, Medical).
   - Quantity counter (`+` and `-`) and packing checkbox state.

4. **Catch Snaps Gallery & Camera (`src/app/(tabs)/snaps.jsx`)**:
   - Trip photo gallery with date and author attribution.
   - Interactive camera simulator modal to capture new trip photos.
   - Full photo viewer modal with zoom and metadata.

5. **Teammates & Collaboration (`src/app/teammates.jsx`)**:
   - Teammate directory with roles (Chef, Environment Expert, Survival Specialist).
   - Add Teammate with unique Camping ID (`CMP22210028`) and validation.
   - Detailed teammate profile views with duty assignments.

6. **Fitness & Stamina Tracker (`src/app/fitness.jsx`)**:
   - Pushups, Running, Hiking, and Swimming progress trackers with completion percentages.

7. **Locations Explorer (`src/app/locations.jsx`)**:
   - Campsite discovery across North America, Europe, and South Africa.
   - Detailed location profile for Catalina Island, Emerald Lake, and Black Forest.

8. **Tips & Bushcraft Hacks (`src/app/tips.jsx`)**:
   - Expert survival tips, campfire cooking hacks, and equipment essentials.

9. **Settings & Account Management**:
   - Multi-language switcher (English, Español, Deutsche, Urdu, Hindi).
   - Full user profile management for *Will Smith*.
   - In-app feedback system with star ratings and celebration modal.
   - Safe trip destruction and logout flows.

---

## Verification & Architecture

- **Strictly pure JavaScript & JSX**: 0 TypeScript (`.ts`/`.tsx`) files.
- **Expo Router 58**: Clean file-based navigation under `src/app/`.
- **AST Validated**: Babel AST syntax parsing completed with 0 errors across all source files.

<!-- run-locally:start -->

## ▶️ Run locally

```bash
npm install
npx expo start
```

Then press `i` for the iOS simulator, `a` for Android, or `w` for the web, or scan the QR code with Expo Go.

<!-- run-locally:end -->

---

<!-- design-credits:start -->

## 🎨 Design Credits

This app is based on the free **Camping UI Kit** design by **Faiz  Anwar**, downloaded from Sketch App Sources. All visual design credit goes to the designer. It follows the design's screens, user flows and content; visual details (exact spacing, fonts, some colours and illustrations) are approximated and may differ from the original.

| | |
|---|---|
| Designer | [Faiz  Anwar](https://www.sketchappsources.com/contributor/faizanwar) |
| Original design | [Camping UI Kit](https://dribbble.com/shots/15138787-Camping-App-UI-Kit-Screens) |
| Downloaded from | [Sketch App Sources](https://www.sketchappsources.com/free-source/4745-camping-ui-kit-sketch-freebie-resource.html) |
| Dribbble | <http://www.dribbble.com/faizz_anwar> |
| Twitter | <https://twitter.com/faizz_anwar> |
| Website | <https://chitranu.com/> |
| Original file | `camping-ui-kit-faiz-anwar.sketch` |
| License / usage | Not stated on the source page. Free download; credit the designer (Sketch App Sources Terms) and confirm with them before commercial use. |

**Attribution:**

> UI design: "Camping UI Kit" by Faiz  Anwar (https://dribbble.com/shots/15138787-Camping-App-UI-Kit-Screens), downloaded from Sketch App Sources (https://www.sketchappsources.com/free-source/4745-camping-ui-kit-sketch-freebie-resource.html).

The original design source files are not included in this repository; get them from the links above. This app's **code** is released under the [MIT License](./LICENSE); the visual design remains the designer's (see [NOTICE](./NOTICE)).

Photos, brand logos and avatars inside the design may belong to third parties and are not covered by the designer's permission.

<!-- design-credits:end -->
