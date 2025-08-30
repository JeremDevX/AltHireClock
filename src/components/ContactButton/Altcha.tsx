"use client";

import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

interface AltchaProps {
  onStateChange?: (ev: Event | CustomEvent) => void;
}

const Altcha = forwardRef<{ value: string | null }, AltchaProps>(
  ({ onStateChange }, ref) => {
    const widgetRef = useRef<HTMLElement | null>(null);
    const [value, setValue] = useState<string | null>(null);

    useImperativeHandle(
      ref,
      () => {
        return {
          get value() {
            return value;
          },
        };
      },
      [value]
    );

    useEffect(() => {
      if (typeof window !== "undefined") {
        import("altcha").catch(() => {});
      }

      const handleStateChange = (ev: Event | CustomEvent) => {
        if ("detail" in ev) {
          setValue(ev.detail.payload || null);
          onStateChange?.(ev);
        }
      };

      const { current } = widgetRef;

      if (current) {
        current.addEventListener("statechange", handleStateChange);
        return () =>
          current.removeEventListener("statechange", handleStateChange);
      }
    }, [onStateChange]);

    return (
      <altcha-widget
        ref={widgetRef}
        language="fr-fr"
        style={{
          "--altcha-max-width": "100%",
        }}
        challengeurl="/api/altcha"
      ></altcha-widget>
    );
  }
);

Altcha.displayName = "Altcha";

export default Altcha;
