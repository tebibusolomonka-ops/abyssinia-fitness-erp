export const names = [
  "Abel Tesfaye", "Sara Bekele", "Dawit Alemu", "Kalkidan Tadesse", "Betelhem Girma", "Nahom Mekonnen",
  "Mahi Tadesse", "Bereket Alemu", "Ruth Mekonnen", "Yonas Kebede", "Selamawit Desta", "Natnael Girma",
  "Rahel Abebe", "Eyob Mulugeta", "Mekdes Wolde", "Samuel Getachew", "Liya Solomon", "Henok Assefa",
  "Tigist Fikru", "Biruk Haile", "Eyerusalem Abate", "Nahom Tesfaye", "Rediet Alemu", "Biniyam Desta",
  "Hana Bekele", "Solomon Girma", "Meron Mekonnen", "Yared Tadesse", "Saron Kebede", "Robel Mulugeta",
  "Marta Abebe", "Amanuel Wolde", "Eden Getachew", "Fitsum Haile", "Feven Solomon", "Kidus Assefa"
];

const statuses = ["Active", "Active", "Active", "Active", "Expiring Soon", "Frozen", "Expired"];
const plans = ["Monthly", "Premium", "3 Months", "6 Months", "Annual"];

export const initialMembers = names.map((name, index) => ({
  id: `AF-${String(1024 + index).padStart(4, "0")}`,
  name,
  phone: `+251 9${String(11020304 + index * 791).padStart(8, "0").slice(-8)}`,
  email: `${name.toLowerCase().replace(" ", ".")}@example.com`,
  plan: index === 0 ? "Gold / Monthly" : plans[index % plans.length],
  trainer: index % 3 === 0 ? "Mahi Tadesse" : index % 3 === 1 ? "Henok Girma" : "Bereket Alemu",
  join: `202${3 + (index % 3)}-${String((index % 9) + 1).padStart(2, "0")}-${String((index % 24) + 1).padStart(2, "0")}`,
  expiry: index === 0 ? "2026-10-09" : `2026-${String(10 + (index % 3)).padStart(2, "0")}-${String((index % 24) + 1).padStart(2, "0")}`,
  status: index === 0 ? "Expiring Soon" : statuses[index % statuses.length],
  lastVisit: index % 5 === 0 ? "Today, 6:42 PM" : `${(index % 6) + 1} days ago`,
  gender: index % 2 ? "Female" : "Male",
  dob: `199${index % 9}-0${(index % 8) + 1}-14`,
  emergency: `+251 911 ${String(340000 + index * 17).slice(-6)}`,
  weight: 61 + (index % 24), height: 162 + (index % 24), goal: ["Weight Loss", "Muscle Gain", "General Fitness", "Strength"][index % 4],
  visits: 34 + index * 3, monthVisits: 4 + (index % 15), balance: index % 7 === 0 ? 1200 : 0
}));

export const trainers = [
  { name: "Mahi Tadesse", spec: "Weight Loss / Cardio", phone: "+251 911 430 922", clients: 18, sessions: 5, rating: 4.9, status: "Available" },
  { name: "Henok Girma", spec: "Strength Training", phone: "+251 922 184 303", clients: 16, sessions: 4, rating: 4.8, status: "In session" },
  { name: "Bereket Alemu", spec: "Bodybuilding", phone: "+251 911 684 102", clients: 14, sessions: 6, rating: 4.9, status: "Available" },
  { name: "Betelhem Desta", spec: "Functional Training", phone: "+251 933 728 410", clients: 12, sessions: 3, rating: 4.7, status: "Available" },
  { name: "Liya Solomon", spec: "Mobility / Yoga", phone: "+251 944 012 698", clients: 11, sessions: 4, rating: 4.8, status: "Off duty" }
];

export const classes = [
  ["Morning Cardio", "06:30", 14, 20, "Mahi Tadesse", "45 min", "Studio A"], ["CrossFit", "08:00", 18, 18, "Henok Girma", "60 min", "Arena"],
  ["Core Conditioning", "12:30", 8, 16, "Betelhem Desta", "40 min", "Studio B"], ["Zumba", "17:30", 12, 25, "Mahi Tadesse", "50 min", "Studio A"],
  ["Strength Training", "19:00", 9, 15, "Bereket Alemu", "60 min", "Arena"], ["Yoga", "20:00", 16, 20, "Liya Solomon", "55 min", "Studio B"],
  ["Beginner Boxing", "18:00", 11, 14, "Henok Girma", "50 min", "Ring"], ["Weekend Bootcamp", "07:00", 19, 24, "Betelhem Desta", "75 min", "Roof deck"]
].map((c, i) => ({ id: i + 1, name: c[0], time: c[1], booked: c[2], capacity: c[3], instructor: c[4], duration: c[5], room: c[6] }));

