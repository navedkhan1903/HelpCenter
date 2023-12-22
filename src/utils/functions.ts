import toast from "react-hot-toast";

export function validateLogin(email: string, pass: string) {
  if (!/^\S+@\S+\.\S+$/.test(email)) toast.error("Invalid Email Address");
  else if (!pass) toast.error("Password is required");
  else {
    return true;
  }
  return false;
}

export function validateSignup(name: string, email: string, pass: string) {
  if (!name) toast.error("Full Name is required");
  else if (!/^\S+@\S+\.\S+$/.test(email)) toast.error("Invalid Email Address");
  else if (pass.length < 6)
    toast.error("Password must be atleast 6 characters long");
  else {
    return true;
  }
  return false;
}
