import Chat from "@/lotties/Chat.json";
import { signOut } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { GoMoon } from "react-icons/go";
import home from "../../public/home.jpg";
import tech from "../../public/tech.jpg";
import Rocket from "@/lotties/Rocket.json";
import event from "../../public/event.jpg";
import suraj from "../../public/suraj.jpeg";
import { BsBookmark } from "react-icons/bs";
import beauty from "../../public/beauty.jpg";
import google from "../../public/google.png";
import garden from "../../public/garden.jpg";
import Discount from "@/lotties/Discount.json";
import grocery from "../../public/grocery.jpg";
import kuldeep from "../../public/kuldeep.jpeg";
import HourGlass from "@/lotties/HourGlass.json";
import laundary from "../../public/laundary.jpg";
import learning from "../../public/learning.jpg";
import mechanic from "../../public/mechanic.jpg";
import { IoSunnyOutline } from "react-icons/io5";
import facebook from "../../public/facebook.png";
import cleaning from "../../public/cleaning.jpg";
import handyman from "../../public/handyman.jpg";
import { WiSunrise, WiSunset } from "react-icons/wi";
import maintainance from "../../public/maintainance.jpg";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import house_cleaning from "../../public/house_cleaning.jpg";
import LottieWrapper from "@/components/shared/LottieWrapper";
import carpet_cleaning from "../../public/carpet_cleaning.jpg";
import home_improvement from "../../public/home_improvement.jpg";
import appliance_cleaning from "../../public/appliance_cleaning.jpg";
import { AiOutlineUser, AiOutlineLogout, AiOutlineBell } from "react-icons/ai";
import electrical_services from "../../public/electrical_services.jpg";
import plumbing_services from "../../public/plumbing_services.jpg";
import carpentry_services from "../../public/carpentry_services.jpg";
import painting_services from "../../public/painting_services.jpg";
import flooring_installation from "../../public/flooring_installation.jpg";
import home_renovation from "../../public/home_renovation.jpg";
import lawn_mowing from "../../public/lawn_mowing.jpg";
import garden_maintenance from "../../public/garden_maintenance.jpg";
import landscape_design from "../../public/landscape_design.jpg";
import network_setup from "../../public/network_setup.jpg";
import smartphone_repair from "../../public/smartphone_repair.jpg";
import computer_repair from "../../public/computer_repair.jpg";
import roof_maintenance from "../../public/roof_maintenance.jpg";
import gutter_cleaning from "../../public/gutter_cleaning.jpg";
import hvac_maintenance from "../../public/hvac_maintenance.jpg";
import {
  applianceCleaningMetadata,
  carpetCleaningMetadata,
  houseCleaningMetadata,
} from "@/utils/metadata";

export const features = [
  {
    title: "Fast & Secure",
    desc: "Our platform is designed to be fast and secure, so you can get your service quickly.",
    icon: (
      <LottieWrapper
        options={{
          loop: true,
          autoplay: true,
          animationData: Rocket,
        }}
        height={150}
        width={150}
      />
    ),
  },
  {
    title: "On Time",
    desc: "We understand that time is money, so we make sure to provide services on time, every time.",
    icon: (
      <LottieWrapper
        options={{
          loop: true,
          autoplay: true,
          animationData: HourGlass,
        }}
        height={150}
        width={150}
      />
    ),
  },
  {
    title: "Membership Benefits",
    desc: "Become a member to unlock exclusive benefits, discounts, and priority service.",
    icon: (
      <LottieWrapper
        options={{
          loop: true,
          autoplay: true,
          animationData: Discount,
        }}
        height={150}
        width={150}
      />
    ),
  },
  {
    title: "Customer Support",
    desc: "Dedicated customer support team available 24/7 to assist you with any questions or concerns you may have.",
    icon: (
      <LottieWrapper
        options={{
          loop: true,
          autoplay: true,
          animationData: Chat,
        }}
        height={150}
        width={150}
      />
    ),
  },
];

