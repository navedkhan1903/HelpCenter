import home from "../../public/home.jpg";
import cleaning from "../../public/cleaning.jpg";

const loginTitle = "Login - HelpCenter";
const loginDesc =
  "Securely access a world of convenience with our user-friendly login page – your gateway to personalized on-demand services.";

export const loginMetadata = {
  title: loginTitle,
  description: loginDesc,
  openGraph: {
    title: loginTitle,
    description: loginDesc,
    url: "https://helpcenter-web.vercel.app/login",
  },
  twitter: {
    title: loginTitle,
    description: loginDesc,
  },
};

const profileTitle = "My Profile - HelpCenter";
const profileDesc =
  "Bringing convenience to your doorstep – because life's too short for waiting in line!";

export const profileMetadata = {
  title: profileTitle,
  description: profileDesc,
  openGraph: {
    title: profileTitle,
    description: profileDesc,
    url: "https://helpcenter-web.vercel.app/profile",
  },
  twitter: {
    title: profileTitle,
    description: profileDesc,
  },
};

const servicesTitle = "Our Services - HelpCenter";
const servicesDesc =
  "Swift solutions tailored to your needs – On-demand excellence, always at your fingertips.";

export const servicesMetadata = {
  title: servicesTitle,
  description: servicesDesc,
  openGraph: {
    title: servicesTitle,
    description: servicesDesc,
    url: "https://helpcenter-web.vercel.app/services",
  },
  twitter: {
    title: servicesTitle,
    description: servicesDesc,
  },
};

const cleaningTitle = "Cleaning Services - HelpCenter";
const cleaningDesc =
  "Because a clean home is a happy home – and we're here to sprinkle a little joy, one spotless corner at a time!";

export const cleaningMetadata = {
  title: cleaningTitle,
  description: cleaningDesc,
  openGraph: {
    title: cleaningTitle,
    description: cleaningDesc,
    url: "https://helpcenter-web.vercel.app/services/home/cleaning",
    images: [{ url: cleaning.src }],
  },
  twitter: {
    title: cleaningTitle,
    description: cleaningDesc,
    images: [cleaning.src],
  },
};

const homeServicesTitle = "Home Services - HelpCenter";
const homeServicesDesc =
  "Because life's too short for household hassles – let us handle the to-dos while you focus on the ta-das!";

export const homeServicesMetadata = {
  title: homeServicesTitle,
  description: homeServicesDesc,
  openGraph: {
    title: homeServicesTitle,
    description: homeServicesDesc,
    url: "https://helpcenter-web.vercel.app/services/home",
    images: [{ url: home.src }],
  },
  twitter: {
    title: homeServicesTitle,
    description: homeServicesDesc,
    images: [home.src],
  },
};

const signupTitle = "Sign Up - HelpCenter";
const signupDesc =
  "Unlock a universe of tailored on-demand services by seamlessly signing up – your journey to personalized convenience begins here.";

export const signupMetadata = {
  title: signupTitle,
  description: signupDesc,
  openGraph: {
    title: signupTitle,
    description: signupDesc,
    url: "https://helpcenter-web.vercel.app/signup",
  },
  twitter: {
    title: signupTitle,
    description: signupDesc,
  },
};

const mainTitle = "HelpCenter - On-Demand Services";
const mainDesc =
  "Your wish, our command! Get what you need, when you need it, with just a click. Experience convenience like never before!";

export const mainMetadata = {
  title: mainTitle,
  description: mainDesc,
  openGraph: {
    title: mainTitle,
    description: mainDesc,
    url: "https://helpcenter-web.vercel.app",
  },
  twitter: {
    title: mainTitle,
    description: mainDesc,
  },
};
