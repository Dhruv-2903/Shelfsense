export const genreOptions = [
  "Thriller",
  "Fantasy",
  "Romance",
  "Sci-Fi",
  "Non-Fiction",
  "Mystery",
  "Historical"
];

export const bookShelves = [
  {
    id: "rec",
    title: "Recommended for You",
    subtitle: "AI picks tuned to your taste",
    books: [
      {
        id: "b1",
        title: "The Midnight Algorithm",
        rating: 4.8,
        reason: "Because you like fast-paced thrillers",
        cover:
          "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "b2",
        title: "Runes of the North",
        rating: 4.6,
        reason: "Because you enjoy epic fantasy arcs",
        cover:
          "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "b3",
        title: "Signal in the Fog",
        rating: 4.7,
        reason: "Because you liked moody mysteries",
        cover:
          "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "b4",
        title: "Hearts & Harbor",
        rating: 4.5,
        reason: "Because you read uplifting romance",
        cover:
          "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=500&q=80"
      }
    ]
  },
  {
    id: "trend",
    title: "Trending Now",
    subtitle: "What readers are binging this week",
    books: [
      {
        id: "b5",
        title: "The Firewatch Protocol",
        rating: 4.9,
        reason: "Because you like high-stakes plots",
        cover:
          "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "b6",
        title: "City of Whispers",
        rating: 4.4,
        reason: "Because you like urban mysteries",
        cover:
          "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "b7",
        title: "Cosmic Drift",
        rating: 4.6,
        reason: "Because you enjoy sci-fi journeys",
        cover:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "b8",
        title: "The Garden Letters",
        rating: 4.3,
        reason: "Because you love heartfelt stories",
        cover:
          "https://images.unsplash.com/photo-1455885666463-63832e07cf4a?auto=format&fit=crop&w=500&q=80"
      }
    ]
  },
  {
    id: "thriller",
    title: "Because You Like Thrillers",
    subtitle: "Sharp twists, intense pacing",
    books: [
      {
        id: "b9",
        title: "Silent Relay",
        rating: 4.7,
        reason: "Because you enjoy spy thrillers",
        cover:
          "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "b10",
        title: "Crimson Evidence",
        rating: 4.5,
        reason: "Because you like courtroom suspense",
        cover:
          "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "b11",
        title: "Shadow Circuit",
        rating: 4.6,
        reason: "Because you enjoy tech noir",
        cover:
          "https://images.unsplash.com/photo-1526318472351-c75fcf070305?auto=format&fit=crop&w=500&q=80"
      },
      {
        id: "b12",
        title: "Nightfall Directive",
        rating: 4.4,
        reason: "Because you like dark mysteries",
        cover:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=500&q=80"
      }
    ]
  }
];

export const demandForecast = [
  { day: "Mon", demand: 42 },
  { day: "Tue", demand: 48 },
  { day: "Wed", demand: 55 },
  { day: "Thu", demand: 62 },
  { day: "Fri", demand: 70 },
  { day: "Sat", demand: 68 },
  { day: "Sun", demand: 74 }
];

export const sellerInsights = [
  { name: "Book A", tag: "High Demand" },
  { name: "Book B", tag: "Trending" },
  { name: "Book C", tag: "Rising Interest" }
];

export const topStats = [
  { label: "Predicted Demand", value: "↑ 25%", className: "text-[#34C759]" },
  { label: "Top Genre", value: "Thriller", className: "text-[#3A7DFF]" }
];
