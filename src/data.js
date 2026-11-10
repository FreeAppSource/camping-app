// Camping App Mock Data & State Store
// Faithful to Sketch Artboard copy & assets

export const currentUser = {
  id: "CMP21992822",
  name: "Will Smith",
  email: "willsmith@mail.com",
  phone: "+1 202-555-0174",
  avatar: require("./assets/images/avatar_will_smith.png"),
  role: "Trip Leader & Explorer",
  bio: "Researching, designing, implementing, and managing software programs. Testing and evaluating new programs. Identifying areas for modification in existing programs and subsequently developing these modifications. Writing and implementing efficient code.",
  tripsCount: 1,
  badgesEarned: ["Welcome Badge", "Camp Fire Master", "Peak Hiker"],
};

export const currentTrip = {
  id: "trip-catalina-2021",
  name: "Our Catalina Trip 2021",
  location: "Catalina Island",
  region: "Los Angeles, California",
  startDate: "10 June 2021",
  endDate: "27 June 2021",
  dateRange: "10 June To 27 June",
  dayProgress: "Day 01",
  daysRemaining: "16 day’s remain",
  totalDays: 17,
  image: require("./assets/images/catalina_island.png"),
  heroCover: require("./assets/images/hero_camping.png"),
  description: "One of California’s Channel Islands, lies southwest of Los Angeles. It's known for its wildlife, dive sites and Mt. Orizaba, its highest peak. The resort town of Two Harbors lies to the north. Best for Campers.",
};

export const teammates = [
  {
    id: "tm-1",
    name: "Chandler Hallow",
    role: "Chef",
    badge: "CHEF",
    avatar: require("./assets/images/avatar_chandler.png"),
    campingId: "CMP22210028",
    status: "Active",
    bio: "I’m a Chef and I assist in prep work, such as chopping vegetables, but more often will be involved in cooking specialty dishes. Chooses ingredients and designs a menu based on the seasonal availability of food items. Creates unique dishes that inspire guests to come back again and again to see what is new in the restaurant.",
  },
  {
    id: "tm-2",
    name: "Emma Linch",
    role: "Environment Expert",
    badge: "EXPERT",
    avatar: require("./assets/images/avatar_emma.png"),
    campingId: "CMP38291044",
    status: "Active",
    bio: "Specialized in wilderness terrain navigation, flora and fauna safety, and micro-climate forecasting. Passionate about leave-no-trace outdoor camping and environmental stewardship.",
  },
  {
    id: "tm-3",
    name: "Mike Alen",
    role: "Survival Specialist",
    badge: "NAVIGATOR",
    avatar: require("./assets/images/avatar_mike.png"),
    campingId: "CMP11361504",
    status: "Active",
    bio: "Certified wilderness first responder and outdoor rescue coordinator. Expert in shelter building, alpine terrain traversing, and night orientation.",
  },
];

export const initialActivities = [
  {
    id: "act-1",
    title: "Find a Place",
    author: "By you",
    authorName: "Will Smith",
    day: "Day 01",
    description: "We need to find a perfect place for set up our camp’s and where we will be protected from the angry Bears.",
    completed: false,
    priority: "High",
    category: "Shelter",
  },
  {
    id: "act-2",
    title: "View of the sunset",
    author: "By Emma",
    authorName: "Emma Linch",
    day: "Day 01",
    description: "Out side of that ridge we will see the beautiful sunset. Bring cameras and warm blankets for the twilight cliffside view.",
    completed: true,
    priority: "Medium",
    category: "Sightseeing",
  },
  {
    id: "act-3",
    title: "Going to Fishing",
    author: "By Emma",
    authorName: "Emma Linch",
    day: "Day 01",
    description: "We need to find out our tomorrow’s breakfast. I mean the delicious fishes which are exactly present in the river on front of us. I’m so excited to eat them.",
    completed: false,
    priority: "High",
    category: "Food",
  },
  {
    id: "act-4",
    title: "Hiking on the mountain",
    author: "By Chandler",
    authorName: "Chandler Hallow",
    day: "Day 02",
    description: "Morning trek up Mt. Orizaba peak for panoramic sunrise view. Pack hiking poles, extra water canteens, and trail snacks.",
    completed: false,
    priority: "Medium",
    category: "Hiking",
  },
];

