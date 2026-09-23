/**
 * =========================================================================
 * CONFIG.JS - WEBSITE REBRANDING CONFIGURATION & ENGINE
 * =========================================================================
 * 
 * INSTRUCTIONS:
 * 1. Modify Section 1 (Data Entry) to update branding, styles, images, and content.
 * 2. Include this script at the end of index.html after index.js:
 *    
 * =========================================================================
 */

/* =========================================================================
   SECTION 1: DATA ENTRY CONFIGURATION
   ========================================================================= */
const REBRAND_CONFIG = {
  // --- BRAND IDENTIFICATION & META DATA ---
  brand: {
    name: "Cafe Amore",
    suffix: ".",
    tagline: "Cozy Ambiance & Delicious Bites",
    description: "Cafe Amore in Krishna Nagar, New Delhi offers delicious pizzas, Maggi, refreshing coffees, and a peaceful aesthetic vibe.",
    keywords: "cafe amore, new delhi cafe, krishna nagar cafe, chander nagar cafe, pizza, maggi, cold coffee",
    themeColor: "#0d0e12",
    domain: "https://www.zomato.com/ncr/cafe-amore-chander-nagar-new-delhi",
    ogImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnlEnNHXl17-D4nnZ-FgE5sK0gYQFw9MFl3trDkKVFyCmLWjxW4tWSAxg_ATFn-w93Wh1KO1kkcuoejjH3Lfa0s6zBt1A8OeAXm1DbClF_kN_cM69iR-UZkT0ptKwTyW8Zd2lgLBGWkU77S=s680-w680-h510-rw",
    faviconEmoji: "🍕",
    whatsappNumber: "919217161200"
  },

  // --- GLOBAL STYLES & THEMING ---
  styles: {
    colors: {
      bg: "#0d0e12",
      bgCard: "#15181e",
      bgLight: "#1c2028",
      primary: "#d4a373",
      primaryHover: "#faedcd",
      text: "#e0e2ec",
      textMuted: "#9aa0b4",
      accent: "#2c313c"
    },
    fonts: {
      heading: "'Syne', sans-serif",
      body: "'Plus Jakarta Sans', sans-serif"
    }
  },

  // --- HERO SECTION ---
  hero: {
    subtitle: "Welcome to Cafe Amore",
    title: "Aesthetic Vibe, Amazing Food & Great Times",
    description: "Indulge in our delicious pizzas, signature Maggi specials, and refreshing drinks served in a cozy, peaceful atmosphere.",
    bgImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnlEnNHXl17-D4nnZ-FgE5sK0gYQFw9MFl3trDkKVFyCmLWjxW4tWSAxg_ATFn-w93Wh1KO1kkcuoejjH3Lfa0s6zBt1A8OeAXm1DbClF_kN_cM69iR-UZkT0ptKwTyW8Zd2lgLBGWkU77S=s680-w680-h510-rw",
    stats: [
      { value: "100%", label: "Cool & Aesthetic Ambience" },
      { value: "5.0 ★", label: "Top Rated Food" },
      { value: "9 AM - 1 AM", label: "Open Daily" }
    ]
  },

  // --- ABOUT US SECTION ---
  about: {
    subtitle: "About Us",
    title: "Your Cozy Neighbourhood Cafe in Delhi",
    paragraphs: [
      "Located near Satnam Park, Cafe Amore is designed to be your ideal hangout spot. Whether you're catching up with friends, craving late-night bites, or simply looking for a peaceful aesthetic cafe to unwind, we've got you covered.",
      "From mouth-watering fresh pizzas and comfort Maggi bowls to chilled coffee treats, we serve quality food with warm hospitality and 100% chilled comfort."
    ],
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkswlX3Ogyvo0BGE0HsEey1HGebhnI_ixHw5SaSu_r30KZaeQyWTwTFsPCpEF5-E6JckokRK58m7CW4ZgAVPQCeipePyMdxg4DC4_dxwAKXbOINjj5xyuKFeSB7ZciA7Nmmsg91tPmr-RMw=w141-h101-n-k-no-nu",
    imageAlt: "Cafe Amore seating and interior",
    experienceValue: "100%",
    experienceLabel: "Good Vibes"
  },

  // --- SPECIALS / NEWLY ADDED FOOD ---
  specials: {
    subtitle: "Customer Favorites",
    title: "Must-Try Specials",
    badge: "Popular",
    description: "Handcrafted comfort food favorites loved by our regular guests.",
    items: [
      {
        badge: "Must Try",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
        alt: "Paneer Tikka Pizza",
        diet: "veg",
        title: "Paneer Tikka Pizza",
        price: "₹149",
        desc: "Loaded with marinated paneer tikka, fresh veggies, and melted cheese on a crispy crust."
      },
      {
        badge: "Bestseller",
        img: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&q=80&w=600",
        alt: "Brownie Cold Coffee",
        diet: "veg",
        title: "Brownie Cold Coffee",
        price: "₹120",
        desc: "Rich chocolate brownie blended with rich cold coffee and topped with chocolate drizzle."
      },
      {
        badge: "Chef Special",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP9m7udhbboqLtxzvRkAlvP1pYeGw5VVUWlnUlOj3CTw&s=10",
        alt: "Mix Veg Maggi",
        diet: "veg",
        title: "Mix Veg Maggi",
        price: "₹130",
        desc: "Classic comfort Maggi noodles tossed with garden fresh vegetables and aromatic spices."
      }
    ]
  },

  // --- OFFERS SECTION ---
  offers: {
    subtitle: "Exclusive Savings",
    title: "Current Deals",
    items: [
      {
        tag: "DELIVERY OFFER",
        title: "Order on Zomato & Swiggy",
        desc: "Get fast home delivery of your favorite meals straight to your doorstep.",
        code: "ONLINE",
        highlight: false
      },
      {
        tag: "LATE NIGHT BITES",
        title: "Open Till 1:00 AM",
        desc: "Satisfy your late-night pizza and Maggi cravings every day of the week.",
        code: "AMORENIGHT",
        highlight: true
      },
      {
        tag: "PIZZA COMBO",
        title: "Pizza & Drink Combos",
        desc: "Pair any 8-inch pizza with a refreshing cold drink for the perfect meal.",
        code: "COMBO",
        highlight: false
      }
    ]
  },

  // --- FEATURED MENU SECTION ---
  menu: {
    subtitle: "Our Menu",
    title: "Pizzas, Maggi & Treats",
    pdfUrl: "#",
    pdfFilename: "Cafe_Amore_Menu.pdf",
    categories: [
      { id: "all", label: "All Items", active: true },
      { id: "veg-pizza", label: "Veg Pizzas", active: false },
      { id: "nonveg-pizza", label: "Non-Veg Pizzas", active: false },
      { id: "maggis", label: "Maggi Specials", active: false }
    ],
    items: [
      // VEG PIZZAS
      {
        category: "veg-pizza",
        img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=600",
        title: "Veg. Onion Pizza",
        price: "₹99 (6 in.) / ₹149 (8 in.)",
        diet: "veg",
        desc: "Classic pizza base topped with crunchy red onions and melted mozzarella cheese.",
        swiggyUrl: "https://www.swiggy.com/city/delhi/cafe-amore-laxmi-nagar-rest1337473",
        zomatoUrl: "https://www.zomato.com/ncr/cafe-amore-chander-nagar-new-delhi?amp=1"
      },
      {
        category: "veg-pizza",
        img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=600",
        title: "Veg. Corn Pizza",
        price: "₹99 (6 in.) / ₹149 (8 in.)",
        diet: "veg",
        desc: "Golden sweet corn kernels smothered in gooey mozzarella cheese.",
        swiggyUrl: "https://www.swiggy.com/city/delhi/cafe-amore-laxmi-nagar-rest1337473",
        zomatoUrl: "https://www.zomato.com/ncr/cafe-amore-chander-nagar-new-delhi?amp=1"
      },
      {
        category: "veg-pizza",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
        title: "Mix Veg. Pizza",
        price: "₹129 (6 in.) / ₹159 (8 in.)",
        diet: "veg",
        desc: "Loaded with capsicum, onions, tomatoes, and corn with herb seasoning.",
        swiggyUrl: "https://www.swiggy.com/city/delhi/cafe-amore-laxmi-nagar-rest1337473",
        zomatoUrl: "https://www.zomato.com/ncr/cafe-amore-chander-nagar-new-delhi?amp=1"
      },
      {
        category: "veg-pizza",
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600",
        title: "Spl. Veg. Farm Pizza",
        price: "₹139 (6 in.) / ₹169 (8 in.)",
        diet: "veg",
        desc: "Farmhouse style pizza topped with abundant fresh garden vegetables and cheese.",
        swiggyUrl: "https://www.swiggy.com/city/delhi/cafe-amore-laxmi-nagar-rest1337473",
        zomatoUrl: "https://www.zomato.com/ncr/cafe-amore-chander-nagar-new-delhi?amp=1"
      },
      {
        category: "veg-pizza",
        img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=600",
        title: "Paneer Tikka Pizza",
        price: "₹149 (6 in.) / ₹199 (8 in.)",
        diet: "veg",
        desc: "Topped with juicy marinated paneer tikka chunks, capsicum, and Indian spices.",
        swiggyUrl: "https://www.swiggy.com/city/delhi/cafe-amore-laxmi-nagar-rest1337473",
        zomatoUrl: "https://www.zomato.com/ncr/cafe-amore-chander-nagar-new-delhi?amp=1"
      },

      // NON-VEG PIZZAS
      {
        category: "nonveg-pizza",
        img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=600",
        title: "Chicken Pizza",
        price: "₹149 (6 in.) / ₹229 (8 in.)",
        diet: "nonveg",
        desc: "Tender seasoned chicken chunks sprinkled over molten mozzarella cheese.",
        swiggyUrl: "https://www.swiggy.com/city/delhi/cafe-amore-laxmi-nagar-rest1337473",
        zomatoUrl: "https://www.zomato.com/ncr/cafe-amore-chander-nagar-new-delhi?amp=1"
      },
      {
        category: "nonveg-pizza",
        img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=600",
        title: "Mutton Kebab Pizza",
        price: "₹169 (6 in.) / ₹299 (8 in.)",
        diet: "nonveg",
        desc: "Flavorful mutton kebab pieces cooked with aromatic herbs and rich cheese.",
        swiggyUrl: "https://www.swiggy.com/city/delhi/cafe-amore-laxmi-nagar-rest1337473",
        zomatoUrl: "https://www.zomato.com/ncr/cafe-amore-chander-nagar-new-delhi?amp=1"
      },
      {
        category: "nonveg-pizza",
        img: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=600",
        title: "Chicken Kebab Pizza",
        price: "₹169 (6 in.) / ₹249 (8 in.)",
        diet: "nonveg",
        desc: "Juicy chicken kebab slices blended with tangy sauce and mozzarella cheese.",
        swiggyUrl: "https://www.swiggy.com/city/delhi/cafe-amore-laxmi-nagar-rest1337473",
        zomatoUrl: "https://www.zomato.com/ncr/cafe-amore-chander-nagar-new-delhi?amp=1"
      },
      {
        category: "nonveg-pizza",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
        title: "Mutton Pizza",
        price: "₹249 (6 in.) / ₹350 (8 in.)",
        diet: "nonveg",
        desc: "Rich minced mutton topping cooked in secret cafe spices over molten cheese.",
        swiggyUrl: "https://www.swiggy.com/city/delhi/cafe-amore-laxmi-nagar-rest1337473",
        zomatoUrl: "https://www.zomato.com/ncr/cafe-amore-chander-nagar-new-delhi?amp=1"
      },
      {
        category: "nonveg-pizza",
        img: "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&q=80&w=600",
        title: "Chicken Triple Cheese Pizza",
        price: "₹220 (6 in.) / ₹300 (8 in.)",
        diet: "nonveg",
        desc: "An indulgence of three cheese blend loaded with succulent chicken bites.",
        swiggyUrl: "https://www.swiggy.com/city/delhi/cafe-amore-laxmi-nagar-rest1337473",
        zomatoUrl: "https://www.zomato.com/ncr/cafe-amore-chander-nagar-new-delhi?amp=1"
      },

      // MAGGIS
      {
        category: "maggis",
        img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=600",
        title: "Masala Maggi",
        price: "₹80",
        diet: "veg",
        desc: "The classic street-style spicy Maggi cooked to hot perfection.",
        swiggyUrl: "https://www.swiggy.com/city/delhi/cafe-amore-laxmi-nagar-rest1337473",
        zomatoUrl: "https://www.zomato.com/ncr/cafe-amore-chander-nagar-new-delhi?amp=1"
      },
      {
        category: "maggis",
        img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=600",
        title: "Cheese Maggi",
        price: "₹130",
        diet: "veg",
        desc: "Signature Maggi topped with generous molten cheese for an ultra-creamy bite.",
        swiggyUrl: "https://www.swiggy.com/city/delhi/cafe-amore-laxmi-nagar-rest1337473",
        zomatoUrl: "https://www.zomato.com/ncr/cafe-amore-chander-nagar-new-delhi?amp=1"
      },
      {
        category: "maggis",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP9m7udhbboqLtxzvRkAlvP1pYeGw5VVUWlnUlOj3CTw&s=10",
        title: "Mix Veg. Maggi",
        price: "₹130",
        diet: "veg",
        desc: "Maggi tossed with fresh onions, capsicum, tomatoes, and aromatic herbs.",
        swiggyUrl: "https://www.swiggy.com/city/delhi/cafe-amore-laxmi-nagar-rest1337473",
        zomatoUrl: "https://www.zomato.com/ncr/cafe-amore-chander-nagar-new-delhi?amp=1"
      },
      {
        category: "maggis",
        img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=600",
        title: "Egg Maggi",
        price: "₹120",
        diet: "nonveg",
        desc: "Delicious Maggi cooked with scrambled eggs and fresh Indian spices.",
        swiggyUrl: "https://www.swiggy.com/city/delhi/cafe-amore-laxmi-nagar-rest1337473",
        zomatoUrl: "https://www.zomato.com/ncr/cafe-amore-chander-nagar-new-delhi?amp=1"
      },
      {
        category: "maggis",
        img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=600",
        title: "Chicken Maggi",
        price: "₹160",
        diet: "nonveg",
        desc: "Hearty Maggi cooked with tender shredded chicken and hot spices.",
        swiggyUrl: "https://www.swiggy.com/city/delhi/cafe-amore-laxmi-nagar-rest1337473",
        zomatoUrl: "https://www.zomato.com/ncr/cafe-amore-chander-nagar-new-delhi?amp=1"
      }
    ]
  },

  // --- REVIEWS & TESTIMONIALS ---
  reviews: {
    subtitle: "Testimonials",
    title: "What Our Guests Say",
    items: [
      {
        stars: 5,
        text: "\"Good food and service. Pizzas and brownie cold coffee is very nice 🔥 ✨ Must try ✨ 🔥 ❤️\"",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100",
        name: "Agamdeep Singh",
        role: "Local Guide"
      },
      {
        stars: 5,
        text: "\"Best place ever to have a aesthetic and peaceful atmosphere 😊 And the food was outstanding 😋 Must try cafe ✨\"",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
        name: "Priyanjana Sharma",
        role: "Local Visitor"
      },
      {
        stars: 5,
        text: "\"Nice Ambience 😊 Amazing food 😋 Excellent service 👌 Good atmosphere 🥳 Cafe cooling 100% ❤️\"",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=100",
        name: "Harjeet Singh",
        role: "Local Guide"
      }
    ],
    googleCta: {
      title: "Enjoyed your experience at Cafe Amore?",
      desc: "Help others discover us by leaving a review on Google Maps!",
      url: "https://maps.google.com/?q=Cafe+Amore+Krishna+Nagar+Delhi"
    }
  },

  // --- GALLERY SECTION ---
  gallery: {
    subtitle: "Visual Experience",
    title: "Life Inside Cafe Amore",
    images: [
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmibmVHEHCjgcxwDBTHbPaRQU5cog6y44hfJdnRj7XZl_zankYd9tQEXpy-gX8ApdEi1IqvHo7BQd9Q5idmmRkpsengcaqGg2uTXK-FAb8lQI9jsBInJit9p2G85pLCvb-8yptPuxIrkFm1=w141-h236-n-k-no-nu", alt: "Cafe Amore Ambience 1" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkHjZA2e4MeoKbU2vj04uqbImXyxmoEjrGBcve5vOabY2kzRQfx_ViaYnRb6_LBGRDpi_Rc4h2ONIEBt1hDGmmTEGCzEW99AhkWbMK_f2FCUOi8eelCa9SWoIJAVhFnECh6W5OjLlFcK8UT=w141-h236-n-k-no-nu", alt: "Cafe Amore Ambience 2" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlBpZFXzy2seBkCGdJt2lH38xTruC5XEFyY9VevP9mxfyW2Fq0xj1kTdXB2bZYyzVupEEaMOgkGYRCiJzqlgGfpIoetQPe0GslTbfiiJdM0JscR2VpvZ1nK7B0TtFvFWPJ-AcCWlWp5CF4=w141-h236-n-k-no-nu", alt: "Cafe Amore Ambience 3" },
      { src: "https://lh3.googleusercontent.com/proxy/vFzB_VQJqq0KQbCs1uAIH_YlWiKskTeRqstsfqiEL__yjr15iJFsvCzUM242kkCFii5TwAR8iOHuO6NAFOwvv4dTTxTMWR4AeVWuZB0lQ-8fnJjjqMgpARiTeeA6WRQCFl48Xp0BgvLf6s0V3HIBCQP21LJfHVw=w160-h106-k-no", alt: "Cafe Amore Seating" }
    ]
  },

  // --- LOCATION & CONTACT SECTION ---
  location: {
    subtitle: "Location & Hours",
    title: "Visit Cafe Amore",
    description: "Located near Satnam Park in Chander Nagar, Krishna Nagar. Drop in for your daily cravings or late night bites!",
    address: "Shop 1, Ground Floor, near Satnam Park, Gyan Park, Satnam park, Chander Nagar, Krishna Nagar, New Delhi, Delhi, 110051",
    hours: [
      "Monday - Sunday: 9:00 AM - 1:00 AM"
    ],
    email: "contact@cafeamore.com",
    phone: "+91 92171 61200",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.123!2d77.278!3d28.651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM5JzA0LjAiTiA3N8KwMTYnNDAuOCJF!5e0!3m2!1sen!2sin!4v1614134823123!5m2!1sen!2sin"
  },

  // --- FOOTER SECTION ---
  footer: {
    description: "Serving delicious pizzas, cheesy Maggis, and cool drinks in a relaxed aesthetic environment.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/cafe_amore_?stkn=Ymw3OTNhNDV3eWc3", iconClass: "ph-instagram-logo" },
      { platform: "zomato", url: "https://www.zomato.com/ncr/cafe-amore-chander-nagar-new-delhi?amp=1", iconClass: "ph-storefront" },
      { platform: "swiggy", url: "https://www.swiggy.com/city/delhi/cafe-amore-laxmi-nagar-rest1337473", iconClass: "ph-shopping-bag" }
    ],
    copyright: "© 2026 Cafe Amore. All rights reserved."
  },

  // --- WI-FI MODAL SETTINGS ---
  wifi: {
    ssid: "Cafe_Amore_Guest",
    password: "amorecoffee2026"
  }
};

