import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateToApplicationDate(inputDate: string) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateObj = new Date(inputDate);
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  return `${month} ${year}`;
}

export async function deletecloudinaryasset(publicId: string) {
  const response = await fetch("/api/utils/cloudinary/asset", {
    method: "DELETE",
    body: JSON.stringify({ publicId }),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }

  return response.json();
}

export function generateRandomId(length: number): string {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export const questionAnswerLorepIpsumText =
  "Nulla facilisi. Proin ac ante at nisi fringilla varius. Vivamus tincidunt orci sed mi lobortis, in lobortis sem vestibulum. Aliquam erat volutpat. Integer vestibulum ipsum eu enim fringilla, eget tempor justo ultricies. Duis eget convallis ex. Nunc in risus non sem varius lacinia. Nulla facilisi. Etiam vitae aliquam augue. Vivamus ut odio a libero egestas ultricies. Suspendisse potenti. Nam ultricies mauris vitae turpis varius, nec euismod sapien lobortis. Sed interdum dolor at urna bibendum, vel volutpat risus cursus. Phasellus ac urna lorem. Maecenas non massa a nisi volutpat scelerisque.";

export const generateFormattedMoneyValue = (
  amount: number,
  currency = "NGN"
) => {
  const options = {
    style: "currency",
    currency: currency, // Change to your desired currency code
    minimumFractionDigits: 2, // Minimum number of fraction digits
    maximumFractionDigits: 2, // Maximum number of fraction digits
  };

  const formatter = new Intl.NumberFormat("en-US", options);

  return formatter.format(amount);
};

export const removeLetters = (input: string) => {
  return input.replace(/[^0-9]/g, "");
};
