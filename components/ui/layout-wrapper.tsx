"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { LoadingScreen } from "./loading-screen";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showLoading, setShowLoading] = useState(true);
  const [hasShownLoading, setHasShownLoading] = useState(false);

  // Check if current path is studio
  const isStudioRoute = pathname?.startsWith("/studio");

  // Check if this is the first visit to the main site
  useEffect(() => {
    // Only show loading on the homepage and if not already shown in this session
    const isHomePage = pathname === "/";
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoading');

    if (!isHomePage || hasSeenLoading || isStudioRoute) {
      setShowLoading(false);
      setHasShownLoading(true);
    }
  }, [pathname, isStudioRoute]);

  const handleLoadingComplete = () => {
    setShowLoading(false);
    setHasShownLoading(true);
    // Mark as seen for this session
    sessionStorage.setItem('hasSeenLoading', 'true');
  };

  // Show loading screen
  if (showLoading && !hasShownLoading && !isStudioRoute) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  if (isStudioRoute) {
    // For studio routes, render only the children without navbar/footer
    return <>{children}</>;
  }

  // For all other routes, render with navbar and footer
  return (
    <div className="bg-black">
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