export const initialBackpackItems = [
  { id: "bp-1", name: "Sleeping Bag", quantity: 1, packed: true, category: "Sleeping" },
  { id: "bp-2", name: "Pillow", quantity: 1, packed: true, category: "Sleeping" },
  { id: "bp-3", name: "Sleeping mat or camp bed", quantity: 1, packed: false, category: "Sleeping" },
  { id: "bp-4", name: "Mallet, spare pegs and puller", quantity: 1, packed: true, category: "Shelter" },
  { id: "bp-5", name: "Torch and head torch", quantity: 2, packed: true, category: "Lighting" },
  { id: "bp-6", name: "Tent repair kit", quantity: 1, packed: false, category: "Shelter" },
  { id: "bp-7", name: "Charger & Solar Powerbank", quantity: 1, packed: true, category: "Electronics" },
  { id: "bp-8", name: "First Aid & Snakebite Kit", quantity: 1, packed: true, category: "Medical" },
  { id: "bp-9", name: "Water Purifier & Canteens", quantity: 2, packed: false, category: "Cooking" },
  { id: "bp-10", name: "Cooking Stove & Mess Tins", quantity: 1, packed: true, category: "Cooking" },
];

export const snapsGallery = [
  {
    id: "snap-1",
    date: "14 Feb 2020",
    title: "Sunset Over Valley Ridge",
    image: require("./assets/images/snap_1.png"),
    author: "Will Smith",
  },
  {
    id: "snap-2",
    date: "13 Feb 2020",
    title: "Morning Campfire & Coffee",
    image: require("./assets/images/snap_2.png"),
    author: "Chandler Hallow",
  },
  {
    id: "snap-3",
    date: "12 Feb 2020",
    title: "Trail Path Along Wild River",
    image: require("./assets/images/snap_3.png"),
    author: "Emma Linch",
  },
  {
    id: "snap-4",
    date: "11 Feb 2020",
    title: "Mountain Ridge Pine Vista",
    image: require("./assets/images/snap_4.png"),
    author: "Mike Alen",
  },
];

export const locationsList = [
  {
    id: "loc-1",
    name: "Catalina Island",
    region: "North America",
    country: "USA",
    state: "Los Angeles, California",
    rating: 4.9,
    reviews: 1420,
    image: require("./assets/images/catalina_island.png"),
    bestFor: "Best for Campers",
    description: "One of California’s Channel Islands, lies southwest of Los Angeles. It's known for its wildlife, dive sites and Mt. Orizaba, its highest peak. The resort town of Two Harbors lies to the north. Best for Campers.",
    features: ["Wildlife Watching", "Campfire Pits", "Freshwater Springs", "Kayaking"],
  },
  {
    id: "loc-2",
    name: "Emerald Lake Basin",
    region: "North America",
    country: "Canada",
    state: "Yoho National Park",
    rating: 4.8,
    reviews: 980,
    image: require("./assets/images/location_lake.png"),
    bestFor: "Glacial Kayaking & Alpine Tents",
    description: "Surrounded by towering peaks of the President Range, the turquoise waters and alpine forests provide serene backcountry campsite seclusion.",
    features: ["Alpine Lakes", "Glacial Trails", "Bear Proof Storage", "Canoeing"],
  },
  {
    id: "loc-3",
    name: "Cascade Range Highlands",
    region: "North America",
    country: "USA",
    state: "Washington",
    rating: 4.7,
    reviews: 730,
    image: require("./assets/images/location_mountain.png"),
    bestFor: "High Altitude Treks",
    description: "Rugged volcano passes with evergreen forests, rushing glacial streams, and high altitude overnight campsites.",
    features: ["Wild Camping", "Summit Routes", "Star Gazing", "Trout Streams"],
  },
  {
    id: "loc-4",
    name: "Black Forest Wilderness",
    region: "Europe",
    country: "Germany",
    state: "Baden-Württemberg",
    rating: 4.9,
    reviews: 1890,
    image: require("./assets/images/location_forest.png"),
    bestFor: "Dense Canopy & Night Trails",
    description: "Enchanted evergreen pine hills, traditional wooden huts, and hidden valley camping shelters perfect for group bushcraft.",
    features: ["Forest Shelters", "Spring Water", "Firewood Supply", "Biking Trails"],
  },
];

