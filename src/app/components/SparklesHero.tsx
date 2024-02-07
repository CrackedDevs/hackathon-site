"use client";
import React from "react";
import SparklesCore from "@/components/ui/SparklesCore";

export default function SparklesHero() {
  return (
    <section className="h-[100vh] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute w-full h-full z-10 inset-0 bg-[url(/grid.svg)] bg-center bg-cover opacity-30 [mask-image:linear-gradient(180deg,rgba(255,255,255,255))]"></div>
      <p className="text-center text-secondary z-20 text-sm md:text-lg font-bold my-1">
          Online, Late Feb!
        </p>
        <p className="text-center text-secondary z-20 text-sm md:text-lg font-bold my-1">
          TBA Soon!
        </p>
      <h1 className="text-4xl sm:text-8xl lg:mb-0 font-bold text-center text-white relative z-20">
        <div className="bg-gradient-to-br from-[#6366F1] to-white text-transparent bg-clip-text">CrackedDevs.com</div> Hackathon 2.0
      </h1>
      <div className="w-[40rem] h-28 relative mb-6">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={2}
          particleDensity={600}
          className="w-full h-full z-10"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
      </div>
      <a
          href="#"
          target="_blank"
          className="z-40 cursor-pointer rounded-lg capitalize text-lg py-2 px-4 md:px-6 lg:px-8 bg-white text-black"
        >
          Coming Soon!
        </a>
    </section>
  );
}
