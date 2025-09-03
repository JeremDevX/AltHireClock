"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Analytics() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const uaRaw = navigator.userAgent || "";
      const ua = uaRaw.toLowerCase();

      const isEdge = ua.includes("edg/");
      const isOpera = ua.includes("opr/");
      const isFirefox = ua.includes("firefox/");
      const isChrome = ua.includes("chrome/");
      const isSafari = ua.includes("safari/");

      const browser = isEdge
        ? "Edge"
        : isOpera
        ? "Opera"
        : isFirefox
        ? "Firefox"
        : isChrome
        ? "Chrome"
        : isSafari
        ? "Safari"
        : "Unknown";

      const isWindows = ua.includes("windows");
      const isMac = ua.includes("mac os") || ua.includes("macintosh");
      const isLinux = ua.includes("linux");
      const isAndroid = ua.includes("android");
      const isIOS = ua.includes("iphone") || ua.includes("ipad");

      const os = isWindows
        ? "Windows"
        : isMac
        ? "Mac OS"
        : isLinux
        ? "Linux"
        : isAndroid
        ? "Android"
        : isIOS
        ? "iOS"
        : "Unknown";

      if (!localStorage.getItem("visitor_id")) {
        localStorage.setItem("visitor_id", crypto.randomUUID());
      }

      fetch("/api/analytics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          visitor_id: localStorage.getItem("visitor_id"),
          browser,
          os,
        }),
        keepalive: true,
      }).finally(() => {
        router.refresh();
      });
    }
  }, [isClient]);

  return <></>;
}