export const services = [
  {
    image: home,
    title: "Home Services",
    desc: "Cleaning | Handyman | Home Improvement",
    quality: 93,
    ratingCount: "4.9k",
    rating: 5,
    href: "services/home",
    locked: false,
  },
  {
    image: laundary,
    title: "Laundry & Dry Cleaning Services",
    desc: "Dry Cleaning | Shoe Repair | Wash & Fold",
    quality: 95,
    ratingCount: "2.7k",
    rating: 4,
    href: "#",
    locked: true,
  },
  {
    image: learning,
    title: "E-learning & Home Tuition Services",
    desc: "Online Tutoring | Homework Help",
    quality: 93,
    ratingCount: "8.2k",
    rating: 5,
    href: "#",
    locked: true,
  },
  {
    image: beauty,
    title: "Beauty & Wellness Services",
    desc: "Haircare | Skincare | Massage",
    quality: 93,
    ratingCount: "5.6k",
    rating: 4,
    href: "#",
    locked: true,
  },
  {
    image: event,
    title: "Event Management Services",
    desc: "Catering | Event Planning | Venue Selection",
    quality: 85,
    ratingCount: "2.3k",
    rating: 5,
    href: "#",
    locked: true,
  },
  {
    image: grocery,
    title: "Grocery Delivery Services",
    desc: "Meal Kits | Pantry Staples | Fresh Produce",
    quality: 89,
    ratingCount: "6.2k",
    rating: 4,
    href: "#",
    locked: true,
  },
  {
    image: mechanic,
    title: "Vehicle Repairing Services",
    desc: "AC Repairing | Tire Services | Auto Body Work",
    quality: 95,
    ratingCount: "1.5k",
    rating: 5,
    href: "#",
    locked: true,
  },
];

export const testimonials = [
  {
    name: "Kuldeep Babu",
    rating: 5,
    image: kuldeep,
    comment:
      "I stumbled upon HelpCenter, and it has been a game-changer in my life. From booking a reliable electrician to getting delicious food delivered to my doorstep, this platform has it all.",
  },
  {
    name: "Suraj",
    rating: 4,
    image: suraj,
    comment:
      "I'm extremely satisfied with the convenience and efficiency of HelpCenter. It's a life-saver! Whether it's a quick plumbing fix or a last-minute gift delivery, they've got me covered.",
  },
  {
    name: "Kiran",
    rating: 1,
    image: suraj,
    comment:
      "I had a terrible experience with HelpCenter. The service was slow, and the quality was subpar. Customer support was unresponsive, and I ended up wasting both time and money.",
  },
];

export const numbers = [
  {
    title: 10,
    desc: "Services",
    extra: "+",
  },
  {
    title: 100,
    desc: "Sub Services",
    extra: "+",
  },
  {
    title: 10,
    desc: "Users",
    extra: "k+",
  },
  {
    title: 500,
    desc: "Service Providers",
    extra: "+",
  },
];

export const faq = [
  {
    q: "What types of services do you offer on your platform?",
    a: "We offer a wide range of services, including home cleaning, plumbing, electrical work, handyman services, personal transportation, food delivery, beauty services, and much more. Our platform is designed to meet various on-demand service needs.",
  },
  {
    q: "Are the service providers on your platform vetted and background-checked?",
    a: "Yes, we take the safety of our users seriously. We carefully vet and background-check all service providers before they are allowed to offer their services on our platform. This includes criminal background checks, identity verification, and reviews of their service history.",
  },
  {
    q: "How do I pay for the services I book?",
    a: "You can pay for services using various payment methods, such as credit/debit cards, digital wallets, or other payment options available in your region. Payment is typically processed through our secure platform.",
  },
  {
    q: "What happens if I need to cancel or reschedule a service?",
    a: "You can cancel or reschedule a service booking through our website, following our cancellation policy. Some services may have cancellation fees or specific terms, so make sure to review the cancellation policy for the service you've booked.",
  },
  {
    q: "What if I'm not satisfied with the service I received?",
    a: "If you're not satisfied with the service, please contact our customer support team as soon as possible. We have a resolution process in place to address any issues and ensure your satisfaction.",
  },
];