/* =========================================================================
   SECTION 2: REBRANDING ENGINE CODE
   ========================================================================= */
(function initRebrandingEngine(cfg) {
  'use strict';

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element|null}
   */
  const $ = (selector, ctx = document) => ctx.querySelector(selector);

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element[]}
   */
  const $$ = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector));

  function applyStyles() {
    const root = document.documentElement;
    if (cfg.styles?.colors) {
      if (cfg.styles.colors.bg) root.style.setProperty('--color-bg', cfg.styles.colors.bg);
      if (cfg.styles.colors.bgCard) root.style.setProperty('--color-bg-card', cfg.styles.colors.bgCard);
      if (cfg.styles.colors.bgLight) root.style.setProperty('--color-bg-light', cfg.styles.colors.bgLight);
      if (cfg.styles.colors.primary) root.style.setProperty('--color-primary', cfg.styles.colors.primary);
      if (cfg.styles.colors.primaryHover) root.style.setProperty('--color-primary-hover', cfg.styles.colors.primaryHover);
      if (cfg.styles.colors.text) root.style.setProperty('--color-text', cfg.styles.colors.text);
      if (cfg.styles.colors.textMuted) root.style.setProperty('--color-text-muted', cfg.styles.colors.textMuted);
      if (cfg.styles.colors.accent) root.style.setProperty('--color-accent', cfg.styles.colors.accent);
    }
    if (cfg.styles?.fonts) {
      if (cfg.styles.fonts.heading) root.style.setProperty('--font-heading', cfg.styles.fonts.heading);
      if (cfg.styles.fonts.body) root.style.setProperty('--font-body', cfg.styles.fonts.body);
    }
  }

  function applyMeta() {
    if (!cfg.brand) return;
    
    const fullTitle = `${cfg.brand.name} | ${cfg.brand.tagline}`;
    document.title = fullTitle;

    /**
     * @param {string} selector
     * @param {string} content
     */
    const setMeta = (selector, content) => {
      const el = $(selector);
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="title"]', fullTitle);
    setMeta('meta[name="description"]', cfg.brand.description);
    setMeta('meta[name="keywords"]', cfg.brand.keywords);
    setMeta('meta[name="theme-color"]', cfg.brand.themeColor);

    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', cfg.brand.description);
    setMeta('meta[property="og:image"]', cfg.brand.ogImage);
    setMeta('meta[property="og:url"]', cfg.brand.domain);
    setMeta('meta[property="og:site_name"]', `${cfg.brand.name} Cafe`);

    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', cfg.brand.description);
    setMeta('meta[name="twitter:image"]', cfg.brand.ogImage);
    setMeta('meta[name="twitter:url"]', cfg.brand.domain);

    const favicon = $('link[rel="icon"]');
    if (favicon && cfg.brand.faviconEmoji) {
      favicon.setAttribute('href', `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${cfg.brand.faviconEmoji}</text></svg>`);
    }

    const schemaScript = $('script[type="application/ld+json"]');
    if (schemaScript) {
      try {
        const schemaData = JSON.parse(schemaScript.textContent);
        schemaData.name = `${cfg.brand.name} ${cfg.brand.tagline}`;
        schemaData.image = cfg.brand.ogImage;
        schemaData.url = cfg.brand.domain;
        schemaData["@id"] = cfg.brand.domain;
        if (cfg.location) {
          schemaData.telephone = cfg.location.phone;
        }
        schemaScript.textContent = JSON.stringify(schemaData, null, 2);
      } catch (err) {
        console.warn("Failed to update JSON-LD schema:", err);
      }
    }
  }

  function applyBrandLogos() {
    $$('.logo').forEach(logoEl => {
      if (logoEl.childNodes.length > 0) {
        logoEl.childNodes[0].nodeValue = cfg.brand.name;
      } else {
        logoEl.textContent = cfg.brand.name;
      }
      let span = $('span', logoEl);
      if (!span && cfg.brand.suffix) {
        span = document.createElement('span');
        logoEl.appendChild(span);
      }
      if (span) span.textContent = cfg.brand.suffix;
      logoEl.setAttribute('aria-label', `${cfg.brand.name} Home`);
    });
  }

  function applyHero() {
    if (!cfg.hero) return;
    const heroSec = $('#home');
    if (heroSec && cfg.hero.bgImage) {
      heroSec.style.background = `linear-gradient(to right, rgba(13,14,18,0.95), rgba(13,14,18,0.6)), url('${cfg.hero.bgImage}') center/cover no-repeat`;
    }
    
    const sub = $('.hero-content .section-subtitle');
    if (sub) sub.textContent = cfg.hero.subtitle;
    
    const title = $('.hero-title');
    if (title) title.textContent = cfg.hero.title;
    
    const desc = $('.hero-description');
    if (desc) desc.textContent = cfg.hero.description;

    const statsContainer = $('.hero-stats');
    if (statsContainer && cfg.hero.stats) {
      statsContainer.innerHTML = cfg.hero.stats.map(s => `
        <div class="stat-item">
          <p class="stat-value">${s.value}</p>
          <p class="stat-label">${s.label}</p>
        </div>
      `).join('');
    }
  }

  function applyAbout() {
    if (!cfg.about) return;
    const aboutSec = $('#about');
    if (!aboutSec) return;

    const img = $('.about-img', aboutSec);
    if (img) {
      img.src = cfg.about.image;
      img.alt = cfg.about.imageAlt;
    }

    const badge = $('.about-experience-badge', aboutSec);
    if (badge) {
      badge.innerHTML = `
        <div style="font-size: 1.8rem; line-height: 1;">${cfg.about.experienceValue}</div>
        <div style="font-size: 0.8rem;">${cfg.about.experienceLabel}</div>
      `;
    }

    const sub = $('.section-subtitle', aboutSec);
    if (sub) sub.textContent = cfg.about.subtitle;

    const title = $('.section-title', aboutSec);     if (title) title.textContent = cfg.about.title;      const textMuted = $$('.text-muted', aboutSec);
    if (cfg.about.paragraphs && cfg.about.paragraphs.length >= 2) {
      if (textMuted[0]) textMuted[0].textContent = cfg.about.paragraphs[0];
      if (textMuted[1]) textMuted[1].textContent = cfg.about.paragraphs[1];
    }
  }

  function applySpecials() {
    if (!cfg.specials) return;
    const specSec = $('#new-food');
    if (!specSec) return;

    const sub = $('.section-subtitle', specSec);
    if (sub) sub.textContent = cfg.specials.subtitle;

    const title = $('.section-title', specSec);
    if (title) {
      title.innerHTML = `${cfg.specials.title} <span class="badge-new">${cfg.specials.badge}</span>`;
    }

    const desc = $('.text-muted', specSec);
    if (desc) desc.textContent = cfg.specials.description;

    const grid = $('.new-items-grid', specSec);
    if (grid && cfg.specials.items) {
      grid.innerHTML = cfg.specials.items.map(item => `
        <article class="new-food-card">
          <div class="new-food-img-wrapper">
            <span class="new-food-badge">${item.badge}</span>
            <img src="${item.img}" alt="${item.alt}" loading="lazy" decoding="async">
          </div>
          <div class="new-food-content">
            <div class="new-food-header">
              <h3 class="new-food-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="new-food-price">${item.price}</span>
            </div>
            <p class="new-food-desc">${item.desc}</p>
            <a href="#location" class="btn btn-outline btn-compact">Order Fresh</a>
          </div>
        </article>
      `).join('');
    }
  }

  function applyOffers() {
    if (!cfg.offers) return;
    const offerSec = $('#offers');
    if (!offerSec) return;

    const sub = $('.section-subtitle', offerSec);
    if (sub) sub.textContent = cfg.offers.subtitle;

    const title = $('.section-title', offerSec);
    if (title) title.textContent = cfg.offers.title;

    const grid = $('.offers-grid', offerSec);
    if (grid && cfg.offers.items) {
      grid.innerHTML = cfg.offers.items.map(o => `
        <div class="offer-card ${o.highlight ? 'highlight-offer' : ''}">
          <div class="offer-tag">${o.tag}</div>
          <h3 class="offer-title">${o.title}</h3>
          <p class="offer-desc">${o.desc}</p>
          <div class="offer-code-wrapper">
            <span>Code: <strong>${o.code}</strong></span>
          </div>
        </div>
      `).join('');
    }
  }

  function applyMenu() {
    if (!cfg.menu) return;
    const menuSec = $('#menu');
    if (!menuSec) return;

    const sub = $('.section-subtitle', menuSec);
    if (sub) sub.textContent = cfg.menu.subtitle;

    const title = $('.section-title', menuSec);
    if (title) title.textContent = cfg.menu.title;

    const dlBtn = $('.btn-download-menu', menuSec);
    if (dlBtn) {
      dlBtn.setAttribute('href', cfg.menu.pdfUrl);
      dlBtn.setAttribute('download', cfg.menu.pdfFilename);
    }

    const catContainer = $('.category-filter-container', menuSec);
    if (catContainer && cfg.menu.categories) {
      catContainer.innerHTML = cfg.menu.categories.map(c => `
        <button class="category-btn ${c.active ? 'active' : ''}" role="tab" aria-selected="${c.active}" aria-controls="menu-grid" data-filter="${c.id}">${c.label}</button>
      `).join('');
    }

    const menuGrid = $('#menu-grid');
    if (menuGrid && cfg.menu.items) {
      menuGrid.innerHTML = cfg.menu.items.map(item => `
        <article class="food-card" data-category="${item.category}">
          <div class="food-card-img-wrapper">
            <img src="${item.img}" alt="${item.title}" loading="lazy" decoding="async">
          </div>
          <div class="food-card-body">
            <div class="food-card-header">
              <h3 class="food-card-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="food-card-price">${item.price}</span>
            </div>
            <p class="food-card-desc">${item.desc}</p>
            <div class="food-card-actions">
              <a href="${item.swiggyUrl}" target="_blank" rel="noopener" class="btn btn-order btn-swiggy">Order with Swiggy</a>
              <a href="${item.zomatoUrl}" target="_blank" rel="noopener" class="btn btn-order btn-zomato">Order with Zomato</a>
              <button type="button" class="btn btn-order btn-whatsapp order-wa-btn" data-item-name="${item.title}" data-item-price="${item.price}">Order via WhatsApp</button>
            </div>
          </div>
        </article>
      `).join('');
    }
  }

  function applyReviews() {
    if (!cfg.reviews) return;
    const revSec = $('#reviews');
    if (!revSec) return;

    const sub = $('.section-subtitle', revSec);
    if (sub) sub.textContent = cfg.reviews.subtitle;

    const title = $('.section-title', revSec);
    if (title) title.textContent = cfg.reviews.title;

    const grid = $('.reviews-grid', revSec);
    if (grid && cfg.reviews.items) {
      grid.innerHTML = cfg.reviews.items.map(r => `
        <figure class="review-card">
          <blockquote class="review-text">
            <div class="review-stars" aria-label="Rating: ${r.stars} out of 5 stars">
              ${Array(r.stars).fill('<i class="ph-fill ph-star" aria-hidden="true"></i>').join('')}
            </div>
            <p>${r.text}</p>
          </blockquote>
          <figcaption class="reviewer-info">
            <img src="${r.avatar}" alt="${r.name}" class="reviewer-avatar" loading="lazy" decoding="async">
            <div>
              <span class="reviewer-name">${r.name}</span>
              <span class="reviewer-role">${r.role}</span>
            </div>
          </figcaption>
        </figure>
      `).join('');
    }

    if (cfg.reviews.googleCta) {
      const ctaTitle = $('.cta-title', revSec);
      if (ctaTitle) ctaTitle.textContent = cfg.reviews.googleCta.title;

      const ctaDesc = $('.cta-desc', revSec);
      if (ctaDesc) ctaDesc.textContent = cfg.reviews.googleCta.desc;

      const ctaBtn = $('.btn-google-review', revSec);
      if (ctaBtn) ctaBtn.setAttribute('href', cfg.reviews.googleCta.url);
    }
  }

  function applyGallery() {
    if (!cfg.gallery) return;
    const galSec = $('#gallery');
    if (!galSec) return;

    const sub = $('.section-subtitle', galSec);
    if (sub) sub.textContent = cfg.gallery.subtitle;

    const title = $('.section-title', galSec);
    if (title) title.textContent = cfg.gallery.title;

    const grid = $('.gallery-grid', galSec);
    if (grid && cfg.gallery.images) {
      grid.innerHTML = cfg.gallery.images.map(img => `
        <button type="button" class="gallery-item" aria-label="Expand image: ${img.alt}">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async">
          <span class="gallery-overlay"><i class="ph ph-arrows-out-simple" aria-hidden="true"></i></span>
        </button>
      `).join('');
    }
  }

  function applyLocation() {
    if (!cfg.location) return;
    const locSec = $('#location');
    if (!locSec) return;

    const sub = $('.section-subtitle', locSec);
    if (sub) sub.textContent = cfg.location.subtitle;

    const title = $('.section-title', locSec);
    if (title) title.textContent = cfg.location.title;

    const desc = $('.text-muted', locSec);     if (desc) desc.textContent = cfg.location.description;      const infoItems = $$('.info-item', locSec);
    if (infoItems.length >= 3) {
      const addrText = $('.text-muted', infoItems[0]);       if (addrText) addrText.textContent = cfg.location.address;        const hoursContainer = infoItems[1];       if (hoursContainer && cfg.location.hours) {         const lines = $$('.text-muted', hoursContainer);
        cfg.location.hours.forEach((h, idx) => {
          if (lines[idx]) lines[idx].textContent = h;
        });
      }

      const contactText = $('.text-muted', infoItems[2]);
      if (contactText) contactText.textContent = `${cfg.location.email} | ${cfg.location.phone}`;
    }

    const mapIframe = $('iframe', locSec);
    if (mapIframe && cfg.location.mapEmbedUrl) {
      mapIframe.src = cfg.location.mapEmbedUrl;
    }
  }

  function applyFooter() {
    if (!cfg.footer) return;
    const foot = $('.footer');
    if (!foot) return;

    const desc = $('.footer-desc', foot);
    if (desc) desc.textContent = cfg.footer.description;

    const socialContainer = $('.social-links', foot);
    if (socialContainer && cfg.footer.socials) {
      socialContainer.innerHTML = cfg.footer.socials.map(s => `
        <a href="${s.url}" class="social-icon" aria-label="${s.platform}" target="_blank" rel="noopener">
          <i class="ph ${s.iconClass}" aria-hidden="true"></i>
        </a>
      `).join('');
    }

    const copy = $('.footer-bottom p', foot);
    if (copy) copy.textContent = cfg.footer.copyright;
  }

  function applyWifiModal() {
    if (!cfg.wifi) return;
    const wifiModal = $('#wifi-modal');
    if (!wifiModal) return;

    const qrImg = $('.wifi-qr-img', wifiModal);
    if (qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=WIFI:S:${cfg.wifi.ssid};T:WPA;P:${cfg.wifi.password};;`;
    }

    const values = $$('.wifi-value', wifiModal);
    if (values[0]) values[0].textContent = cfg.wifi.ssid;
    if (values[1]) values[1].textContent = cfg.wifi.password;
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyStyles();
    applyMeta();
    applyBrandLogos();
    applyHero();
    applyAbout();
    applySpecials();
    applyOffers();
    applyMenu();
    applyReviews();
    applyGallery();
    applyLocation();
    applyFooter();
    applyWifiModal();
  });
})(REBRAND_CONFIG);
