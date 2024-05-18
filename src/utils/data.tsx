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
  },
  {
    image: laundary,
    title: "Laundry & Dry Cleaning Services",
    desc: "Dry Cleaning | Shoe Repair | Wash & Fold",
    quality: 95,
    ratingCount: "2.7k",
    rating: 4,
    href: "services/laundry",
  },
  {
    image: learning,
    title: "E-learning & Home Tuition Services",
    desc: "Online Tutoring | Homework Help",
    quality: 93,
    ratingCount: "8.2k",
    rating: 5,
    href: "services/tuition",
  },
  {
    image: beauty,
    title: "Beauty & Wellness Services",
    desc: "Haircare | Skincare | Massage",
    quality: 93,
    ratingCount: "5.6k",
    rating: 4,
    href: "services/beauty",
  },
  {
    image: event,
    title: "Event Management Services",
    desc: "Catering | Event Planning | Venue Selection",
    quality: 85,
    ratingCount: "2.3k",
    rating: 5,
    href: "services/event",
  },
  {
    image: grocery,
    title: "Grocery Delivery Services",
    desc: "Meal Kits | Pantry Staples | Fresh Produce",
    quality: 89,
    ratingCount: "6.2k",
    rating: 4,
    href: "services/grocery",
  },
  {
    image: mechanic,
    title: "Vehicle Repairing Services",
    desc: "AC Repairing | Tire Services | Auto Body Work",
    quality: 95,
    ratingCount: "1.5k",
    rating: 5,
    href: "services/vehicle",
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
  { href: "/profile", icon: <AiOutlineUser size={18} />, label: "My Profile" },
  {
    href: "/booked-services",
    icon: <HiOutlineWrenchScrewdriver size={18} />,
    label: "Booked Services",
  },
  { href: "/saved", icon: <BsBookmark size={18} />, label: "Saved Services" },
  {
    href: "/notifications",
    icon: <AiOutlineBell size={18} />,
    label: "Notifications",
  },
  {
    onClick: () => signOut(auth),
    href: "/",
    icon: <AiOutlineLogout size={18} />,
    label: "Sign out",
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
  },
  {
    image: handyman,
    title: "Handyman Services",
    desc: "Carpentry | Drywall Repair | Furniture Assembly",
    quality: 95,
    ratingCount: "4.9k",
    rating: 5,
    href: "home/handyman",
  },
  {
    image: home_improvement,
    title: "Home Improvement Services",
    desc: "Bathroom Remodeling | Flooring Installation | Kitchen Renovation",
    quality: 95,
    ratingCount: "4.9k",
    rating: 5,
    href: "home/home-improvement",
  },
  {
    image: garden,
    title: "Lawn and Garden Services",
    desc: "Garden Maintenance | Lawn Mowing | Landscaping",
    quality: 95,
    ratingCount: "4.9k",
    rating: 5,
    href: "home/gardening",
  },
  {
    image: maintainance,
    title: "Maintenance Services",
    desc: "Appliance Repairs | Electrical Repairs | HVAC Services",
    quality: 93,
    ratingCount: "4.9k",
    rating: 5,
    href: "home/maintainance",
  },
  {
    image: tech,
    title: "Tech Services",
    desc: "Computer Repair | Home Network Setup | Smart Home Device Installation",
    quality: 93,
    ratingCount: "4.9k",
    rating: 5,
    href: "home/tech",
  },
];

export const cleaningServices = [
  {
    title: "Appliance Cleaning",
    image: appliance_cleaning,
    quality: 89,
    price: "₹150",
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
    price: "₹499",
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
    price: "₹599",
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

export const staticServices: { [key: string]: any } = {
  "appliance-cleaning": cleaningServices[0],
  "carpet-cleaning": cleaningServices[1],
  "house-cleaning": cleaningServices[2],
};

export const staticMeta: any = {
  "appliance-cleaning": applianceCleaningMetadata,
  "carpet-cleaning": carpetCleaningMetadata,
  "house-cleaning": houseCleaningMetadata,
};