export const socialLogin = [
  {
    src: google,
    alt: "google",
    name: "Google",
  },
  {
    src: facebook,
    alt: "facebook",
    name: "Facebook",
  },
];

export const notifications = [
  {
    title: "Welcome aboard!",
    message:
      "Hello John Doe, welcome to HelpCenter! Explore a world of convenience at your fingertips.",
    time: "21st December, 2023, at 09:00 AM",
  },
  {
    title: "Order Confirmation",
    message:
      "We're pleased to confirm your order for Event Management Service from GreenGardens. The service will be provided on 21st December, 2023, at 03:00 PM.",
    time: "21st December, 2023, at 2:00 PM",
  },
  {
    title: "Service Provider is on the way",
    message:
      "Your GreenGardens for Event Management Service is on their way! They are expected to arrive at your location in 30 minutes.",
    time: "21st December, 2023, at 2:30 PM",
  },
  {
    title: "Service Provider has Arrived",
    message:
      "Your GreenGardens for Event Management Service has arrived! Please let them know when you are ready for service.",
    time: "21st December, 2023, at 3:00 PM",
  },
  {
    title: "Service Completed",
    message:
      "Your Event Management Service has been completed. Please rate your GreenGardens service provider and leave feedback on the website.",
    time: "21st December, 2023, at 4:00 PM",
  },
  {
    title: "Payment Completed",
    message:
      "We wanted to inform you that your payment for the recent Event Management Service has been successfully processed. Thank you for choosing GreenGardens!",
    time: "21st December, 2023, at 5:00 PM",
  },
  {
    title: "Promotional Offer",
    message:
      "We're offering a special promotion on Pest Control Service! Use code PESTOFF10 at checkout to get a 10% discount.",
    time: "21st December, 2023, at 6:00 PM",
  },
];

export const states = [
  { value: "Andhra Pradesh", label: "Andhra Pradesh" },
  { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
  { value: "Assam", label: "Assam" },
  { value: "Bihar", label: "Bihar" },
  { value: "Chhattisgarh", label: "Chhattisgarh" },
  { value: "Goa", label: "Goa" },
  { value: "Gujarat", label: "Gujarat" },
  { value: "Haryana", label: "Haryana" },
  { value: "Himachal Pradesh", label: "Himachal Pradesh" },
  { value: "Jharkhand", label: "Jharkhand" },
  { value: "Karnataka", label: "Karnataka" },
  { value: "Kerala", label: "Kerala" },
  { value: "Madhya Pradesh", label: "Madhya Pradesh" },
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "Manipur", label: "Manipur" },
  { value: "Meghalaya", label: "Meghalaya" },
  { value: "Mizoram", label: "Mizoram" },
  { value: "Nagaland", label: "Nagaland" },
  { value: "Odisha", label: "Odisha" },
  { value: "Punjab", label: "Punjab" },
  { value: "Rajasthan", label: "Rajasthan" },
  { value: "Sikkim", label: "Sikkim" },
  { value: "Tamil Nadu", label: "Tamil Nadu" },
  { value: "Telangana", label: "Telangana" },
  { value: "Tripura", label: "Tripura" },
  { value: "Uttar Pradesh", label: "Uttar Pradesh" },
  { value: "Uttarakhand", label: "Uttarakhand" },
  { value: "West Bengal", label: "West Bengal" },
];

export const navbarDropdown = [
  {
    href: "/profile",
    icon: <AiOutlineUser size={18} />,
    label: "My Profile",
    locked: false,
  },
  {
    href: "/booked-services",
    icon: <HiOutlineWrenchScrewdriver size={18} />,
    label: "Booked Services",
    locked: false,
  },
  {
    href: "/#",
    icon: <BsBookmark size={18} />,
    label: "Saved Services",
    locked: true,
  },
  {
    href: "/#",
    icon: <AiOutlineBell size={18} />,
    label: "Notifications",
    locked: true,
  },
  {
    onClick: () => signOut(auth),
    href: "/",
    icon: <AiOutlineLogout size={18} />,
    label: "Sign out",
    locked: false,
  },
];

