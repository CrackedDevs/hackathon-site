"use client";
import React from "react";
import SparklesCore from "@/components/ui/SparklesCore";
import Input from "./Input";

export default function SparklesHero() {
  return (
    <section className="h-[100vh] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute w-full h-full z-10 inset-0 bg-[url(/grid.svg)] bg-center bg-cover opacity-30 [mask-image:linear-gradient(180deg,rgba(255,255,255,255))]"></div>
      <h1 className="text-5xl lg:text-8xl font-bold text-center text-white relative z-20">
        <div className="bg-gradient-to-br from-[#6366F1] to-white text-transparent bg-clip-text">CrackedDevs</div> Hackathon
      </h1>
      <div className="w-[40rem] h-28 relative">
        <p className="text-secondary absolute z-20 left-52 top-5 text-sm md:text-lg font-bold my-5">
          Online, January 20 - 22
        </p>
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={2}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <div>
      <p className="text-secondary text-sm md:text-xl my-5 text-center">
        Sign Up for the upcoming announcements.
      </p>
        <Input />
      </div>
      <p className="text-secondary mt-5 text-sm md:text-xl opacity-40 hover:opacity-90 hover:cursor-pointer">
        More details coming soon...
      </p>
    </section>
  );
}
