import { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "LongDistance AI - AI-Powered Platform for Long-Distance Relationships",
  description:
    "Stay connected with your long-distance partner through AI-powered date ideas, movie recommendations, games, and more. Make every moment special, no matter the distance.",
  keywords:
    "long distance relationship, AI relationship app, virtual date ideas, couples app, long distance couples, relationship tools",
  authors: [{ name: "LongDistance AI" }],
  openGraph: {
    title: "LongDistance AI - Bridging the Distance with AI",
    description:
      "Transform your long-distance relationship with AI-powered features: virtual dates, movie nights, games, and more. Stay connected, no matter the miles.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg", //TODO make this img
        width: 1200,
        height: 630,
        alt: "LongDistance AI Platform Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LongDistance AI - AI for Long-Distance Love",
    description:
      "Make long-distance relationships easier with AI-powered tools for staying connected.",
    images: ["/images/twitter-image.jpg"], // TODO: make this img
  },
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  themeColor: "#1F2937",
}