export const timeSlots = [
  {
    icon: <WiSunrise size="25" />,
    label: "Morning",
    time: "9AM - 12PM",
  },
  {
    icon: <IoSunnyOutline size="25" />,
    label: "Afternoon",
    time: "12PM - 3PM",
  },
  {
    icon: <WiSunset size="25" />,
    label: "Evening",
    time: "3PM - 6PM",
  },
  {
    icon: <GoMoon size="25" />,
    label: "Night",
    time: "6PM - 9PM",
  },
];

export const servicesOptions = [
  { label: "Appliance Cleaning", value: "Appliance Cleaning" },
  { label: "Carpet Cleaning", value: "Carpet Cleaning" },
  { label: "House Cleaning", value: "House Cleaning" },
];

export const slotOptions = [
  { label: "Morning", value: "Morning" },
  { label: "Afternoon", value: "Afternoon" },
  { label: "Evening", value: "Evening" },
  { label: "Night", value: "Night" },
];

export const activeStatusOptions = [
  { label: "Initiated", value: "Initiated" },
  { label: "Booked", value: "Booked" },
  { label: "In Progress", value: "In Progress" },
  { label: "Finished", value: "Finished" },
  { label: "Cancelled", value: "Cancelled" },
];

export const statusColors: any = {
  Initiated: {
    color: "#334155",
    bg: "#f1f5f9",
  },
  Booked: {
    color: "#0f766e",
    bg: "#ccfbf1",
  },
  "In Progress": {
    color: "#c2410c",
    bg: "#ffedd5",
  },
  Finished: {
    color: "#15803d",
    bg: "#dcfce7",
  },
  Cancelled: {
    color: "#b91c1c",
    bg: "#fee2e2",
  },
};

export const homeServices = [
  {
    image: cleaning,
    title: "Cleaning Services",
    desc: "Appliance Cleaning | Carpet Cleaning | House Cleaning",
    quality: 96,
    ratingCount: "4.9k",
    rating: 5,
    href: "home/cleaning",
    locked: false,
  },
  {
    image: handyman,
    title: "Handyman Services",
    desc: "Carpentry Services | Electrical Services | Plumbing Services",
    quality: 95,
    ratingCount: "4.9k",
    rating: 5,
    href: "home/handyman",
    locked: false,
  },
  {
    image: home_improvement,
    title: "Home Improvement Services",
    desc: "Flooring Installation | Home Renovation | Painting Services",
    quality: 95,
    ratingCount: "4.9k",
    rating: 5,
    href: "home/home-improvement",
    locked: false,
  },
  {
    image: garden,
    title: "Lawn and Garden Services",
    desc: "Garden Maintenance | Landscape Design | Lawn Mowing",
    quality: 95,
    ratingCount: "4.9k",
    rating: 5,
    href: "home/lawn-and-garden",
    locked: false,
  },
  {
    image: maintainance,
    title: "Maintenance Services",
    desc: "Gutter Cleaning | HVAC Maintenance | Roof Maintenance",
    quality: 93,
    ratingCount: "4.9k",
    rating: 5,
    href: "home/maintenance",
    locked: false,
  },
  {
    image: tech,
    title: "Tech Services",
    desc: "Computer Repair | Network Setup and Configuration | Smartphone Repair",
    quality: 93,
    ratingCount: "4.9k",
    rating: 5,
    href: "home/tech",
    locked: false,
  },
];

