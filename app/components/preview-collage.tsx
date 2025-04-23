"use client";

import Image from "next/image";

interface PreviewCollageProps {
  images: string[];
}

export default function PreviewCollage({ images }: PreviewCollageProps) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl grid grid-cols-2 gap-4 blur-xs">
        {images.map((src, i) => (
          <div
            key={i}
            className={`relative w-full h-40 sm:h-56 rounded-xl overflow-hidden shadow-lg ${
              i % 2 === 0 ? "translate-y-4" : "-translate-y-4"
            }`}
          >
            <Image
              src={src}
              alt={`Preview ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