export const tipsArticles = [
  {
    id: "tip-1",
    title: "Use these camping tips, tricks and hacks to make your trip enjoyable",
    summary: "Camping connects you with the quiet majesty of nature, allowing you to unplug, recharge and test your bushcraft prowess under open skies.",
    category: "Survival",
    readTime: "4 min read",
    image: require("./assets/images/tip_hacks.png"),
    points: [
      "Always set up camp before sunset while natural lighting is optimal.",
      "Check prevailing wind directions before pitching your tent entrance.",
      "Hang food and scented items at least 12 feet high to avoid wildlife encounters.",
      "Pack multi-purpose items like duct tape, microfiber cloths, and paracord.",
    ],
  },
  {
    id: "tip-2",
    title: "These camping food hacks will definitely make your cooking faster",
    summary: "As everyone knows that making food is always hard when you do outdoor campfire cooking. These culinary pre-packing shortcuts save hours.",
    category: "Cooking",
    readTime: "5 min read",
    image: require("./assets/images/tip_food.png"),
    points: [
      "Pre-crack eggs into clean water bottles with seasonings before leaving home.",
      "Wrap seasoned potatoes and foil meals ahead of time for fast campfire baking.",
      "Freeze gallon water jugs; they serve as ice coolers first, drinking water later.",
      "Pack spices in compact multi-chamber containers or tic-tac containers.",
    ],
  },
  {
    id: "tip-3",
    title: "Top ten must carry equipments for your next camping expedition",
    summary: "In this guide we curated a comprehensive checklist of compulsory equipment required to keep you warm, safe and well-fed in the wilderness.",
    category: "Equipment",
    readTime: "6 min read",
    image: require("./assets/images/tip_equipment.png"),
    points: [
      "Weather-rated 4-season tent with waterproof rainfly and ground tarp.",
      "Thermal rated down sleeping bag matched to nightly low temperatures.",
      "Headlamp with red-light night vision mode and spare lithium batteries.",
      "Dual-stage water filtration pump or UV purification pen.",
    ],
  },
];

export const fitnessStats = {
  pushups: { current: 10, target: 50, percent: 20 },
  running: { current: "200 steps", target: "10,000 steps", percent: 35 },
  hiking: { current: "3.2 Miles", target: "4.0 Miles", percent: 80 },
  swimming: { current: "0 meters", target: "500 meters", percent: 0 },
};

export const notificationsList = [
  {
    id: "notif-1",
    title: "Congratulations!",
    subtitle: "You recieved the welcome badge",
    date: "11 Feb 2020",
    read: false,
    icon: "award",
  },
  {
    id: "notif-2",
    title: "Will Smith Invite you.",
    subtitle: "For Catalina Island Trip.",
    date: "12 Feb 2020",
    read: true,
    icon: "user-plus",
  },
  {
    id: "notif-3",
    title: "You completed an activity",
    subtitle: "Named view of sunset by Emma.",
    date: "14 Feb 2020",
    read: true,
    icon: "check-circle",
  },
  {
    id: "notif-4",
    title: "Activity reminder",
    subtitle: "Named Hiking on mountain by Chandler starts tomorrow.",
    date: "15 Feb 2020",
    read: true,
    icon: "bell",
  },
];

export const onboardingSlides = [
  {
    id: "slide-1",
    title: "Your Tasks",
    subtitle: "I always reminds you about your planned activities. which is always my priority and your importance.",
    tagline: "Stay Organized in the Wild",
  },
  {
    id: "slide-2",
    title: "Catch Snaps",
    subtitle: "We know that catching photos are necessary in your trip. that’s why we built seamless memory catching.",
    tagline: "Capture Every Campfire Moment",
  },
  {
    id: "slide-3",
    title: "Collaboration",
    subtitle: "Invite team members with one simple Camping ID. Share bag inventories, food menus, and chores in real time.",
    tagline: "Better Together Around the Camp",
  },
  {
    id: "slide-4",
    title: "There Is Much More",
    subtitle: "From expert bushcraft tips to packing checklists and fitness tracking, your camping companion has you covered.",
    tagline: "Next Level Outdoor Adventures",
  },
];
