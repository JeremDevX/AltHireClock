// Minimal ambient declarations for the altcha widget used in the app.
// These avoid TypeScript errors and are intentionally loose — for full
// typings, install or provide the official type definitions from the
// altcha package if available.

// Use a type alias instead of an empty interface to avoid the
// `@typescript-eslint/no-empty-object-type` rule; extend later via
// intersection if additional members are needed.
type AltchaWidget = HTMLElement;

declare global {
  interface HTMLElementTagNameMap {
    "altcha-widget": AltchaWidget;
  }

  namespace JSX {
    interface IntrinsicElements {
      "altcha-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<AltchaWidget>,
        AltchaWidget
      >;
    }
  }
}

export {};