export const cleaningServices = [
  {
    title: "Appliance Cleaning",
    image: appliance_cleaning,
    quality: 89,
    price: "₹150 - ₹500",
    rating: 4,
    ratingCount: "100",
    time: "2-4h",
    services: [
      "Refrigerator Deep Cleaning",
      "Oven and Stove-Top Cleaning",
      "Dishwasher Maintenance",
      "Microwave Interior Cleaning",
      "Washing Machine Drum Clean-Up",
    ],
    desc: "Revitalize your appliances with expert cleaning services: refrigerators, ovens, dishwashers, microwaves, and washing machines",
    tags: "appliance cleaning refrigerator oven stove dishwasher maintenance microwave washing machine drum deep interior quality price rating count services deep-cleaning maintenance upkeep sanitation hygiene kitchen home household professional efficient thorough tidy spotless gleaming pristine sanitized fresh organized polished scrubbed deodorized sanitized expert skilled experienced reliable affordable fast convenient eco-friendly thorough effective",
  },
  {
    title: "Carpet Cleaning",
    image: carpet_cleaning,
    quality: 93,
    price: "₹499 - ₹1500",
    rating: 5,
    ratingCount: "200",
    time: "1-3h",
    services: [
      "Deep Carpet Steam Cleaning",
      "Spot and Stain Removal",
      "Carpet Shampooing",
      "Carpet Deodorizing",
      "Carpet Protection Treatment",
    ],
    desc: "Refresh your carpets with professional services: deep steam cleaning, stain removal, shampooing, deodorizing, and protection.",
    tags: "carpet cleaning steam spot stain removal shampooing deodorizing protection treatment deep quality price rating services affordable professional thorough efficient reliable experienced skilled steam-cleaning deep-cleaning thorough-cleaning effective certified trained eco-friendly quick convenient expert odor freshening upholstery maintenance hygiene dirt grime bacteria allergen sanitization disinfection home office commercial residential affordable trusted satisfaction",
  },
  {
    title: "House Cleaning",
    image: house_cleaning,
    quality: 95,
    price: "₹599 - ₹2000",
    rating: 3,
    ratingCount: "400",
    time: "2-4h",
    services: [
      "Regular House Cleaning",
      "Deep Cleaning",
      "Kitchen Cleaning",
      "Bathroom Cleaning",
      "Window and Blind Cleaning",
    ],
    desc: "Transform your home with top-quality services: regular cleaning, deep cleaning, kitchen, bathroom, and window cleaning.",
    tags: "housecleaning cleaning house deepcleaning kitchen bathroom window blind regular service quality price rating count home tidy neat scrub shine sanitize dust mop vacuum wipe spotless efficient professional organized thorough quick affordable reliable experienced team satisfaction detail fresh sparkling hygienic fast expert household chores checklist solution routine pristine grime spot bacteria",
  },
];

export const handymanServices = [
  {
    title: "Carpentry Services",
    image: carpentry_services,
    quality: 91,
    price: "₹400 - ₹1500",
    rating: 4,
    ratingCount: "120",
    time: "2-5h",
    services: [
      "Furniture Assembly",
      "Custom Shelving Installation",
      "Door and Window Repair",
      "Deck and Patio Construction",
      "Wood Floor Refinishing",
    ],
    desc: "Enhance your home with skilled carpentry: furniture assembly, custom shelving, door and window repair, deck construction, and floor refinishing.",
    tags: "carpentry services furniture assembly custom shelving installation door window repair deck patio construction wood floor refinishing quality price rating count efficient professional reliable experienced skilled affordable quick convenient certified licensed repair maintenance home household carpentry woodwork upgrade expert craftsmanship solution detail precision building installation durable",
  },
  {
    title: "Electrical Services",
    image: electrical_services,
    quality: 94,
    price: "₹300 - ₹1000",
    rating: 4,
    ratingCount: "150",
    time: "1-3h",
    services: [
      "Light Fixture Installation",
      "Electrical Outlet Repair",
      "Ceiling Fan Installation",
      "Circuit Breaker Replacement",
      "Wiring and Rewiring",
    ],
    desc: "Ensure your home's electrical systems are safe and efficient with professional services: fixture installation, outlet repair, ceiling fan setup, and more.",
    tags: "electrical services light fixture installation outlet repair ceiling fan circuit breaker wiring rewiring quality price rating count efficient professional reliable experienced safe skilled affordable quick convenient certified licensed repair maintenance home household electrical systems upgrade safety expert troubleshooting solution detail inspection installation energy efficient secure",
  },
  {
    title: "Plumbing Services",
    image: plumbing_services,
    quality: 91,
    price: "₹250 - ₹1200",
    rating: 5,
    ratingCount: "180",
    time: "1-2h",
    services: [
      "Leak Detection and Repair",
      "Pipe Installation and Repair",
      "Toilet Repair and Installation",
      "Water Heater Maintenance",
      "Drain Cleaning",
    ],
    desc: "Resolve plumbing issues with expert services: leak detection, pipe repair, toilet maintenance, water heater care, and drain cleaning.",
    tags: "plumbing services leak detection repair pipe installation toilet maintenance water heater drain cleaning quality price rating count efficient professional reliable experienced skilled affordable quick convenient certified licensed repair maintenance home household plumbing systems upgrade safety expert troubleshooting solution detail inspection cleaning unclog blockage secure flow drainage",
  },
];

