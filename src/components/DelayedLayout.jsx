"use client";

import CircularProgress from "@mui/material/CircularProgress";

import { useEffect, useState } from "react";

export default function DelayedLayout({ children, delay = 10000 }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4 justify-center items-center py-40 text-xl text-white text-center">
        <span>Loading...</span>
        <CircularProgress size="3rem" />
      </div>
    ); // You can customize this loader
  }

  return <>{children}</>; // Render the page content after delay
}
