"use client";
import React from "react";
import SparklesCore from "@/components/ui/SparklesCore";
import Input from "./Input";

export default function SparklesHero() {
  return (
    <div className="h-[100vh] w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <p className="text-secondary text-sm md:text-xl font-bold my-5">
        Online, January 20 - 22
      </p>
      <h1 className="text-5xl lg:text-8xl font-bold text-center text-white relative z-20">
        CrackedDevs <br /> Hackathon
      </h1>
      <div className="w-[40rem] h-40 relative">
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
      <div className="my-8">
      <p className="text-secondary text-sm md:text-xl my-5 text-center">
        Sign Up Now
      </p>
        <Input />
      </div>
      <p className="text-secondary text-sm md:text-xl my-5 opacity-40 hover:opacity-90 hover:cursor-pointer">
        More details coming soon
      </p>
    </div>
  );
}