export const homeImprovementServices = [
  {
    title: "Flooring Installation",
    image: flooring_installation,
    quality: 97,
    price: "₹1500 - ₹6000",
    rating: 4.8,
    ratingCount: "120",
    time: "6-10h",
    services: [
      "Hardwood Floor Installation",
      "Tile Floor Installation",
      "Laminate Floor Installation",
      "Vinyl Floor Installation",
      "Carpet Floor Installation",
    ],
    desc: "Upgrade your floors with our expert installation services: hardwood, tile, laminate, vinyl, and carpet flooring.",
    tags: "flooring installation hardwood tile laminate vinyl carpet professional quality price rating count home improvement skilled experienced efficient thorough reliable durable stylish aesthetic renovation upgrade new floors polished smooth seamless eco-friendly affordable fast convenient satisfaction detail expert craftsmanship residential commercial interior design",
  },
  {
    title: "Home Renovation",
    image: home_renovation,
    quality: 90,
    price: "₹5000 - ₹20000",
    rating: 4.2,
    ratingCount: "80",
    time: "1-2 weeks",
    services: [
      "Kitchen Remodeling",
      "Bathroom Remodeling",
      "Room Additions",
      "Basement Finishing",
      "Attic Conversion",
    ],
    desc: "Transform your living space with our comprehensive renovation services: kitchen and bathroom remodeling, room additions, basement finishing, and attic conversion.",
    tags: "home renovation remodeling kitchen bathroom room addition basement finishing attic conversion quality price rating count home improvement professional skilled experienced efficient thorough reliable stylish modern upgrade renovation project interior design space transformation custom detailed planning execution craftsmanship satisfaction premium eco-friendly durable affordable",
  },
  {
    title: "Painting Services",
    image: painting_services,
    quality: 87,
    price: "₹1000 - ₹5000",
    rating: 4.5,
    ratingCount: "150",
    time: "4-8h",
    services: [
      "Interior Wall Painting",
      "Exterior Wall Painting",
      "Ceiling Painting",
      "Furniture Painting",
      "Touch-Up and Finishing",
    ],
    desc: "Enhance the beauty of your home with our professional painting services: interior and exterior walls, ceilings, furniture, and touch-ups.",
    tags: "painting services interior exterior wall ceiling furniture touch-up finishing quality price rating count home improvement professional efficient thorough skilled reliable affordable fast convenient eco-friendly vibrant colors fresh coat durable aesthetic renovation upgrade house refresh beautify stylish premium precise detailed neat clean smooth flawless protection sheen",
  },
];

