import HeroBanner from "./components/HeroBanner";
import WeOfferSection from "./components/WeOfferSection";
import CustomCakesSection from "./components/CustomCakesSection";
import MenuSection from "./components/MenuSection";
import TestimonialsSection from "./components/TestimonialsSection";

// Data (could also be moved to separate data files)
const slides = [
  {
    title: "Where every Flavour tells a story",
    description: "Artisanal cakes crafted from ₹350 with complimentary doorstep delivery",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1920&h=1080&fit=crop"
  },
  {
    title: "Nature's Sweetness in Every Slice",
    description: "Premium cakes starting from ₹350 with free home delivery",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1920&h=1080&fit=crop"
  },
  {
    title: "Crafted with Love & Perfection",
    description: "Premium cakes starting from ₹350 with free home delivery",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1920&h=1080&fit=crop"
  }
];

const offers = [
  { title: "Supreme Cake", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop" },
  { title: "Exotic Chocolate Flavour", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop" },
  { title: "Cheese Cake", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop" }
];

const customCakes = [
  { title: "Engagement cake", image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=400&h=400&fit=crop" },
  { title: "Kids Birthday Theme", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop" },
  { title: "Anniversary Special", image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop" }
];

const menuItems = [
  { name: "Apple Rasmalai", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop", desc: "Experience the divine taste of Cake Mafira." },
  { name: "Black Forest", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop", desc: "Experience the divine taste of Cake Mafira." },
  { name: "Brown Velvet", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=200&fit=crop", desc: "Experience the divine taste of Cake Mafira." },
  { name: "Choco Chips", image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300&h=200&fit=crop", desc: "Experience the divine taste of Cake Mafira." },
  { name: "Exotic Blueberry", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=200&fit=crop", desc: "Experience the divine taste of Cake Mafira." },
  { name: "Ferrero Rocher", image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop", desc: "Experience the divine taste of Cake Mafira." },
  { name: "Lotus Biscoff", image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&h=200&fit=crop", desc: "Experience the divine taste of Cake Mafira." },
  { name: "Red Velvet Cheese", image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=300&h=200&fit=crop", desc: "Experience the divine taste of Cake Mafira." }
];

const testimonials = [
  { name: "Priya Sharma", text: "I always take cake from Cake Mafira..very good taste, fresh bake and awesome finishing. They always make my customised cake very well...I must highly recommend it.", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=80&h=80&fit=crop&crop=face" },
  { name: "Rahul Verma", text: "Ordered a special Mango cake (1 kg) for office potluck. Delivered it right on time, taste was outstanding, presentation was fantastic. Highly recommend this bakery.", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" },
  { name: "Sneha Patel", text: "We had ordered two cakes. It was perfect and tasty. Exactly what we ordered for. Service was on time and delivery was perfect. Everyone loved it.", rating: 5, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" },
  { name: "Amit Kumar", text: "We ordered a blue theme cake for my son's first birthday. Super yummy cake delivered on time. Cake was prepared exactly as per our theme. Thank you for your service.", rating: 5, avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face" }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroBanner slides={slides} />
      <WeOfferSection offers={offers} />
      <CustomCakesSection customCakes={customCakes} />
      <MenuSection menuItems={menuItems} />
      <TestimonialsSection testimonials={testimonials} />
    </div>
  );
}