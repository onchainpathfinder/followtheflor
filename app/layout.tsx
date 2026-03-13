import type { Metadata } from "next"
import "./globals.css"
import CustomCursor from "@/components/layout/CustomCursor"

export const metadata: Metadata = {
  title: "FLOR — Fierce minds. Bold moves.",
  description:
    "Crypto compliance, fitness, and Mediterranean lifestyle. Real expertise, real life, no corporate BS.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