export const lawnAndGardenServices = [
  {
    title: "Garden Maintenance",
    image: garden_maintenance,
    quality: 92,
    price: "₹400 - ₹1200",
    rating: 5,
    ratingCount: "180",
    time: "2-3h",
    services: [
      "Pruning and Trimming",
      "Weeding and Mulching",
      "Planting and Transplanting",
      "Soil Testing and Fertilization",
      "Garden Cleanup",
    ],
    desc: "Enhance your garden with comprehensive maintenance: pruning, weeding, planting, soil care, and cleanup services.",
    tags: "garden maintenance pruning trimming weeding mulching planting transplanting soil testing fertilization cleanup quality price rating services professional thorough efficient reliable experienced skilled eco-friendly effective fast convenient neat tidy healthy lush vibrant organized detailed garden yard landscaping seasonal routine care expert horticulture flora greenery",
  },
  {
    title: "Landscape Design",
    image: landscape_design,
    quality: 86,
    price: "₹2000 - ₹5000",
    rating: 5,
    ratingCount: "90",
    time: "3-6h",
    services: [
      "Custom Landscape Plans",
      "Plant Selection and Placement",
      "Hardscaping Installation",
      "Irrigation System Setup",
      "Lighting Design",
    ],
    desc: "Transform your outdoor space with expert landscape design: custom plans, plant selection, hardscaping, irrigation, and lighting.",
    tags: "landscape design custom plans plant selection placement hardscaping installation irrigation system setup lighting design quality price rating services professional thorough efficient reliable experienced skilled creative innovative eco-friendly effective fast convenient detailed artistic beautiful elegant sophisticated yard garden outdoor space transformation home improvement greenery aesthetics",
  },
  {
    title: "Lawn Mowing",
    image: lawn_mowing,
    quality: 91,
    price: "₹300 - ₹800",
    rating: 4,
    ratingCount: "150",
    time: "1-2h",
    services: [
      "Grass Cutting",
      "Edging and Trimming",
      "Debris Removal",
      "Weed Control",
      "Lawn Aeration",
    ],
    desc: "Keep your lawn neat and healthy with expert mowing services: grass cutting, edging, debris removal, weed control, and aeration.",
    tags: "lawn mowing grass cutting edging trimming debris removal weed control aeration quality price rating count services tidy neat maintenance upkeep professional efficient reliable thorough green lush healthy fresh organized polished eco-friendly effective fast convenient experienced skilled affordable routine seasonal home garden yard landscaping",
  },
];

export const maintenanceServices = [
  {
    title: "Gutter Cleaning",
    image: gutter_cleaning,
    quality: 90,
    price: "₹399 - ₹1200",
    rating: 4.5,
    ratingCount: "120",
    time: "1-2h",
    services: [
      "Gutter Inspection",
      "Debris Removal",
      "Downspout Cleaning",
      "Flushing",
      "Minor Repairs",
    ],
    desc: "Maintain your gutter system's integrity: inspection, debris removal, downspout cleaning, flushing, and minor repairs.",
    tags: "gutter cleaning inspection debris removal downspout flushing minor repairs quality price rating count services efficient reliable thorough affordable professional experienced certified trained effective quick convenient expert guttering gutter-system maintenance",
  },
  {
    title: "HVAC Maintenance",
    image: hvac_maintenance,
    quality: 92,
    price: "₹799 - ₹2500",
    rating: 4,
    ratingCount: "150",
    time: "1-2h",
    services: [
      "Air Duct Cleaning",
      "Filter Replacement",
      "System Inspection and Tune-Up",
      "Coil Cleaning",
      "Fan Motor Lubrication",
    ],
    desc: "Keep your HVAC system running smoothly: air duct cleaning, filter replacement, system inspection, coil cleaning, and fan motor lubrication.",
    tags: "hvac maintenance air-duct filter replacement system inspection tune-up coil cleaning fan-motor lubrication quality price rating count services efficient reliable thorough affordable professional experienced certified trained effective quick convenient expert",
  },
  {
    title: "Roof Maintenance",
    image: roof_maintenance,
    quality: 77,
    price: "₹899 - ₹3000",
    rating: 4.2,
    ratingCount: "100",
    time: "2-3h",
    services: [
      "Roof Inspection",
      "Shingle Replacement",
      "Gutter Cleaning",
      "Moss Removal",
      "Sealing",
    ],
    desc: "Preserve the longevity of your roof: inspection, shingle replacement, gutter cleaning, moss removal, and sealing.",
    tags: "roof maintenance inspection shingle replacement gutter cleaning moss removal sealing quality price rating count services efficient reliable thorough affordable professional experienced certified trained effective quick convenient expert roofing roof-system preservation longevity integrity upkeep",
  },
];

