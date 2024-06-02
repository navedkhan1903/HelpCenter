import home from "../../public/home.jpg";
import main from "../../public/main.jpg";
import { generateMetadata } from "./functions";
import cleaning from "../../public/cleaning.jpg";
import house from "../../public/house_cleaning.jpg";
import carpet from "../../public/carpet_cleaning.jpg";
import appliance from "../../public/appliance_cleaning.jpg";

export const applianceCleaningMetadata = generateMetadata(
  "Appliance Cleaning - HelpCenter",
  "Revitalize your appliances with expert cleaning services: refrigerators, ovens, dishwashers, microwaves, and washing machines.",
  "https://helpcenter-web.vercel.app/book-service/appliance-cleaning",
  appliance,
);

export const bookedServicesMetadata = generateMetadata(
  "Booked Services - HelpCenter",
  "Your schedule's so full, it's like your appointments booked themselves! Check out your service spree!",
  "https://helpcenter-web.vercel.app/booked-services",
  main,
);

export const carpetCleaningMetadata = generateMetadata(
  "Carpet Cleaning - HelpCenter",
  "Refresh your carpets with professional services: deep steam cleaning, stain removal, shampooing, deodorizing, and protection.",
  "https://helpcenter-web.vercel.app/book-service/carpet-cleaning",
  carpet,
);

export const cleaningMetadata = generateMetadata(
  "Cleaning Services - HelpCenter",
  "Because a clean home is a happy home – and we're here to sprinkle a little joy, one spotless corner at a time!",
  "https://helpcenter-web.vercel.app/services/home/cleaning",
  cleaning,
);

export const homeServicesMetadata = generateMetadata(
  "Home Services - HelpCenter",
  "Because life's too short for household hassles – let us handle the to-dos while you focus on the ta-das!",
  "https://helpcenter-web.vercel.app/services/home",
  home,
);

export const houseCleaningMetadata = generateMetadata(
  "House Cleaning - HelpCenter",
  "Transform your home with top-quality services: regular cleaning, deep cleaning, kitchen, bathroom, and window cleaning.",
  "https://helpcenter-web.vercel.app/book-service/house-cleaning",
  house,
);

export const loginMetadata = generateMetadata(
  "Login - HelpCenter",
  "Securely access a world of convenience with our user-friendly login page – your gateway to personalized on-demand services.",
  "https://helpcenter-web.vercel.app/login",
  main,
);

export const mainMetadata = generateMetadata(
  "HelpCenter - On-Demand Services",
  "Your wish, our command! Get what you need, when you need it, with just a click. Experience convenience like never before!",
  "https://helpcenter-web.vercel.app",
  main,
);

export const servicesMetadata = generateMetadata(
  "Our Services - HelpCenter",
  "Swift solutions tailored to your needs – On-demand excellence, always at your fingertips.",
  "https://helpcenter-web.vercel.app/services",
  main,
);

export const signupMetadata = generateMetadata(
  "Sign Up - HelpCenter",
  "Unlock a universe of tailored on-demand services by seamlessly signing up – your journey to personalized convenience begins here.",
  "https://helpcenter-web.vercel.app/signup",
  main,
);
