"use client";

import { useState } from "react";
import Image from "next/image";
import { Title } from "@/components/mt24/title";
import { RegisterButton } from "@/components/mt24/register-button";
import { Play } from "lucide-react";

export default function PromoVideo() {
  const [play, setPlay] = useState(false);

  return (
    <section className="w-full bg-background py-24 px-6">
      <div className="mx-auto max-w-7xl text-center flex flex-col items-center gap-12">
        <Title>
          <Title.subTitle>Aftermovie 2025</Title.subTitle>
          <Title.mainTitle>DISCOVER THE EXPERIENCE</Title.mainTitle>
        </Title>

        <div className="relative w-full max-w-5xl aspect-video overflow-hidden rounded-[2.5rem] shadow-2xl border-gradient2 group">
          {!play ? (
            <>
              <Image
                src="/img/mt25_after_movie_thumbnail.png"
                alt="Aftermovie Marseille Throwdown 2025"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                sizes="(max-width: 768px) 100vw, 1200px"
              />

              <button
                onClick={() => setPlay(true)}
                aria-label="Play video"
                className="rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/40 z-20"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/20 backdrop-blur-md border border-primary/50 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300 shadow-[0_0_30px_rgba(var(--primary),0.2)]">
                  <Play className="ml-1 h-10 w-10 text-primary fill-primary" />
                </div>
              </button>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />
            </>
          ) : (
            <iframe
              className="absolute inset-0 h-full w-full z-30"
              src="https://www.youtube.com/embed/fw_idB67mts?autoplay=1"
              title="Marseille Throwdown 2025 Aftermovie"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        <div className="flex flex-col items-center gap-4">
          <RegisterButton textOverwrite="JOIN THE BATTLE" />
          <p className="text-gray-500 uppercase tracking-[0.3em] text-xs">
            Experience it live in Marseille
          </p>
        </div>
      </div>
    </section>
  );
}
