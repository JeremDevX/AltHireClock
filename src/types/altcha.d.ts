// Minimal ambient declarations for the altcha widget used in the app.
// These avoid TypeScript errors and are intentionally loose — for full
// typings, install or provide the official type definitions from the
// altcha package if available.

interface AltchaWidget extends HTMLElement {
  // payload is set on the `statechange` event detail by the widget.
}

declare global {
  interface HTMLElementTagNameMap {
    "altcha-widget": AltchaWidget;
  }

  namespace JSX {
    interface IntrinsicElements {
      "altcha-widget": any;
    }
  }
}

export {};
