"use client"

import { useEffect, useState } from 'react';

export default function DelayedLayout({ children, delay = 2000 }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (isLoading) {
    return <div>Loading...</div>; // You can customize this loader
  }

  return <>{children}</>; // Render the page content after delay
}