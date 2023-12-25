import Chat from "../lotties/Chat.json";
import Rocket from "../lotties/Rocket.json";
import Discount from "../lotties/Discount.json";
import HourGlass from "../lotties/HourGlass.json";
import LottieWrapper from "@/components/LottieWrapper";

import beauty from "../../public/beauty.jpg";
import event from "../../public/event.jpg";
import grocery from "../../public/grocery.jpg";
import home from "../../public/home.jpg";
import laundary from "../../public/laundary.jpg";
import learning from "../../public/learning.jpg";
import mechanic from "../../public/mechanic.jpg";

import suraj from "../../public/suraj.jpeg";
import kuldeep from "../../public/kuldeep.jpeg";

import google from "../../public/google.png";
import facebook from "../../public/facebook.png";

import tech from "../../public/tech.jpg";
import cleaning from "../../public/cleaning.jpg";
import garden from "../../public/garden.jpg";
import handyman from "../../public/handyman.jpg";
import home_improvement from "../../public/home_improvement.jpg";
import maintainance from "../../public/maintainance.jpg";

import appliance_cleaning from "../../public/appliance_cleaning.jpg";
import carpet_cleaning from "../../public/carpet_cleaning.jpg";
import house_cleaning from "../../public/house_cleaning.jpg";

import { LuUser2 } from "react-icons/lu";
import {
  IoLocationOutline,
  IoCardOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";

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
    desc: "Cleaning, Maintenance, Pest Control, etc.",
    quality: 93,
    ratingCount: "4.9k",
    rating: 5,
    href: "home-services",
  },
  {
    image: laundary,
    title: "Laundry & Dry Cleaning Services",
    desc: "Dry Cleaning, Shoe Repair, Wash & Fold, etc.",
    quality: 95,
    ratingCount: "2.7k",
    rating: 4,
    href: "laundry-services",
  },
  {
    image: learning,
    title: "E-learning & Home Tuition Services",
    desc: "Online Tutoring, Homework Help, etc.",
    quality: 93,
    ratingCount: "8.2k",
    rating: 5,
    href: "tuition-services",
  },
  {
    image: beauty,
    title: "Beauty & Wellness Services",
    desc: "Haircare, Skincare, Massage, Makeup, Waxing, etc.",
    quality: 93,
    ratingCount: "5.6k",
    rating: 4,
    href: "beauty-services",
  },
  {
    image: event,
    title: "Event Management Services",
    desc: "Catering, Event Planning, Venue Selection, etc.",
    quality: 85,
    ratingCount: "2.3k",
    rating: 5,
    href: "event-services",
  },
  {
    image: grocery,
    title: "Grocery Delivery Services",
    desc: "Meal Kits, Pantry Staples, Fresh Produce, etc.",
    quality: 89,
    ratingCount: "6.2k",
    rating: 4,
    href: "grocery-services",
  },
  {
    image: mechanic,
    title: "Vehicle Repairing Services",
    desc: "AC Repairing, Tire Services, Auto Body Work, etc.",
    quality: 41,
    ratingCount: "1.5k",
    rating: 5,
    href: "vehicle-services",
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

export const profileNav = [
  {
    icon: <LuUser2 size={18} />,
    state: [true, false, false, false],
    url: "info",
  },
  {
    icon: <IoLocationOutline size={18} />,
    state: [false, true, false, false],
    url: "address",
  },
  {
    icon: <IoPhonePortraitOutline size={18} />,
    state: [false, false, true, false],
    url: "upi",
  },
  {
    icon: <IoCardOutline size={18} />,
    state: [false, false, false, true],
    url: "cards",
  },
];

export const homeServices = [
  {
    image: cleaning,
    title: "Cleaning Services",
    desc: "Appliance Cleaning | Carpet Cleaning | House Cleaning",
    quality: 96,
    ratingCount: "4.9k",
    rating: 5,
    href: "home-services/cleaning",
  },
  {
    image: garden,
    title: "Lawn and Garden Services",
    desc: "Garden Maintenance | Lawn Mowing | Landscaping",
    quality: 95,
    ratingCount: "4.9k",
    rating: 5,
    href: "home-services/gardening",
  },
  {
    image: handyman,
    title: "Handyman Services",
    desc: "Carpentry | Drywall Repair | Furniture Assembly",
    quality: 95,
    ratingCount: "4.9k",
    rating: 5,
    href: "home-services/handyman",
  },
  {
    image: home_improvement,
    title: "Home Improvement Services",
    desc: "Bathroom Remodeling | Flooring Installation | Kitchen Renovation",
    quality: 95,
    ratingCount: "4.9k",
    rating: 5,
    href: "home-services/home-improvement",
  },
  {
    image: maintainance,
    title: "Maintenance Services",
    desc: "Appliance Repairs | Electrical Repairs | HVAC Services",
    quality: 93,
    ratingCount: "4.9k",
    rating: 5,
    href: "home-services/maintainance",
  },
  {
    image: tech,
    title: "Tech Services",
    desc: "Computer Repair | Home Network Setup | Smart Home Device Installation",
    quality: 93,
    ratingCount: "4.9k",
    rating: 5,
    href: "home-services/tech",
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
    services: [
      "Refrigerator Deep Cleaning",
      "Oven and Stove-Top Cleaning",
      "Dishwasher Maintenance",
      "Microwave Interior Cleaning",
      "Washing Machine Drum Clean-Up",
    ],
    tags: [
      "maid",
      "oven",
      "stove",
      "fridge",
      "washing",
      "cleaner",
      "cleaning",
      "appliance",
      "microwave",
      "dishwahser",
      "refrigerator",
      "ovencleaning",
      "stovecleaning",
      "washingmachine",
      "fridgecleaning",
      "microwavecleaning",
      "appliancecleaning",
      "dishwashercleaning",
      "refrigeratorcleaning",
      "washingmachinecleaning",
      "refrigeratordeepcleaning",
    ],
  },
  {
    title: "Carpet Cleaning",
    image: carpet_cleaning,
    quality: 93,
    price: "₹499",
    rating: 5,
    ratingCount: "200",
    services: [
      "Deep Carpet Steam Cleaning",
      "Spot and Stain Removal",
      "Carpet Shampooing",
      "Carpet Deodorizing",
      "Carpet Protection Treatment",
    ],
    tags: [
      "rug",
      "maid",
      "carpet",
      "cleaner",
      "cleaning",
      "spotremoval",
      "rugcleaning",
      "deepcleaning",
      "stainremoval",
      "steamcleaning",
      "carpetwashing",
      "carpetcleaning",
      "carpettreatment",
      "carpetshampooing",
      "carpetprotection",
      "carpetdeodorizing",
      "deepcarpetcleaning",
      "carpetsteamcleaning",
      "carpetprotectiontraetment",
    ],
  },
  {
    title: "House Cleaning",
    image: house_cleaning,
    quality: 95,
    price: "₹599",
    rating: 3,
    ratingCount: "400",
    services: [
      "Regular House Cleaning",
      "Deep Cleaning",
      "Kitchen Cleaning",
      "Bathroom Cleaning",
      "Window and Blind Cleaning",
    ],
    tags: [
      "maid",
      "blind",
      "house",
      "window",
      "kitchen",
      "cleaner",
      "bathroom",
      "cleaning",
      "deepcleaning",
      "blindcleaning",
      "housecleaning",
      "windowcleaning",
      "kitchencleaning",
      "regularcleaning",
      "bathroomcleaning",
      "regularhousecleaning",
      "windowandblindcleaning",
    ],
  },
];
