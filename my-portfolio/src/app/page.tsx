"use client";
import React from "react";
import Image from "next/image";
import SecondaryButton from "@/components/SecondaryButton";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="container grid grid-cols-2 gap-2 justify-center h-screen w-auto bg-gray-100">
      <div className="flex container relative h-80 w-72 bg-custom-Color my-36 -ml-24 overflow-visible">
        <div className="absolute -right-6 -top-6 transform scale-150 ml-40">
          <Image
            src="/images/person1.jpg"
            alt="Profile Image"
            width={5304}
            height={7952}
            className="brightness-110 contrast-125"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex flex-col container bg-red-200 h-96 w-full my-24 -ml-80">
        <h2 className="flex flex-col font-bold items-start text-2xl font-serif mt-8">
          Hi, I'm Ayomide Kappo
        </h2>
        <p className="flex text-start text-base font-normal mt-8">
          Front-End Developer with a proven ability to collaborate effectively
          with senior developers while spending extra time on being mentored.
          Enjoy working closely with team members to ensure workloads are
          effectively redirected to bottlenecks and personally picking up the
          slack when necessary. With a passion for both personal growth and
          software development, I attended a 1000+ hour coding program to learn
          new languages while sharpening existing skills. Ready to apply my
          passion for coding to a talented engineering team to develop quality
          solutions.
        </p>
        <SecondaryButton
          text="View more"
          className="flex font-semibold items-start mt-5 bg-custom-Color w-32 h-auto rounded-full border border-spacing-1 border-slate-600"
          action={() => {
            router.push("/");
          }}
        />
      </div>
    </div>
  );
}