const equipmentNames = ["Treadmill #01", "Treadmill #07", "Bench Press #03", "Exercise Bike #04", "Cable Machine #02", "Leg Press #01", "Rowing Machine #02", "Smith Machine #01", "Dumbbell Rack A", "Stair Climber #01", "Elliptical #03", "Lat Pulldown #02", "Squat Rack #04", "Chest Press #02", "Air Bike #03", "Kettlebell Set B"];
export const initialEquipment = equipmentNames.map((name, i) => ({
  id: `EQ-${String(i + 1).padStart(3, "0")}`, name, category: name.split(" #")[0], location: i % 3 === 0 ? "Cardio floor" : i % 3 === 1 ? "Main floor" : "Strength zone",
  purchased: `202${2 + (i % 4)}-0${(i % 8) + 1}-12`, condition: i === 1 ? "Needs attention" : i === 8 ? "Fair" : "Good",
  last: `2026-09-${String(5 + (i % 20)).padStart(2, "0")}`, next: `2026-${i % 2 ? "10" : "11"}-${String(10 + (i % 15)).padStart(2, "0")}`,
  status: i === 1 ? "Maintenance" : i === 11 ? "Broken" : "Operational"
}));

const inventoryNames = ["Whey Protein", "Bottled Water", "Energy Drink", "Shaker", "Gym Gloves", "Towel", "Protein Bar", "Creatine", "Electrolyte Mix", "Resistance Band", "Lifting Straps", "Yoga Mat", "Foam Roller", "Sports Cap", "Peanut Butter"];
export const initialInventory = inventoryNames.map((name, i) => ({
  id: i + 1, name, category: i < 9 ? "Nutrition" : "Accessories", stock: i === 0 ? 12 : i === 5 ? 7 : 24 + ((i * 13) % 70), min: i === 0 ? 15 : i === 5 ? 10 : 12,
  price: [2800, 50, 120, 450, 950, 380, 180, 1600, 350, 620, 500, 1100, 780, 600, 480][i], cost: [2200, 28, 76, 300, 680, 250, 110, 1200, 240, 400, 320, 750, 520, 390, 310][i]
}));

export const initialTransactions = names.slice(0, 32).map((member, i) => ({
  id: `TX-${92710 + i}`, member, description: i % 4 === 0 ? "Premium Membership" : i % 4 === 1 ? "Monthly Membership Renewal" : i % 4 === 2 ? "Personal training session" : "Protein Shake",
  amount: i % 4 === 0 ? 27000 : i % 4 === 1 ? 2500 : i % 4 === 2 ? 900 : 350,
  method: ["Cash", "Telebirr", "Bank Transfer", "Cash"][i % 4], date: `2026-10-${String((i % 5) + 1).padStart(2, "0")}`, staff: i % 2 ? "Selam A." : "Natnael G.", status: "Paid"
}));

export const initialCheckins = names.slice(1, 18).map((member, i) => ({ member, time: `${String(6 + (i % 12)).padStart(2, "0")}:${String((i * 7) % 60).padStart(2, "0")} ${i > 8 ? "PM" : "AM"}`, membership: plans[i % plans.length], status: i < 10 ? "Inside" : "Checked out" }));

export const notifications = [
  ["27 memberships expire this week", "Memberships", "12 min"], ["Treadmill #07 requires maintenance", "Equipment", "38 min"], ["Whey Protein stock is low", "Inventory", "1 hr"],
  ["Sara Bekele has an unpaid balance", "Payments", "2 hr"], ["CrossFit class is full", "Classes", "3 hr"], ["Monthly revenue increased 12%", "Reports", "Yesterday"]
].map((n, i) => ({ id: i + 1, title: n[0], area: n[1], time: n[2], read: i > 2 }));

export const plansData = [
  ["Daily Pass", 300, "1 day", 126, 37800, ["Single-day gym access", "Locker access"]],
  ["Monthly", 2500, "30 days", 286, 715000, ["Unlimited gym access", "Group classes", "Fitness assessment"]],
  ["3 Months", 6500, "90 days", 164, 1066000, ["Unlimited gym access", "2 assessments", "Group classes"]],
  ["6 Months", 11500, "180 days", 92, 1058000, ["Unlimited gym access", "Locker access", "4 assessments"]],
  ["Annual", 20000, "365 days", 55, 1100000, ["Unlimited gym access", "Locker access", "All group classes"]],
  ["Premium", 27000, "365 days", 83, 2241000, ["Gym access", "Personal trainer sessions", "Group classes", "Locker access", "Fitness assessment"]]
].map((p, i) => ({ id: i + 1, name: p[0], price: p[1], duration: p[2], subscribers: p[3], revenue: p[4], benefits: p[5], featured: p[0] === "Monthly" }));

export const staff = [
  ["Selamawit Desta", "Owner", "+251 911 220 149", "Active"], ["Natnael Girma", "Manager", "+251 922 624 017", "Active"],
  ["Rahel Abebe", "Receptionist", "+251 933 731 284", "Active"], ["Samuel Getachew", "Accountant", "+251 911 840 491", "Active"],
  ["Mahi Tadesse", "Trainer", "+251 911 430 922", "Active"], ["Henok Girma", "Trainer", "+251 944 019 221", "Inactive"]
].map((s, i) => ({ id: i + 1, name: s[0], role: s[1], phone: s[2], status: s[3] }));

export const expenses = ["Electricity", "Equipment maintenance", "Rent", "Cleaning supplies", "Staff expense", "Internet", "Security", "Water", "Marketing", "Laundry", "Repairs"].map((name, i) => ({ id: i + 1, name, amount: [18400, 12600, 48000, 7200, 14500, 2800, 6200, 4100, 8600, 3900, 6100][i], date: `2026-10-0${(i % 5) + 1}` }));

