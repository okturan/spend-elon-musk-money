import { useState } from "react";
import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import Receipt from "./components/Receipt";

const initialBudget = 247_000_000_000;

const items = {
  1: { name: "Bottle of Water", price: 2, img: "/images/1_bottle_of_water.webp" },
  2: { name: "Toothbrush", price: 3, img: "/images/2_toothbrush.webp" },
  3: { name: "Box of Cereal", price: 4, img: "/images/3_box_of_cereal.webp" },
  4: { name: "Spaghetti Pack", price: 5, img: "/images/4_spaghetti_pack.webp" },
  5: { name: "Pack of Paper Towels", price: 6, img: "/images/5_pack_of_paper_towels.webp" },
  6: { name: "Pack of Socks", price: 8, img: "/images/6_pack_of_socks.webp" },
  7: { name: "Laundry Detergent", price: 10, img: "/images/7_laundry_detergent.webp" },
  8: { name: "Notebook and Pen Set", price: 12, img: "/images/8_notebook_and_pen_set.webp" },
  9: { name: "Organic Snacks Pack", price: 12, img: "/images/9_organic_snacks_pack.webp" },
  10: { name: "Basic Smartphone Case", price: 15, img: "/images/10_basic_smartphone_case.webp" },
  11: { name: "LED Desk Lamp", price: 18, img: "/images/11_led_desk_lamp.webp" },
  12: { name: "Reusable Water Bottle", price: 20, img: "/images/12_reusable_water_bottle.webp" },
  13: { name: "Wireless Mouse", price: 25, img: "/images/13_wireless_mouse.webp" },
  14: { name: "Coffee Maker", price: 25, img: "/images/14_coffee_maker.webp" },
  15: { name: "Smart Plug", price: 25, img: "/images/15_smart_plug.webp" },
  16: { name: "Portable Power Bank", price: 30, img: "/images/16_portable_power_bank.webp" },
  17: { name: "Smart Light Strip", price: 35, img: "/images/17_smart_light_strip.webp" },
  18: { name: "Yoga Mat", price: 35, img: "/images/18_yoga_mat.webp" },
  19: { name: "Vacuum Insulated Tumbler", price: 38, img: "/images/19_vacuum_insulated_tumbler.webp" },
  20: { name: "Streaming Device", price: 40, img: "/images/20_streaming_device.webp" },
  21: { name: "Stainless Steel Cookware Set", price: 45, img: "/images/21_stainless_steel_cookware_set.webp" },
  22: { name: "Bluetooth Earbuds", price: 50, img: "/images/22_bluetooth_earbuds.webp" },
  23: { name: "Electric Toothbrush", price: 50, img: "/images/23_electric_toothbrush.webp" },
  24: { name: "Smart Mug", price: 50, img: "/images/24_smart_mug.webp" },
  25: { name: "Electric Kettle", price: 60, img: "/images/25_electric_kettle.webp" },
  26: { name: "Wireless Charging Station", price: 60, img: "/images/26_wireless_charging_station.webp" },
  27: { name: "Smart Thermometer", price: 60, img: "/images/27_smart_thermometer.webp" },
  28: { name: "Smart Coffee Grinder", price: 75, img: "/images/28_smart_coffee_grinder.webp" },
  29: { name: "Wireless Earphones", price: 75, img: "/images/29_wireless_earphones.webp" },
  30: { name: "Home Security Camera", price: 80, img: "/images/30_home_security_camera.webp" },
  31: { name: "Smartphone Gimbal", price: 85, img: "/images/31_smartphone_gimbal.webp" },
  32: { name: "Smart Garden Kit", price: 90, img: "/images/32_smart_garden_kit.webp" },
  33: { name: "Smart Doorbell", price: 100, img: "/images/33_smart_doorbell.webp" },
  34: { name: "Fitness Tracker", price: 100, img: "/images/34_fitness_tracker.webp" },
  35: { name: "Portable SSD", price: 100, img: "/images/35_portable_ssd.webp" },
  36: { name: "E-Book Reader", price: 120, img: "/images/36_e-book_reader.webp" },
  37: { name: "Compact Air Purifier", price: 120, img: "/images/37_compact_air_purifier.webp" },
  38: { name: "Gaming Keyboard", price: 120, img: "/images/38_gaming_keyboard.webp" },
  39: { name: "High-Quality Headphones", price: 150, img: "/images/39_high-quality_headphones.webp" },
  40: { name: "Digital Photo Frame", price: 150, img: "/images/40_digital_photo_frame.webp" },
  41: { name: "Noise-Cancelling Headphones", price: 180, img: "/images/41_noise-cancelling_headphones.webp" },
  42: { name: "Advanced Fitness Tracker", price: 180, img: "/images/42_advanced_fitness_tracker.webp" },
  43: { name: "Smartwatch", price: 200, img: "/images/43_smartwatch.webp" },
  44: { name: "Robot Vacuum Cleaner", price: 200, img: "/images/44_robot_vacuum_cleaner.webp" },
  45: { name: "Smart Thermostat", price: 220, img: "/images/45_smart_thermostat.webp" },
  46: { name: "Ergonomic Office Chair", price: 220, img: "/images/46_ergonomic_office_chair.webp" },
  47: { name: "Premium Blender", price: 250, img: "/images/47_premium_blender.webp" },
  48: { name: "Portable Projector", price: 300, img: "/images/48_portable_projector.webp" },
  49: { name: "Electric Standing Desk", price: 300, img: "/images/49_electric_standing_desk.webp" },
  50: { name: "Private Yoga Session", price: 500, img: "/images/50_private_yoga_session.webp" },
  51: { name: "Gourmet Cooking Class", price: 600, img: "/images/51_gourmet_cooking_class.webp" },
  52: { name: "Luxury Weekend Getaway", price: 2000, img: "/images/52_luxury_weekend_getaway.webp" },
  53: { name: "High-End DSLR Camera", price: 2500, img: "/images/53_high-end_dslr_camera.webp" },
  54: { name: "Smart Home Upgrade Package", price: 5000, img: "/images/54_smart_home_upgrade_package.webp" },
  55: { name: "Neuralink Implant", price: 20000, img: "/images/55_neuralink_implant.webp" },
  56: { name: "Cybertruck", price: 39900, img: "/images/56_cybertruck.webp" },
  57: { name: "Private Yacht Charter", price: 100000, img: "/images/57_private_yacht_charter.webp" },
  58: { name: "Custom Supercar Experience", price: 250000, img: "/images/58_custom_supercar_experience.webp" },
  59: { name: "Private Jet Flight", price: 500000, img: "/images/59_private_jet_flight.webp" },
  60: { name: "Luxury Smart Mansion", price: 5000000, img: "/images/60_luxury_smart_mansion.webp" },
  61: { name: "Exclusive Art Collection", price: 10000000, img: "/images/61_exclusive_art_collection.webp" },
  62: { name: "Falcon 9 Rocket", price: 62000000, img: "/images/62_falcon_9_rocket.webp" },
  63: { name: "Starship Spacecraft", price: 200000000, img: "/images/63_starship_spacecraft.webp" },
  64: { name: "Gigafactory Expansion", price: 5000000000, img: "/images/64_gigafactory_expansion.webp" },
  65: { name: "Twitter Acquisition", price: 44000000000, img: "/images/65_twitter_acquisition.webp" },
  66: { name: "Mars Colony", price: 100000000000, img: "/images/66_mars_colony.webp" },
};

const emptyCart = structuredClone(items);
Object.values(emptyCart).forEach((item) => (item.quantity = 0));

function App() {
  const [budget, setBudget] = useState(initialBudget);
  const [cart, setCart] = useState(emptyCart);

  const updateCart = (id, operation) => {
    const itemPrice = items[id].price;

    setBudget((prevBudget) => (operation === "add" ? prevBudget - itemPrice : prevBudget + itemPrice));

    setCart((prevCart) => {
      const newCart = structuredClone(prevCart);
      newCart[id].quantity += operation === "add" ? 1 : -1;
      return newCart;
    });
  };

  const totalSpent = initialBudget - budget;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Header budget={budget} />

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Object.entries(cart).map(([id, item]) => (
          <ItemCard key={id} id={id} item={item} budget={budget} updateCart={updateCart} />
        ))}
      </div>

      <Receipt cart={cart} totalSpent={totalSpent} />
    </div>
  );
}

export default App;
