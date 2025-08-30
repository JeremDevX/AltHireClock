"use client";

import { use, useEffect, useState } from "react";
import styles from "./Analytics.module.scss";

interface AnalyticsProps {
  //Add props here
}

export default function Analytics({}: AnalyticsProps) {
  const [isClient, setIsClient] = useState(false);

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

      console.log("User Agent:", ua);
      console.log("Browser:", browser);
      console.log("OS:", os);
      if (!localStorage.getItem("visitor_id")) {
        const crypto = require("crypto");
        localStorage.setItem(
          "visitor_id",
          crypto.randomBytes(20).toString("hex")
        );
      }
    }
  }, [isClient]);

  return <></>;
}
