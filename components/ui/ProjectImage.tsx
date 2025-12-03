"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallback?: React.ReactNode;
}

export default function ProjectImage({
  src,
  alt,
  width = 400,
  height = 250,
  className = "",
  fallback,
}: Props) {
  const [exists, setExists] = useState(false);

  useEffect(() => {
    if (!src || src.trim() === "") return;

    let cancelled = false;
    const img = new window.Image();
    img.src = src;

    img.onload = () => !cancelled && setExists(true);
    img.onerror = () => !cancelled && setExists(false);

    return () => {
      cancelled = true;
    };
  }, [src]);

  if (exists) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  }

  return (
    fallback ?? (
      <div className="flex items-center justify-center bg-gradient-subtle dark:bg-gray-800 rounded-xl h-40 text-gray-500">
        Preview coming soon…
      </div>
    )
  );
}