export const techServices = [
  {
    title: "Computer Repair",
    image: computer_repair,
    quality: 92,
    price: "₹499 - ₹2000",
    rating: 4,
    ratingCount: "150",
    time: "1-3h",
    services: [
      "Hardware Troubleshooting",
      "Software Installation and Configuration",
      "Virus and Malware Removal",
      "Data Recovery",
      "System Tune-Up",
    ],
    desc: "Get your computer running smoothly with expert repair services: troubleshooting, software setup, virus removal, data recovery, and system optimization.",
    tags: "computer repair troubleshooting hardware software installation configuration virus malware removal data recovery system tune-up quality price rating services efficient reliable experienced skilled certified quick convenient expert effective affordable trusted satisfaction",
  },
  {
    title: "Network Setup and Configuration",
    image: network_setup,
    quality: 95,
    price: "₹799 - ₹2500",
    rating: 4.5,
    ratingCount: "120",
    time: "2-4h",
    services: [
      "Router Installation and Configuration",
      "Network Security Setup",
      "Wireless Network Optimization",
      "LAN and WAN Configuration",
      "Network Troubleshooting",
    ],
    desc: "Ensure seamless connectivity with professional network services: router setup, security configuration, wireless optimization, LAN/WAN setup, and troubleshooting.",
    tags: "network setup configuration router installation security wireless LAN WAN troubleshooting quality price rating services efficient reliable experienced skilled certified quick convenient expert effective affordable trusted satisfaction",
  },
  {
    title: "Smartphone Repair",
    image: smartphone_repair,
    quality: 91,
    price: "₹299 - ₹1500",
    rating: 4.5,
    ratingCount: "100",
    time: "1-2h",
    services: [
      "Screen Replacement",
      "Battery Replacement",
      "Charging Port Repair",
      "Water Damage Repair",
      "Software Troubleshooting",
    ],
    desc: "Restore your smartphone's functionality with professional repair services: screen and battery replacement, charging port repair, water damage recovery, and software troubleshooting.",
    tags: "smartphone repair screen battery replacement charging port water damage software troubleshooting quality price rating services efficient reliable experienced skilled certified quick convenient expert effective affordable trusted satisfaction",
  },
];

export const servicesList = [
  { id: "appliance-cleaning" },
  { id: "carpet-cleaning" },
  { id: "house-cleaning" },
  { id: "carpentry-services" },
  { id: "electrical-services" },
  { id: "plumbing-services" },
  { id: "flooring-installation" },
  { id: "home-renovation" },
  { id: "painting-services" },
  { id: "garden-maintenance" },
  { id: "landscape-design" },
  { id: "lawn-mowing" },
  { id: "gutter-cleaning" },
  { id: "hvac-maintenance" },
  { id: "roof-maintenance" },
  { id: "computer-repair" },
  { id: "network-setup-and-configuration" },
  { id: "smartphone-repair" },
];

export const servicesMap: { [key: string]: any } = {
  "appliance-cleaning": cleaningServices[0],
  "carpet-cleaning": cleaningServices[1],
  "house-cleaning": cleaningServices[2],
  "carpentry-services": handymanServices[0],
  "electrical-services": handymanServices[1],
  "plumbing-services": handymanServices[2],
  "flooring-installation": homeImprovementServices[0],
  "home-renovation": homeImprovementServices[1],
  "painting-services": homeImprovementServices[2],
  "garden-maintenance": lawnAndGardenServices[0],
  "landscape-design": lawnAndGardenServices[1],
  "lawn-mowing": lawnAndGardenServices[2],
  "gutter-cleaning": maintenanceServices[0],
  "hvac-maintenance": maintenanceServices[1],
  "roof-maintenance": maintenanceServices[2],
  "computer-repair": techServices[0],
  "network-setup-and-configuration": techServices[1],
  "smartphone-repair": techServices[2],
};

export const staticMeta: any = {
  "appliance-cleaning": applianceCleaningMetadata,
  "carpet-cleaning": carpetCleaningMetadata,
  "house-cleaning": houseCleaningMetadata,
};
