"use client";
import React from "react";
import PrimaryButton from "@/components/PrimaryButton";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex container relative justify-between w-auto h-auto bg-gray-100 lg:shrink-0 mx-auto">
      <div className="flex flex-col container items-center bg-light-peach py-5 my-20 rounded-md">
        <h2 className="flex flex-col font-bold items-start text-2xl font-serif mt-5">
          Hi, I'm Ayomide Kappo
        </h2>
        <p className="flex text-start text-base font-normal mt-5">
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
        <PrimaryButton
          id="View"
          type="submit"
          text="View Portfolio"
          className="mt-6"
          action={() => {
            router.push("/");
          }}
        />
      </div>
    </div>
  );
}
