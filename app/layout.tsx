export const metadata = {
  title: "TAP TECH | The Smart Business Card",
};

const tailwindConfigScript = `
  tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          "surface-dim": "#121414",
          "inverse-primary": "#715d00",
          "primary-fixed": "#ffe177",
          "inverse-on-surface": "#2f3131",
          "surface-container-highest": "#333535",
          error: "#ffb4ab",
          "on-secondary-fixed-variant": "#474746",
          background: "#090909",
          secondary: "#c8c6c5",
          "secondary-fixed-dim": "#c8c6c5",
          "on-primary-container": "#705c00",
          "tertiary-fixed-dim": "#c8c6c5",
          "surface-variant": "#333535",
          "surface-tint": "#ebc300",
          "on-tertiary-fixed": "#1b1c1c",
          "surface-container-lowest": "#0c0f0f",
          "surface-bright": "#37393a",
          tertiary: "#f6f3f3",
          "on-secondary-fixed": "#1c1b1b",
          "on-tertiary": "#303030",
          "primary-container": "#ffd400",
          "primary-fixed-dim": "#ebc300",
          "surface-container-low": "#1a1c1c",
          "on-primary-fixed": "#231b00",
          "tertiary-container": "#dad7d7",
          "on-secondary-container": "#b7b5b4",
          "surface-container": "#1e2020",
          "on-error": "#690005",
          outline: "#999077",
          "on-background": "#e2e2e2",
          "on-primary": "#3b2f00",
          "error-container": "#93000a",
          "surface-container-high": "#282a2b",
          "on-tertiary-container": "#5e5d5d",
          "on-surface-variant": "#d0c6ab",
          "on-error-container": "#ffdad6",
          "secondary-fixed": "#e5e2e1",
          "on-primary-fixed-variant": "#554500",
          "inverse-surface": "#e2e2e2",
          surface: "#121414",
          "secondary-container": "#474746",
          "tertiary-fixed": "#e4e2e1",
          primary: "#fff3d6",
          "outline-variant": "#4d4632",
          "on-tertiary-fixed-variant": "#474746",
          "on-surface": "#e2e2e2",
          "on-secondary": "#313030"
        },
        borderRadius: {
          DEFAULT: "0.125rem",
          lg: "0.25rem",
          xl: "0.5rem",
          full: "0.75rem"
        },
        spacing: {
          "container-max": "1280px",
          unit: "8px",
          "margin-mobile": "16px",
          "margin-desktop": "48px",
          gutter: "24px"
        },
        fontFamily: {
          "headline-lg": ["Geist"],
          "body-md": ["Geist"],
          "headline-xl": ["Geist"],
          "label-sm": ["JetBrains Mono"],
          "headline-lg-mobile": ["Geist"],
          "headline-md": ["Geist"],
          "body-lg": ["Geist"]
        },
        fontSize: {
          "headline-lg": ["40px", { lineHeight: "48px", letterSpacing: "-0.01em", fontWeight: "600" }],
          "body-md": ["16px", { lineHeight: "24px", letterSpacing: "0", fontWeight: "400" }],
          "headline-xl": ["64px", { lineHeight: "72px", letterSpacing: "-0.02em", fontWeight: "700" }],
          "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "500" }],
          "headline-lg-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "600" }],
          "headline-md": ["24px", { lineHeight: "32px", letterSpacing: "0", fontWeight: "500" }],
          "body-lg": ["18px", { lineHeight: "28px", letterSpacing: "0", fontWeight: "400" }]
        }
      }
    }
  };
`;

const pageStyles = `
  body {
    background-color: #090909;
    color: #e2e2e2;
    overflow-x: hidden;
  }
  .material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  }
  .glass-card {
    background: rgba(26, 26, 26, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.05);
  }
  .primary-glow {
    filter: drop-shadow(0 0 15px rgba(255, 212, 0, 0.15));
  }
  .hero-glow {
    background: radial-gradient(circle at center, rgba(255, 212, 0, 0.12) 0%, rgba(9, 9, 9, 0) 70%);
  }
  @keyframes float {
    0%, 100% { transform: translateY(0) rotateX(5deg) rotateY(10deg); }
    50% { transform: translateY(-20px) rotateX(-5deg) rotateY(-5deg); }
  }
  .floating-card {
    animation: float 6s ease-in-out infinite;
    perspective: 1000px;
  }
  .faq-transition {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }
  .faq-open .faq-transition {
    max-height: 200px;
  }
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=JetBrains+Mono:wght@100..900&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script id="tailwind-config" dangerouslySetInnerHTML={{ __html: tailwindConfigScript }} />
        <style dangerouslySetInnerHTML={{ __html: pageStyles }} />
      </head>
      <body className="font-body-md text-body-md antialiased">{children}</body>
    </html>
  );
}
