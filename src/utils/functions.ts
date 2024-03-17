import toast from "react-hot-toast";

function validateEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

export function validateLogin(email: string, pass: string) {
  if (!validateEmail(email) || !pass) {
    toast.error(!pass ? "Password is required" : "Invalid Email Address");
    return false;
  }
  return true;
}

export function validateSignup(name: string, email: string, pass: string) {
  if (!name || !validateEmail(email) || pass.length < 6) {
    toast.error(
      !name
        ? "Full Name is required"
        : pass.length < 6
        ? "Password must be at least 6 characters long"
        : "Invalid Email Address",
    );
    return false;
  }
  return true;
}

export function validateAddress(values: any, state: string) {
  if (!/^\d{10}$/.test(values.phone)) toast.error("Invalid Phone Number");
  else if (values.altPhone.length > 0 && !/^\d{10}$/.test(values.altPhone))
    toast.error("Invalid Alternate Phone Number");
  else if (!/^\d{6}$/.test(values.pincode)) toast.error("Invalid Pincode");
  else if (!values.locality) toast.error("Locality is Required");
  else if (!values.address) toast.error("Address is Required");
  else if (!values.city) toast.error("City is Required");
  else if (!state) toast.error("State is Required");
  else return true;
  return false;
}

export function capitalizeFirstLetterOfEachWord(str: string) {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

export function generateUniqueId() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from(
    { length: 3 },
    () => characters[Math.floor(Math.random() * characters.length)],
  ).join("");
}

interface breadcrumbProps {
  position: number;
  name: String;
  item: String;
}

export const createBreadcrumb = (items: any) => ({
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ position, name, item }: breadcrumbProps) => ({
      "@type": "ListItem",
      position,
      name,
      item,
    })),
  }),
});

export function validateStep(
  step: number,
  date: any,
  selectedSlot: String,
  selectedAddress: any,
) {
  const validations: { [key: number]: () => boolean } = {
    1: () => date < new Date().setHours(0, 0, 0, 0),
    2: () =>
      !selectedSlot ||
      (date.getDate() === new Date().getDate() &&
        ((selectedSlot === "Morning" && new Date().getHours() >= 12) ||
          (selectedSlot === "Afternoon" && new Date().getHours() >= 15) ||
          (selectedSlot === "Evening" && new Date().getHours() >= 18) ||
          (selectedSlot === "Night" && new Date().getHours() >= 21))),
    3: () => !selectedAddress,
  };

  if (validations[step] && validations[step]()) {
    toast.error(
      step === 1
        ? "Selected date must be today or a future date"
        : step === 2
        ? "Kindly select a suitable slot"
        : "Kindly select an address",
    );
    return false;
  }
  return true;
}

export function formatDate(date: Date) {
  return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;
}

export function formatTime(date: Date) {
  return `${(date.getHours() % 12 || 12).toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")} ${date.getHours() >= 12 ? "PM" : "AM"}`;
}

export function generateMetadata(
  title: String,
  desc: String,
  url: String,
  images: any,
) {
  return {
    title: title,
    description: desc,
    openGraph: {
      title: title,
      description: desc,
      url: url,
      images: [{ url: images.src }],
    },
    twitter: {
      title: title,
      description: desc,
      images: [images.src],
    },
  };
}
